-- Migrate existing deployments that still have the combined school_major column
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'intake_submissions'
      AND column_name = 'school_major'
  ) THEN
    ALTER TABLE public.intake_submissions
      ADD COLUMN IF NOT EXISTS school text,
      ADD COLUMN IF NOT EXISTS major text;

    UPDATE public.intake_submissions
    SET
      school = trim(split_part(school_major, '—', 1)),
      major = nullif(trim(split_part(school_major, '—', 2)), '')
    WHERE school_major IS NOT NULL
      AND school IS NULL;

    UPDATE public.intake_submissions
    SET
      school = coalesce(school, trim(split_part(school_major, '-', 1))),
      major = coalesce(major, nullif(trim(split_part(school_major, '-', 2)), ''))
    WHERE school_major IS NOT NULL
      AND (school IS NULL OR major IS NULL);

    UPDATE public.intake_submissions
    SET school = school_major
    WHERE school_major IS NOT NULL
      AND school IS NULL;

    UPDATE public.intake_submissions
    SET major = ''
    WHERE major IS NULL;

    ALTER TABLE public.intake_submissions
      ALTER COLUMN school SET NOT NULL,
      ALTER COLUMN major SET NOT NULL;

    ALTER TABLE public.intake_submissions
      DROP COLUMN school_major;
  END IF;
END $$;
