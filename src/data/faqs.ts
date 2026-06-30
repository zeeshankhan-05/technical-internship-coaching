import { siteConfig } from '../config/site';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'who-is-it-for',
    question: 'Who is the program for?',
    answer:
      'The program is designed for US-based undergraduate students enrolled at US colleges who are pursuing their first or next technical internship in software engineering, AI, data, or related fields. You should be willing to commit two to three hours per week and revise your materials actively.',
  },
  {
    id: 'which-roles',
    question: 'Which technical roles can you support?',
    answer:
      'Supported role families include software engineering, AI engineering, machine-learning engineering, data science, data engineering, analytics, cloud and infrastructure, cybersecurity, and related technical roles. Zeeshan\'s strongest experience is in software engineering recruiting, but many positioning and application principles transfer across technical roles.',
  },
  {
    id: 'only-swe',
    question: 'Is this only for software engineering students?',
    answer:
      'No. The program supports students pursuing a range of technical internships. For roles outside software engineering, Zeeshan distinguishes between transferable recruiting guidance and advanced preparation that may require specialized resources or subject-matter experts.',
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
    question: 'What happens during the free strategy call?',
    answer:
      'After you complete the intake form, Zeeshan reviews your information and résumé. The 30-minute call identifies your likely recruiting bottleneck and provides one to three practical observations. The paid program is explained only when it appears relevant. There is no obligation to enroll.',
  },
  {
    id: 'duration',
    question: 'How long is the program?',
    answer: `The program is structured as ${siteConfig.programDurationWeeks} weeks of one-on-one coaching and is ordinarily completed within ${siteConfig.maxCompletionWeeks} calendar weeks.`,
  },
  {
    id: 'sessions',
    question: 'How many private sessions are included?',
    answer: `The program includes ${siteConfig.sessionCount} private ${siteConfig.sessionDurationMinutes}-minute sessions.`,
  },
  {
    id: 'resume-review',
    question: 'How does résumé review work?',
    answer: `The program includes up to ${siteConfig.resumeReviewRounds} structured résumé-review rounds across Sessions 2 and 3. Reviews focus on structure, positioning, truthful metrics, and alignment with target roles. You are responsible for implementing revisions.`,
  },
  {
    id: 'write-resume',
    question: 'Will you write my entire résumé for me?',
    answer:
      'No. Coaching helps you improve how you present your experience, but you write and verify every claim. Zeeshan does not fabricate experience, projects, metrics, or skills.',
  },
  {
    id: 'apply-for-me',
    question: 'Do you apply to jobs for clients?',
    answer:
      'No. Zeeshan does not submit applications, complete assessments, or take-home assignments on a client\'s behalf.',
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
      'No. Zeeshan does not complete online assessments, coding tests, or take-home assignments for clients.',
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
    id: 'affiliation',
    question: 'Is this service affiliated with UIUC, Splunk, or another employer?',
    answer:
      'No. This coaching service is independently operated by Zeeshan Khan and is not affiliated with or endorsed by the University of Illinois Urbana-Champaign, Splunk, Cisco, or any other employer mentioned.',
  },
  {
    id: 'hourly-price',
    question: 'Is the $299 price hourly?',
    answer: `No. The $${siteConfig.foundingPrice} founding pilot price covers the complete ${siteConfig.sessionCount}-session coaching process, not an hourly rate.`,
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
      'The initial focus is undergraduate students at US colleges. Graduate students or early-career candidates may inquire through the intake form; fit depends on recruiting goals, experience level, and program scope.',
  },
];
