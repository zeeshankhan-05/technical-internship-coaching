-- Fit check / intake form submissions
CREATE TABLE IF NOT EXISTS public.intake_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  school_major text NOT NULL,
  graduation_date text NOT NULL,
  target_role text NOT NULL,
  recruiting_season text NOT NULL,
  biggest_challenge text NOT NULL,
  work_authorization text,
  linkedin_url text,
  resume_storage_path text,
  resume_file_name text,
  ai_processing text CHECK (ai_processing IS NULL OR ai_processing IN ('consent', 'opt-out')),
  privacy_consent boolean NOT NULL DEFAULT true
);

CREATE INDEX IF NOT EXISTS intake_submissions_created_at_idx
  ON public.intake_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS intake_submissions_email_idx
  ON public.intake_submissions (email);

ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false,
  5242880,
  ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.set_intake_submissions_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS intake_submissions_updated_at ON public.intake_submissions;

CREATE TRIGGER intake_submissions_updated_at
  BEFORE UPDATE ON public.intake_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.set_intake_submissions_updated_at();
