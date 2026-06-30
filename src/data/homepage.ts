export interface Bottleneck {
  title: string;
}

export const bottlenecks: Bottleneck[] = [
  { title: 'Your résumé is not generating enough interviews' },
  { title: 'Your projects are difficult to understand quickly' },
  { title: 'Your bullets describe tasks without showing contribution or impact' },
  { title: 'Your applications lack focus or consistency' },
  { title: 'Your LinkedIn, GitHub, or portfolio does not reinforce your positioning' },
  { title: 'You are unsure how to network or ask for referrals ethically' },
  { title: 'You need a realistic preparation plan before interviews begin' },
  { title: 'You have experience but struggle to explain it clearly' },
];

export const roleFamilies: string[] = [
  'Software engineering',
  'AI engineering',
  'Machine-learning engineering',
  'Data science',
  'Data engineering',
  'Analytics',
  'Cloud and infrastructure',
  'Cybersecurity',
  'Related technical roles',
];

export const processSteps: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: 'Diagnose the recruiting bottleneck',
    description: 'Identify what is limiting interviews and responses in your current search.',
  },
  {
    step: 2,
    title: 'Improve résumé and project positioning',
    description: 'Make your experience easier to understand and more aligned with target roles.',
  },
  {
    step: 3,
    title: 'Complete the strongest high-impact revisions',
    description: 'Finish the résumé and project updates that matter most before applying widely.',
  },
  {
    step: 4,
    title: 'Build a focused application system',
    description: 'Create a realistic plan for role selection, volume, timing, and follow-up.',
  },
  {
    step: 5,
    title: 'Improve LinkedIn, portfolio, networking, and referrals',
    description: 'Strengthen how you present yourself beyond the résumé and reach out ethically.',
  },
  {
    step: 6,
    title: 'Prepare behavioral stories, project explanations, and a continued technical plan',
    description: 'Leave with interview-ready communication and a personalized preparation roadmap.',
  },
];

export const programIncludes: string[] = [
  'Six private 45-minute sessions',
  'Up to three structured résumé-review rounds',
  'Personalized bottleneck diagnosis',
  'Project and experience positioning',
  'LinkedIn and portfolio guidance',
  'Application strategy',
  'Networking and referral guidance',
  'Behavioral preparation',
  'Project communication',
  'Personalized technical-interview preparation plan',
  'Concise written action points',
  'Limited clarification support between sessions',
];

export const programExcludes: string[] = [
  'Guaranteed outcomes',
  'Unlimited messaging or résumé revisions',
  'Job applications completed for the client',
  'Standard mock interviews',
  'Completion of online assessments or take-home assignments',
  'Immigration or legal advice',
  'Specialized technical instruction in every discipline',
  'Indefinite support until an internship is obtained',
];

export const ethicsPrinciples: string[] = [
  'Every résumé claim must be truthful and defensible.',
  'No fabricated experience, projects, metrics, or technical skills.',
  'No guaranteed interviews, offers, referrals, compensation, or sponsorship.',
  'Zeeshan does not apply for roles or complete assessments for clients.',
  'Coaching is not immigration, legal, tax, or financial advice.',
  'Client privacy and informed consent take priority over marketing.',
  'Results depend on the student\'s effort, skills, preparation, eligibility, execution, and market conditions.',
];

export const strategyCallSteps: string[] = [
  'Complete a short intake form.',
  'Zeeshan reviews the information and résumé.',
  'The call identifies the likely recruiting bottleneck.',
  'The student receives one to three useful observations.',
  'The paid program is explained only when it appears relevant.',
];

export const journeySteps = [
  { label: 'Technical work', description: 'Your projects and experience' },
  { label: 'Clearer positioning', description: 'Résumé and narrative' },
  { label: 'Focused applications', description: 'Targeted search system' },
  { label: 'Interview preparation', description: 'Stories and technical plan' },
];
