export interface StationData {
  id: string;
  number: number;
  emoji: string;
  title: string;
  subtitle: string;
  timeline: string;
  description: string;
  deliverables: string[];
  details: string[];
  gradient: string;
  accentColor: string;
}

export const stations: StationData[] = [
  {
    id: 'base-camp',
    number: 1,
    emoji: '⛺',
    title: 'Kickoff',
    subtitle: 'Stakeholder Alignment',
    timeline: 'Days 1–3',
    description:
      'Align all stakeholders on the vision, define success metrics, and establish the team structure. This is where we set the foundation for the entire project.',
    deliverables: [
      'Stakeholder alignment workshop',
      'Project charter & success criteria',
      'Team roles & communication plan',
      'Technical environment setup',
    ],
    details: [
      'Define the "why" — why MediCare Solutions needs to own this piece of the stack',
      'Document current limitations and pain points with Typeform/Jotform',
      'Agree on MVP scope vs. future phases',
    ],
    gradient: 'from-teal-500 to-teal-600',
    accentColor: '#0d9488',
  },
  {
    id: 'the-blueprint',
    number: 2,
    emoji: '📐',
    title: 'Scope & Schedule',
    subtitle: 'Project Planning',
    timeline: 'Weeks 1–3',
    description:
      'Define the full project scope, system architecture, and technical decisions. Translate the vision into concrete engineering plans.',
    deliverables: [
      'System architecture document',
      'Database schema design',
      'API contract definitions',
      'UI/UX wireframes for builder + renderer',
    ],
    details: [
      'Design the Protocol Engine — how clinical rules become configuration',
      'Define the Intake Form Builder interface and component library',
      'Plan the embeddable Form Renderer architecture',
      'Map integration points with existing EHR, scheduling, and payments',
    ],
    gradient: 'from-blue-500 to-blue-600',
    accentColor: '#2563eb',
  },
  {
    id: 'mission-control',
    number: 3,
    emoji: '🎯',
    title: 'Discovery',
    subtitle: 'Protocol & Team Collaboration',
    timeline: 'Weeks 2–4',
    description:
      'Deep-dive into existing clinical protocols and map every eligibility rule, screening instrument, and treatment pathway into structured, machine-readable configuration.',
    deliverables: [
      'Clinical protocol schema (JSON)',
      'Eligibility rule engine prototype',
      'Screening instrument library (PHQ-9, GAD-7, etc.)',
      'Compliance validation logic',
    ],
    details: [
      'Work with the clinical team to codify protocols as structured data',
      'Build auto-scoring for validated instruments',
      'Implement state-by-state regulation mapping',
      'Create the compliance validator that checks forms against protocols',
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: '#7c3aed',
  },
  {
    id: 'the-workshop',
    number: 4,
    emoji: '🔧',
    title: 'Development',
    subtitle: 'Specifications & Build',
    timeline: 'Weeks 5–23',
    description:
      'Define detailed specifications, hand off to engineering, and build the complete platform. This phase includes requirements documentation, development sprints, and integration work.',
    deliverables: [
      'User story specs with acceptance criteria',
      'Visual intake form builder (drag-and-drop)',
      'Patient-facing form renderer',
      'Protocol-to-form auto-generation',
      'EHR/scheduling/payment integrations',
    ],
    details: [
      'Specifications phase (Weeks 5–6): User stories, wireframes, API contracts, technical handoff',
      'Development sprints (Weeks 7–23): 2-week sprints with daily standups, biweekly reviews',
      'Sprints 1–4: Intake Form Builder Engine + Clinical Protocol Validator',
      'Sprints 5–8: Client Portal + Integration Layer',
      'Sprints 9–12: Patient Forms + Analytics',
    ],
    gradient: 'from-amber-500 to-orange-500',
    accentColor: '#f59e0b',
  },
  {
    id: 'launch-pad',
    number: 5,
    emoji: '🚀',
    title: 'Testing & Rollout',
    subtitle: 'Launch Strategy',
    timeline: 'Weeks 24–29',
    description:
      'Rigorous testing of all clinical paths, compliance validation, performance optimization, and phased rollout to pilot clients.',
    deliverables: [
      'Automated path testing (all branches)',
      'Compliance audit report',
      'Performance benchmarks (<2s load)',
      'Pilot client launch (3 forms)',
    ],
    details: [
      'QA testing and functional validation (Weeks 24–25)',
      'Security audit and HIPAA compliance (Week 26)',
      'UAT with pilot clients (Week 27)',
      'Soft launch and phased rollout (Weeks 28–29+)',
    ],
    gradient: 'from-rose-500 to-red-500',
    accentColor: '#ef4444',
  },
  {
    id: 'fhir-integration',
    number: 6,
    emoji: '📋',
    title: 'FHIR R4 Integration',
    subtitle: 'Interoperability & EHR Data Exchange',
    timeline: 'Weeks 18–25',
    description:
      'Enabling seamless data exchange with EHR systems through healthcare standards. Automatically send intake form data to doctors\' EHR systems (Epic, Cerner, Athena) in standardized FHIR format.',
    deliverables: [
      'FHIR R4 mapping engine',
      'RESTful FHIR API with OAuth 2.0',
      'Mapping configuration UI for clients',
      'Template library for common use cases',
    ],
    details: [
      'Transform form submissions into FHIR R4 resources (Patient, Observation, Condition, etc.)',
      'Build push/pull integration with major EHR systems',
      'Create drag-and-drop mapping interface for client admins',
      'Validate all outputs against FHIR R4 standard before transmission',
    ],
    gradient: 'from-teal-500 to-cyan-500',
    accentColor: '#0d9488',
  },
];
