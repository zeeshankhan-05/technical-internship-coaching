import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["pdf", "doc", "docx"]);

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const formData = await req.formData();

    const botField = formData.get("bot-field");
    if (botField && String(botField).trim()) {
      return jsonResponse({ ok: true });
    }

    const requiredFields = [
      "fullName",
      "email",
      "schoolMajor",
      "graduationDate",
      "targetRole",
      "recruitingSeason",
      "biggestChallenge",
    ];

    for (const field of requiredFields) {
      const value = formData.get(field);
      if (!value || !String(value).trim()) {
        return jsonResponse({ error: `Missing field: ${field}` }, 400);
      }
    }

    if (formData.get("privacyConsent") !== "consented") {
      return jsonResponse({ error: "Privacy consent required" }, 400);
    }

    const email = String(formData.get("email")).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Invalid email" }, 400);
    }

    const linkedinUrl = formData.get("linkedinUrl");
    if (linkedinUrl && !/^https?:\/\/.+/i.test(String(linkedinUrl))) {
      return jsonResponse({ error: "Invalid LinkedIn URL" }, 400);
    }

    const resume = formData.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      return jsonResponse({ error: "Resume required" }, 400);
    }

    const ext = resume.name.split(".").pop()?.toLowerCase();
    if (!ext || !ALLOWED_EXTENSIONS.has(ext) || resume.size > MAX_RESUME_BYTES) {
      return jsonResponse({ error: "Invalid resume file" }, 400);
    }

    const aiProcessing = formData.get("aiProcessing");
    if (!aiProcessing || !["consent", "opt-out"].includes(String(aiProcessing))) {
      return jsonResponse({ error: "AI processing preference required" }, 400);
    }

    const { data: submission, error: insertError } = await supabase
      .from("intake_submissions")
      .insert({
        full_name: String(formData.get("fullName")).trim(),
        email,
        school_major: String(formData.get("schoolMajor")).trim(),
        graduation_date: String(formData.get("graduationDate")).trim(),
        target_role: String(formData.get("targetRole")).trim(),
        recruiting_season: String(formData.get("recruitingSeason")).trim(),
        biggest_challenge: String(formData.get("biggestChallenge")).trim(),
        work_authorization: formData.get("workAuthorization")
          ? String(formData.get("workAuthorization")).trim()
          : null,
        linkedin_url: linkedinUrl ? String(linkedinUrl).trim() : null,
        ai_processing: String(formData.get("aiProcessing")),
        privacy_consent: true,
      })
      .select("id")
      .single();

    if (insertError || !submission) {
      console.error(insertError);
      return jsonResponse({ error: "Failed to save submission" }, 500);
    }

    const path = `${submission.id}/${resume.name}`;
    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(path, resume, { contentType: resume.type, upsert: false });

    if (uploadError) {
      console.error(uploadError);
      await supabase.from("intake_submissions").delete().eq("id", submission.id);
      return jsonResponse({ error: "Resume upload failed" }, 500);
    }

    const { error: updateError } = await supabase
      .from("intake_submissions")
      .update({ resume_storage_path: path, resume_file_name: resume.name })
      .eq("id", submission.id);

    if (updateError) {
      console.error(updateError);
      return jsonResponse({ error: "Failed to finalize submission" }, 500);
    }

    return jsonResponse({ ok: true, id: submission.id });
  } catch (error) {
    console.error(error);
    return jsonResponse({ error: "Unexpected error" }, 500);
  }
});
