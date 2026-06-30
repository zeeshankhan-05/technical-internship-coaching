/**
 * Central site configuration.
 * Replace PLACEHOLDER values before production launch.
 */

export const siteConfig = {
  siteName: 'Technical Internship Coaching with Zeeshan Khan',
  founderName: 'Zeeshan Khan',
  tagline:
    'Turn your technical work into a stronger internship application and a clearer recruiting system.',
  supportingStatement:
    'One-on-one coaching for students pursuing software engineering, AI, data, and related technical internships—from résumé and project positioning to applications, networking, and preparation.',

  /** PLACEHOLDER — replace with your public domain before launch (e.g. https://example.com) */
  siteUrl: 'https://PLACEHOLDER-DOMAIN.com',

  /** PLACEHOLDER — replace with your LinkedIn profile URL before launch */
  linkedinUrl: 'https://www.linkedin.com/in/PLACEHOLDER',

  /** PLACEHOLDER — replace with your contact email before launch */
  contactEmail: 'PLACEHOLDER@example.com',

  calendlyUrl: 'https://calendly.com/zeekhan-business/30min',

  /** PLACEHOLDER — add payment URL when ready */
  paymentUrl: '',

  foundingPrice: 299,
  paymentPlanFirst: 150,
  paymentPlanSecond: 149,
  sessionCount: 6,
  sessionDurationMinutes: 45,
  programDurationWeeks: 6,
  maxCompletionWeeks: 8,
  resumeReviewRounds: 3,
  strategyCallDurationMinutes: 30,

  /** Set to true only when manually and truthfully enabled */
  showCapacityScarcity: false,
  capacitySpotsRemaining: 0,

  /** Optional analytics — disabled by default. See README for integration. */
  analyticsEnabled: false,

  testimonialsEnabled: false,

  disclaimerText:
    'This coaching service is independently operated by Zeeshan Khan and is not affiliated with or endorsed by the University of Illinois Urbana-Champaign, Splunk, Cisco, or any other employer mentioned.',

  programName: 'Technical Internship Application Accelerator',

  /** Résumé upload limits */
  resumeMaxSizeBytes: 5 * 1024 * 1024, // 5 MB
  resumeAcceptedExtensions: ['.pdf', '.doc', '.docx'] as const,
} as const;

export type SiteConfig = typeof siteConfig;
