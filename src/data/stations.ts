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
    title: 'Base Camp',
    subtitle: 'Kickoff & Alignment',
    timeline: 'Day 1–3',
    description:
      'Align all stakeholders on the vision, define success metrics, and establish the team structure. This is where we set the foundation for the entire project.',
    deliverables: [
      'Stakeholder alignment workshop',
      'Project charter & success criteria',
      'Team roles & communication plan',
      'Technical environment setup',
    ],
    details: [
      'Define the "why" — why OpenLoop needs to own this piece of the stack',
      'Map current pain points with Formsort/Embeddables in detail',
      'Identify the first 3 client funnels to migrate as pilots',
      'Agree on MVP scope vs. future phases',
    ],
    gradient: 'from-teal-500 to-teal-600',
    accentColor: '#0d9488',
  },
  {
    id: 'the-blueprint',
    number: 2,
    emoji: '📐',
    title: 'The Blueprint',
    subtitle: 'Project Scope & Architecture',
    timeline: 'Day 4–10',
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
      'Define the Funnel Builder interface and component library',
      'Plan the embeddable Funnel Renderer architecture',
      'Map integration points with OpenLoop EHR, scheduling, and payments',
    ],
    gradient: 'from-blue-500 to-blue-600',
    accentColor: '#2563eb',
  },
  {
    id: 'mission-control',
    number: 3,
    emoji: '🎯',
    title: 'Mission Control',
    subtitle: 'Discovery & Protocol Mapping',
    timeline: 'Day 11–20',
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
      'Create the compliance validator that checks funnels against protocols',
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: '#7c3aed',
  },
  {
    id: 'the-workshop',
    number: 4,
    emoji: '🔧',
    title: 'The Workshop',
    subtitle: 'Build & Integration',
    timeline: 'Day 21–40',
    description:
      'Build the core platform — the visual funnel builder, patient-facing renderer, and all backend integrations. This is the heavy engineering sprint.',
    deliverables: [
      'Visual funnel builder (drag-and-drop)',
      'Patient-facing funnel renderer',
      'Protocol-to-funnel auto-generation',
      'EHR/scheduling/payment integrations',
    ],
    details: [
      'Build the no-code builder with branching logic editor',
      'Create the embeddable renderer with adaptive questioning',
      '"Generate from Protocol" — one-click funnel creation from clinical rules',
      'Integrate with OpenLoop\'s existing EHR, Healthie, and payment stack',
    ],
    gradient: 'from-amber-500 to-orange-500',
    accentColor: '#f59e0b',
  },
  {
    id: 'launch-pad',
    number: 5,
    emoji: '🚀',
    title: 'Launch Pad',
    subtitle: 'Testing, QA & Rollout',
    timeline: 'Day 41–50',
    description:
      'Rigorous testing of all clinical paths, compliance validation, performance optimization, and phased rollout to pilot clients.',
    deliverables: [
      'Automated path testing (all branches)',
      'Compliance audit report',
      'Performance benchmarks (<2s load)',
      'Pilot client launch (3 funnels)',
    ],
    details: [
      'Automated testing of every branching path for clinical correctness',
      'Load testing and performance optimization',
      'Security audit and HIPAA compliance validation',
      'Launch with 3 pilot clients, monitor, and iterate',
    ],
    gradient: 'from-rose-500 to-red-500',
    accentColor: '#ef4444',
  },
];
