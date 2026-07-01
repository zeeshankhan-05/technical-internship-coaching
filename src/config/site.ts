/**
 * Central site configuration.
 * Replace PLACEHOLDER values before production launch.
 */

export const siteConfig = {
  siteName: 'Technical Internship Coaching with Zeeshan Khan',
  brandLine: 'Zeeshan Khan · Internship Coaching',
  founderName: 'Zeeshan Khan',
  founderTitle: 'Software Engineering Intern at Splunk',
  tagline: 'Get honest resume feedback before your next application.',
  heroEyebrow: 'Free coaching call for students',
  heroSupporting:
    'Book a free 20-minute call. I will review your resume and give you actionable feedback—completely free, with no obligation to enroll.',
  supportingStatement:
    'One-on-one coaching for students pursuing software engineering, AI, data, and related technical internships—from resume and project positioning to applications, networking, and preparation.',

  siteUrl: 'https://PLACEHOLDER-DOMAIN.com',

  linkedinUrl: 'https://www.linkedin.com/in/zeeshankhan05/',

  contactEmail: 'PLACEHOLDER@example.com',

  calendlyUrl: 'https://calendly.com/zeekhan-business/30min',

  founderPhotoUrl: '/founder.jpg',

  paymentUrl: '',

  responseTime: 'I normally respond within two business days.',

  phases: {
    application: 'Part one · Tell me about your search',
    schedule: 'Part two · Pick a time for your call',
  },

  cta: {
    primary: 'Start Your Application',
    submit: 'Schedule Your Free Call',
    secondary: 'See what is included',
    scrollApply: 'Open the application',
    afterSubmit: 'Choose your call time',
    enroll: 'Enroll in the founding pilot',
    viewProgram: 'View the full program',
  },

  trustLine: 'Free resume feedback on the call · 20 minutes · No charge · No obligation',

  foundingPrice: 299,
  paymentPlanFirst: 150,
  paymentPlanSecond: 149,
  sessionCount: 6,
  sessionDurationMinutes: 45,
  programDurationWeeks: 6,
  maxCompletionWeeks: 8,
  resumeReviewRounds: 3,
  strategyCallDurationMinutes: 20,

  showCapacityScarcity: false,
  capacitySpotsRemaining: 0,
  analyticsEnabled: false,
  testimonialsEnabled: false,

  disclaimerText:
    'I independently operate this coaching service. It is not affiliated with or endorsed by the University of Illinois Urbana-Champaign, Splunk, Cisco, or any other employer mentioned.',

  programName: 'Technical Internship Application Accelerator',
  applicationTitle: 'Tell me about your search',
  applicationSubtitle:
    'A short application helps me prepare for our call. Upload your resume if you have one—I will use it to give you more specific feedback.',

  resumeMaxSizeBytes: 5 * 1024 * 1024,
  resumeAcceptedExtensions: ['.pdf', '.doc', '.docx'] as const,
} as const;

export type SiteConfig = typeof siteConfig;

export const founderProofPoints = [
  'UIUC computer science student',
  '4 technical internship offers',
  'Interviews with 10+ companies',
] as const;
