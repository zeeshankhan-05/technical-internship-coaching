import { siteConfig } from '../config/site';

export const programCorePromise =
  'Strengthen how you present your technical experience, build a clearer internship-search system, and leave with a personalized plan for applications, networking, and interview preparation.';

export interface ProgramSession {
  number: number;
  title: string;
  topics: string[];
}

export const programSessions: ProgramSession[] = [
  {
    number: 1,
    title: 'Diagnosis and baseline',
    topics: [
      'Target roles and recruiting season',
      'Graduation and experience level',
      'Work authorization and geography when relevant',
      'Applications, responses, and interviews',
      'Current resume and projects',
      'Main bottleneck',
      'Highest-priority assignments',
    ],
  },
  {
    number: 2,
    title: 'Resume and project positioning',
    topics: [
      'Structure and scanability',
      'Experience and project selection',
      'Summary-first bullets',
      'Technical contributions',
      'Keywords',
      'Truthful metrics and impact',
    ],
  },
  {
    number: 3,
    title: 'Resume completion',
    topics: [
      'Review revision quality',
      'Resolve remaining high-impact problems',
      'Align the resume with target roles',
      'Establish a clearly labeled new resume version',
    ],
  },
  {
    number: 4,
    title: 'Application system',
    topics: [
      'Role selection',
      'Application timing and sources',
      'Individualized volume and quality targets',
      'Application tracker',
      'Consistency and follow-up',
    ],
  },
  {
    number: 5,
    title: 'LinkedIn, portfolio, networking, and referrals',
    topics: [
      'Profile positioning',
      'Portfolio or GitHub recommendations',
      'Outreach targets',
      'Message templates',
      'Ethical referral strategy',
    ],
  },
  {
    number: 6,
    title: 'Interview readiness and continued plan',
    topics: [
      'Behavioral stories',
      'Project explanations',
      'Technical decisions and tradeoffs',
      'Personalized technical-preparation roadmap',
      'Progress review',
      'Next bottleneck and post-program plan',
    ],
  },
];

export const suitableStudentProfile = [
  'US-based undergraduate students enrolled at US colleges',
  'Seeking a first or next technical internship',
  'Pursuing software engineering, AI, data, or related technical roles',
  'Willing to commit two to three hours per week and complete assignments',
  'Ready to present experience truthfully and revise materials actively',
];

export const qualificationRequirements = [
  'Currently enrolled as an undergraduate at a US college or university',
  'Actively preparing for or participating in a technical internship recruiting cycle',
  'Has a current resume and at least some projects, coursework, or prior experience to work with',
  'Can attend six scheduled private sessions within the completion window',
  'Agrees to provide accurate information and truthful resume content',
  'Understands that coaching does not guarantee interviews, offers, or sponsorship',
];

export const includedServices = [
  `${siteConfig.sessionCount} private coaching sessions throughout the program`,
  `Up to ${siteConfig.resumeReviewRounds} structured resume-review rounds`,
  'Personalized recruiting bottleneck diagnosis',
  'Project and experience positioning guidance',
  'LinkedIn and portfolio recommendations',
  'Application strategy and tracker setup',
  'Networking and referral guidance',
  'Behavioral interview preparation',
  'Project communication coaching',
  'Personalized technical-interview preparation plan',
  'Concise written action points after sessions',
  'Brief clarification support between sessions (see policy below)',
];

export const excludedServices = [
  'Guaranteed interviews, offers, referrals, compensation, or sponsorship',
  'Unlimited messaging or resume revisions beyond included rounds',
  'Job applications completed on the client\'s behalf',
  'Standard mock interviews',
  'Completion of online assessments or take-home assignments',
  'Immigration, legal, tax, or financial advice',
  'Specialized technical instruction in every discipline',
  'Indefinite support until an internship is obtained',
];

export const studentResponsibilities = [
  'Commit approximately two to three hours per week',
  'Attend scheduled sessions',
  'Complete agreed assignments',
  'Revise materials actively',
  'Provide accurate information',
  'Verify every resume metric and claim',
  'Maintain an application tracker',
  'Apply consistently when materials are ready',
  'Prepare for interviews',
  'Communicate when blocked',
];

export const betweenSessionSupport =
  'Clients may send brief clarification questions between sessions. Questions should generally be consolidated into one message thread per week. Responses are normally provided within two business days. Extensive editing, new resume-review rounds, urgent interview coaching, and major strategy work must occur during scheduled sessions unless separately agreed.';

export const reschedulingPolicy = [
  'At least 12 hours\' notice is requested for ordinary rescheduling.',
  'One courtesy late-rescheduling exception is available.',
  'Reasonable flexibility is offered for genuine emergencies.',
  'A missed session without notice ordinarily counts as an included session.',
  'If I cancel, the session is rescheduled and does not count against the client.',
];

export const refundPrinciples = [
  'Full refund before the first paid session and before substantive document work begins.',
  'Completed sessions and completed review rounds are non-refundable.',
  'If the engagement ends early, the fair value of genuinely undelivered work is refunded.',
  'If I cannot deliver an included service, the client receives an equivalent replacement or proportional refund.',
  'No interest or late-payment penalties.',
];

export const aiPolicy = [
  'With consent, limited third-party AI tools may assist with reviewing client materials.',
  'Identifying information is removed where reasonably possible before AI processing.',
  'Clients may opt out of third-party AI processing without affecting access or price.',
  'Opt-out requests are honored for the duration of the engagement.',
];

export const paymentSchedule = {
  full: `$${siteConfig.foundingPrice} before the first paid session`,
  plan: `$${siteConfig.paymentPlanFirst} before Session 1 and $${siteConfig.paymentPlanSecond} before Session 4`,
  terms: 'Interest-free. No financing charges. No late-interest fees.',
};

export const programSummary = {
  name: siteConfig.programName,
  duration: `${siteConfig.programDurationWeeks}-week program`,
  completionWindow: `Ordinarily completed within ${siteConfig.maxCompletionWeeks} calendar weeks`,
  price: siteConfig.foundingPrice,
  sessions: siteConfig.sessionCount,
  sessionLength: siteConfig.sessionDurationMinutes,
};
