import { siteConfig } from '../config/site';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'free-call-cost',
    question: 'Is the free call actually free?',
    answer: `Yes. The ${siteConfig.strategyCallDurationMinutes}-minute call—including live resume feedback—is completely free. There is no payment required to book or attend, and no obligation to enroll in paid coaching afterward.`,
  },
  {
    id: 'who-should-book',
    question: 'Who should book a free call?',
    answer:
      'Undergraduate students at US colleges who are preparing for software engineering, AI, data, or related technical internships. You do not need to be ready to enroll in paid coaching—a current resume and real questions about your search are enough.',
  },
  {
    id: 'obligation-to-enroll',
    question: 'Do I have to enroll after the free call?',
    answer:
      'No. The free call is for honest advice about your search at no charge. The paid coaching program is explained only if it seems relevant to your goals. Many students take the feedback and continue on their own.',
  },
  {
    id: 'program-includes',
    question: `What is included in the $${siteConfig.foundingPrice} program?`,
    answer: `The founding pilot includes ${siteConfig.sessionCount} private coaching sessions over about ${siteConfig.programDurationWeeks} weeks, up to ${siteConfig.resumeReviewRounds} structured resume-review rounds, application and networking strategy, and interview preparation planning.`,
  },
  {
    id: 'who-is-it-for',
    question: 'Who is the paid program for?',
    answer:
      'The program is designed for US-based undergraduate students enrolled at US colleges who are pursuing their first or next technical internship in software engineering, AI, data, or related fields. You should be willing to commit two to three hours per week and revise your materials actively.',
  },
  {
    id: 'which-roles',
    question: 'Which technical roles can you support?',
    answer:
      'Supported role families include software engineering, AI engineering, machine-learning engineering, data science, data engineering, analytics, cloud and infrastructure, cybersecurity, and related technical roles. My strongest experience is in software engineering recruiting, but many positioning and application principles transfer across technical roles.',
  },
  {
    id: 'only-swe',
    question: 'Is this only for software engineering students?',
    answer:
      'No. The program supports students pursuing a range of technical internships. For roles outside software engineering, I distinguish between transferable recruiting guidance and advanced preparation that may require specialized resources or subject-matter experts.',
  },
  {
    id: 'guarantees',
    question: 'Do you guarantee interviews or offers?',
    answer:
      'No. Coaching does not guarantee interviews, offers, referrals, compensation, or sponsorship. Results depend on your effort, skills, preparation, eligibility, execution, and market conditions.',
  },
  {
    id: 'international',
    question: 'Can international students participate?',
    answer:
      'International students studying in the United States may participate. Sponsorship requirements, work authorization, employer restrictions, location, and market conditions can make recruiting more difficult. Coaching does not include legal or immigration advice.',
  },
  {
    id: 'immigration',
    question: 'Do you provide immigration or sponsorship advice?',
    answer:
      'No. Coaching is not immigration, legal, tax, or financial advice. Work authorization and sponsorship topics may be discussed at a general recruiting level, but you should consult qualified professionals for legal guidance.',
  },
  {
    id: 'strategy-call',
    question: 'What happens on the free call?',
    answer:
      `After you submit the short application, I review your background and any resume you share. On the ${siteConfig.strategyCallDurationMinutes}-minute call, I give you free resume feedback and honest advice about your search—at no charge. You will also receive one to three practical observations about your biggest bottleneck. The paid program ($${siteConfig.foundingPrice} founding pilot) is explained only when it seems relevant. There is no obligation to enroll.`,
  },
  {
    id: 'duration',
    question: 'How long is the program?',
    answer: `The program is structured as ${siteConfig.programDurationWeeks} weeks of one-on-one coaching and is ordinarily completed within ${siteConfig.maxCompletionWeeks} calendar weeks.`,
  },
  {
    id: 'sessions',
    question: 'How many private sessions are included?',
    answer: `The program includes ${siteConfig.sessionCount} private coaching sessions structured across the program.`,
  },
  {
    id: 'resume-review',
    question: 'How does resume review work?',
    answer: `The program includes up to ${siteConfig.resumeReviewRounds} structured resume-review rounds across Sessions 2 and 3. Reviews focus on structure, positioning, truthful metrics, and alignment with target roles. You are responsible for implementing revisions.`,
  },
  {
    id: 'write-resume',
    question: 'Will you write my entire resume for me?',
    answer:
      'No. Coaching helps you improve how you present your experience, but you write and verify every claim. I do not fabricate experience, projects, metrics, or skills.',
  },
  {
    id: 'apply-for-me',
    question: 'Do you apply to jobs for clients?',
    answer:
      'No. I do not submit applications, complete assessments, or take-home assignments on a client\'s behalf.',
  },
  {
    id: 'mock-interviews',
    question: 'Are mock interviews included?',
    answer:
      'Standard mock interviews are not included. The program covers behavioral preparation, project explanations, and a personalized technical-interview preparation plan.',
  },
  {
    id: 'assessments',
    question: 'Can you complete an assessment or take-home assignment with me?',
    answer:
      'No. I do not complete online assessments, coding tests, or take-home assignments for clients.',
  },
  {
    id: 'time-commitment',
    question: 'How much time should I commit each week?',
    answer:
      'Plan for approximately two to three hours per week for assignments, revisions, and application work in addition to scheduled sessions.',
  },
  {
    id: 'between-sessions',
    question: 'What support is available between sessions?',
    answer:
      'Clients may send brief clarification questions between sessions, generally consolidated into one message thread per week. Responses are normally provided within two business days. Extensive editing and major strategy work occur during scheduled sessions unless separately agreed.',
  },
  {
    id: 'rescheduling',
    question: 'What is the rescheduling policy?',
    answer:
      'At least 12 hours\' notice is requested for ordinary rescheduling, with one courtesy late-rescheduling exception and reasonable flexibility for genuine emergencies. A missed session without notice ordinarily counts as an included session.',
  },
  {
    id: 'refunds',
    question: 'What is the refund policy?',
    answer:
      'A full refund is available before the first paid session and before substantive document work begins. Completed sessions and review rounds are non-refundable. If the engagement ends early, the fair value of undelivered work is refunded. See the Terms page for full details.',
  },
  {
    id: 'ai-use',
    question: 'Do you use AI when reviewing client materials?',
    answer:
      'With consent, limited third-party AI tools may assist with reviewing materials. Identifying information is removed where reasonably possible. You may opt out without affecting access or price.',
  },
  {
    id: 'ai-opt-out',
    question: 'Can I opt out of third-party AI processing?',
    answer:
      'Yes. You may choose not to have your materials processed by third-party AI tools. This does not reduce access to coaching or change the price.',
  },
  {
    id: 'program-price',
    question: 'Is the $299 price for the full program?',
    answer: `Yes. The $${siteConfig.foundingPrice} founding pilot covers the complete coaching program from start to finish.`,
  },
  {
    id: 'after-program',
    question: 'What happens after the six sessions?',
    answer:
      'Session 6 includes a progress review, next bottleneck identification, and a post-program plan. The program is designed to leave you with clearer materials, a focused application system, and a continued preparation roadmap.',
  },
  {
    id: 'graduate-students',
    question: 'Can graduate students or early-career candidates participate?',
    answer:
      'The initial focus is undergraduate students at US colleges. Graduate students or early-career candidates may inquire through the application form; fit depends on recruiting goals, experience level, and program scope.',
  },
];

export const faqGroups = [
  {
    title: 'Eligibility and fit',
    ids: ['who-should-book', 'who-is-it-for', 'which-roles', 'only-swe', 'international', 'graduate-students', 'guarantees'],
  },
  {
    title: 'Program and coaching',
    ids: ['free-call-cost', 'strategy-call', 'obligation-to-enroll', 'duration', 'sessions', 'program-includes', 'resume-review', 'write-resume', 'apply-for-me', 'mock-interviews', 'assessments', 'time-commitment', 'between-sessions', 'after-program'],
  },
  {
    title: 'Pricing and scheduling',
    ids: ['program-price', 'rescheduling', 'refunds'],
  },
  {
    title: 'Policies and privacy',
    ids: ['immigration', 'ai-use', 'ai-opt-out'],
  },
] as const;
