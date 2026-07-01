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

### Edge Functions

- `submit-intake` — validates the form, inserts a row, and uploads resumes when provided
- `sync-to-sheets` — syncs `intake_submissions` changes to a Google Sheet via Database Webhooks

Source lives in `supabase/functions/`.

## Google Sheets sync

`intake_submissions` rows are mirrored one-way into a Google Sheet. Column A is `id` (used for UPDATE/DELETE lookups). Row 1 contains headers matching the database column names.

**Note:** `submit-intake` performs an INSERT followed by an UPDATE (resume metadata). Expect two webhook fires per new form submission.

### A. Google Cloud Service Account

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. Enable **Google Sheets API**: APIs & Services → Library → search "Google Sheets API" → Enable.
3. Create credentials: APIs & Services → Credentials → **Create credentials** → **Service account**.
4. Name it (e.g. `supabase-sheets-sync`), skip optional role grants, and finish.
5. Open the service account → **Keys** → **Add key** → **Create new key** → **JSON**. Save locally (do not commit).
6. Copy the service account email (e.g. `supabase-sheets-sync@....iam.gserviceaccount.com`).

### B. Share the Google Sheet

1. Create a Google Sheet (or use an existing one).
2. Rename the first tab to **`intake_submissions`** (or set `SHEET_NAME` to match your tab).
3. Click **Share** → paste the service account email → role **Editor**.
4. Copy the **Spreadsheet ID** from the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`

### C. Supabase secrets

**Dashboard:** Project → **Edge Functions** → **Secrets**

| Secret | Value |
| --- | --- |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Entire JSON key file contents as one string (minified) |
| `SPREADSHEET_ID` | ID from the sheet URL |
| `SHEET_NAME` | `intake_submissions` |

**CLI alternative:**

```bash
supabase link --project-ref qncraywmpdvklxqogpkm
supabase secrets set \
  GOOGLE_SERVICE_ACCOUNT_KEY="$(cat path/to/key.json | jq -c .)" \
  SPREADSHEET_ID="your-spreadsheet-id" \
  SHEET_NAME="intake_submissions"
```

### D. Deploy the Edge Function

```bash
supabase functions deploy sync-to-sheets --no-verify-jwt
```

### E. Backfill existing rows

Create `.env.seed` from `.env.example` with your service role key and Google credentials, then run:

```bash
deno run --allow-net --allow-env --env-file=.env.seed scripts/seed-sheets.ts
```

Verify the sheet has existing data rows plus the header row before enabling the webhook.

### F. Database Webhook

**Dashboard:** [Database Webhooks](https://supabase.com/dashboard/project/qncraywmpdvklxqogpkm/integrations/webhooks/overview) → **Create a new hook**

| Setting | Value |
| --- | --- |
| **Name** | `sync-intake-to-sheets` |
| **Table** | `public.intake_submissions` |
| **Events** | Insert, Update, Delete |
| **Type** | Supabase Edge Functions |
| **Edge Function** | `sync-to-sheets` |
| **HTTP Method** | `POST` |
| **Timeout** | `1000` ms (increase to `5000` if Google API latency causes timeouts) |

**Custom URL fallback** (if not using the Edge Functions picker):

```
https://qncraywmpdvklxqogpkm.supabase.co/functions/v1/sync-to-sheets
```

Add headers: `Authorization: Bearer <service_role_key>` and `apikey: <service_role_key>`.

### G. Verify end-to-end

1. Insert a test row in Table Editor → new row appears in the sheet.
2. Edit a field → row updates in place (same `id` in column A).
3. Delete the test row → row is removed from the sheet.
4. Submit the live fit-check form → row appears (may take two updates as resume metadata is attached).


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
