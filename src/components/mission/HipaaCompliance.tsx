import { useState } from 'react';

const ACCENT = '#7c3aed';

const safeguards = [
  {
    title: 'Technical Safeguards',
    emoji: '🔒',
    items: [
      'Data encryption at rest (AES-256)',
      'Data encryption in transit (TLS 1.3)',
      'Secure access controls (MFA, role-based)',
      'Audit logging (all PHI access tracked)',
      'Automatic session timeouts',
      'Secure data backup & recovery',
    ],
  },
  {
    title: 'Administrative Safeguards',
    emoji: '📋',
    items: [
      'Business Associate Agreements (BAAs) with all vendors',
      'Security risk assessments (annual)',
      'Workforce training on HIPAA (all team members)',
      'Incident response plan',
      'Designated Privacy / Security Officer',
    ],
  },
  {
    title: 'Physical Safeguards',
    emoji: '🛡️',
    items: [
      'Secure data centers (SOC 2 certified)',
      'Workstation security policies',
      'Device encryption for development machines',
    ],
  },
];

const phases = [
  {
    name: 'Assessment',
    timing: 'Week 1',
    color: '#7c3aed',
    items: ['Complete security risk assessment', 'Identify all PHI touchpoints in system', 'Document current gaps'],
  },
  {
    name: 'Implementation',
    timing: 'During Development',
    color: '#2563eb',
    items: ['Build encryption into architecture', 'Implement access controls', 'Set up audit logging', 'Configure secure infrastructure'],
  },
  {
    name: 'Documentation',
    timing: 'Weeks 18–19',
    color: '#059669',
    items: ['Create HIPAA policies & procedures', 'Document technical safeguards', 'Prepare BAA templates'],
  },
  {
    name: 'Audit',
    timing: 'Week 20',
    color: '#d97706',
    items: ['External HIPAA compliance audit', 'Penetration testing', 'Remediate any findings'],
  },
  {
    name: 'Ongoing',
    timing: 'Post-Launch',
    color: '#ef4444',
    items: ['Quarterly security reviews', 'Annual risk assessments', 'Continuous monitoring'],
  },
];

const featureChecklist = [
  'Does it collect, store, or transmit PHI?',
  'Is data encrypted at rest and in transit?',
  'Are access controls in place?',
  'Is audit logging enabled?',
  'Has it been penetration tested?',
  'Is there a data retention policy?',
  'Can users request data deletion?',
];

export default function HipaaCompliance({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openPhase, setOpenPhase] = useState<number | null>(null);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">HIPAA Compliance</h4>
        <span className="text-xs text-slate-400 ml-1">Regulatory requirements</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[6000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Overview */}
        <div className="bg-violet-50/50 border border-violet-200 rounded-2xl p-5 mb-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-violet-700">HIPAA</span> (Health Insurance Portability and Accountability Act) protects patient health information (PHI).
            Our platform handles PHI throughout the intake process, so we must ensure <span className="font-semibold">technical, administrative, and physical safeguards</span> are in place at every layer.
          </p>
        </div>

        {/* Safeguards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {safeguards.map((sg, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{sg.emoji}</span>
                <h5 className="font-bold text-sm text-slate-800">{sg.title}</h5>
              </div>
              <ul className="space-y-2">
                {sg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                    <svg className="w-3.5 h-3.5 mt-0.5 text-violet-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance approach phases */}
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Our Compliance Approach</h5>
        <div className="space-y-2.5 mb-8">
          {phases.map((phase, i) => {
            const isOpen = openPhase === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenPhase(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: phase.color }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-sm text-slate-800">{phase.name}</span>
                      <span className="text-xs text-slate-400 ml-2">{phase.timing}</span>
                    </div>
                  </div>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="px-4 pb-3 space-y-1.5 ml-10">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: phase.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature checklist */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">HIPAA Checklist for Every Feature</h5>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {featureChecklist.map((item, i) => (
              <label key={i} className="flex items-start gap-2.5 text-sm text-slate-600 cursor-default">
                <span className="mt-0.5 w-4 h-4 rounded border-2 border-slate-300 bg-white shrink-0 flex items-center justify-center" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
