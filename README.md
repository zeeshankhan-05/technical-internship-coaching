# technical-internship-coaching

Website for **Technical Internship Coaching with Zeeshan Khan**.

Built with Astro, TypeScript, Tailwind CSS, and Supabase.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `PUBLIC_SUPABASE_URL` | Supabase project API URL |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable or anon key (safe for the browser) |

Fit check submissions are stored in Supabase via the `submit-intake` Edge Function.

## Supabase project

- **Project:** `technical-internship-coaching`
- **Region:** `us-east-1`
- **Dashboard:** [Supabase project](https://supabase.com/dashboard/project/qncraywmpdvklxqogpkm)

### Database

- `public.intake_submissions` — fit check form data
- `storage.resumes` — private bucket for optional resume uploads (PDF/DOC/DOCX, 5 MB max)

Row Level Security is enabled with **no public policies** — only the Edge Function (service role) can read or write data.

### Edge Function

- `submit-intake` — validates the form, inserts a row, and uploads resumes when provided

Source lives in `supabase/functions/submit-intake/index.ts`.

## Build

```bash
npm run build
```

## Deploy (Netlify)

1. Connect the repo to Netlify
2. Add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` as environment variables
3. Deploy

## Viewing submissions

### Form responses

Open the [Supabase dashboard](https://supabase.com/dashboard/project/qncraywmpdvklxqogpkm) → **Table Editor** → `intake_submissions`.

Each row includes the applicant's answers plus:

- `resume_file_name` — original filename (e.g. `Jane_Doe_Resume.pdf`)
- `resume_storage_path` — path inside the private bucket (e.g. `{submission-id}/Jane_Doe_Resume.pdf`)

### Downloading resumes (PDF / DOCX)

1. Go to **Storage** → **resumes** (private bucket).
2. Open the folder named with the submission's `id` from the table row.
3. Click the file, then **Download** (or preview PDFs in the browser).

Files are stored at `{submission_id}/{original_filename}` when the form is submitted. Only your Supabase project owner account can access them through the dashboard.
