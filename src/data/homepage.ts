/**
 * Homepage copy — single-page landing funnel.
 * Excludes: testimonials, salary claims, logo clouds, coach teams, guarantees, video steps.
 */

export const stuckSection = {
  eyebrow: 'Does this sound familiar?',
  title: 'You know you are capable. But you are stuck.',
  intro:
    'You are an undergraduate pursuing a technical internship. You have projects, coursework, or some experience — but your search still feels harder than it should.',
  painPoints: [
    {
      text: 'You apply to roles and ',
      bold: 'hear nothing back',
      suffix: '.',
    },
    {
      text: 'Your resume and projects are ',
      bold: 'hard to explain quickly',
      suffix: '.',
    },
    {
      text: 'Your application process lacks ',
      bold: 'focus or consistency',
      suffix: '.',
    },
    {
      text: 'You are unsure how to ',
      bold: 'prepare before interviews arrive',
      suffix: '.',
    },
    {
      text: 'Often, you cannot even get to the interview stage ',
      bold: 'in the first place',
      suffix: '.',
    },
  ],
  closing:
    'The resources are out there — tutorials, Reddit threads, generic resume advice. But none of it is translating into a clear system that fits your background and target roles.',
  resolution: 'That is exactly what I built this program for.',
};

export const freeCallBenefits = [
  {
    title: 'Free resume feedback',
    description:
      'Bring your resume to the call. I will review it live and give you honest, actionable advice at no charge—no strings attached.',
  },
  {
    title: 'Clearer next steps',
    description:
      'Identify what may be limiting responses and what to fix first in your resume, projects, or application approach.',
  },
  {
    title: 'Personalized observations',
    description:
      'Leave with one to three practical takeaways about your search, plus guidance on whether the paid program makes sense for you.',
  },
];

export const founderStorySteps = [
  {
    title: 'Where I started',
    body: 'During a recent recruiting cycle, I submitted more than 300 applications and faced the same bottlenecks many students experience — unclear positioning, inconsistent applications, and difficulty explaining my work quickly.',
  },
  {
    title: 'What changed',
    body: 'I refined how I presented projects, built a more focused application system, and learned through dozens of recruiter conversations, interviews, and independent study — not overnight formulas.',
  },
  {
    title: 'Where I am now',
    body: 'I received four technical-internship offers, completed final rounds with companies like Amazon and Oracle, and am currently a Software Engineering Intern at Splunk while finishing my CS degree at UIUC.',
  },
  {
    title: 'Why I coach',
    body: 'I built this program to help other students present their work truthfully, organize a search that fits their goals, and prepare with more clarity — without inflated promises.',
  },
];

export const compactRoleLabels = [
  'Software engineering',
  'AI & data',
  'Infrastructure',
  'Related technical roles',
];

export const outcomes = [
  {
    title: 'A clearer resume',
    description:
      'Stronger structure, more understandable project bullets, and truthful positioning for your target roles.',
  },
  {
    title: 'A focused application system',
    description:
      'A realistic process for selecting roles, tracking applications, and following up consistently.',
  },
  {
    title: 'Stronger professional positioning',
    description:
      'Clearer LinkedIn, GitHub, portfolio, networking, and referral strategy.',
  },
  {
    title: 'A personalized interview roadmap',
    description:
      'Better project explanations, behavioral stories, and a continued technical preparation plan.',
  },
];

export const homepageProcessStages = [
  {
    step: 1,
    title: 'Diagnose and position',
    description: 'Identify your bottleneck and improve how you present projects and experience.',
  },
  {
    step: 2,
    title: 'Build your search system',
    description: 'Create a focused plan for applications, outreach, and professional positioning.',
  },
  {
    step: 3,
    title: 'Prepare to explain your work',
    description: 'Develop interview communication and a personalized preparation roadmap.',
  },
];

export const programHighlights = [
  'Six private one-on-one coaching sessions',
  'Up to three structured resume-review rounds',
  'Personalized bottleneck diagnosis',
  'Application and networking strategy',
  'Behavioral and project communication prep',
  'Personalized technical-interview preparation plan',
];

export const challengeOptions = [
  { value: '', label: 'Select…' },
  { value: 'Resume', label: 'Resume' },
  { value: 'Project positioning', label: 'Project positioning' },
  { value: 'Finding and tracking roles', label: 'Finding and tracking roles' },
  { value: 'Networking and referrals', label: 'Networking and referrals' },
  { value: 'Interview preparation', label: 'Interview preparation' },
  { value: 'Not sure yet', label: 'I am not sure yet' },
];

// Legacy exports used elsewhere
export const homepageBottlenecks = outcomes.map((o) => ({ title: o.title }));
export const bottlenecks = homepageBottlenecks;
export const trustPrinciples = [
  'Every resume claim stays truthful and defensible.',
  'You keep ownership of your materials, applications, and interview preparation.',
  'I focus on practical guidance — not guaranteed outcomes or inflated promises.',
];
export const whyIBuiltThis = founderStorySteps[3].body;
export const homepageFaqIds = [
  'free-call-cost',
  'strategy-call',
  'who-should-book',
  'obligation-to-enroll',
  'guarantees',
  'program-includes',
];
export const roleFamilies = compactRoleLabels;
export const processSteps = homepageProcessStages;
export const programIncludes = programHighlights;
export const programExcludes = [
  'Guaranteed outcomes',
  'Unlimited messaging or resume revisions',
  'Job applications completed for the client',
  'Standard mock interviews',
  'Immigration or legal advice',
];
export const ethicsPrinciples = trustPrinciples;
export const strategyCallSteps = [
  'Complete the short application form.',
  'I review your information and any materials you share.',
  'The call identifies your likely recruiting bottleneck.',
  'You receive one to three useful observations.',
  'The paid program is explained only when it appears relevant.',
];
export const journeySteps = [
  { label: 'Technical work', description: 'Your projects and experience' },
  { label: 'Clearer positioning', description: 'Resume and narrative' },
  { label: 'Focused applications', description: 'Targeted search system' },
  { label: 'Interview preparation', description: 'Stories and technical plan' },
];
