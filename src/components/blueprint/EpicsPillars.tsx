import { useState } from 'react';

const ACCENT = '#2563eb';

interface Epic {
  title: string;
  emoji: string;
  color: string;
  items: string[];
}

const epics: Epic[] = [
  {
    title: 'Funnel Builder Engine',
    emoji: '🔧',
    color: '#2563eb',
    items: [
      'Drag-and-drop interface',
      '15+ field types',
      'Conditional logic builder',
      'Multi-step form flow',
      'Save / duplicate / archive',
    ],
  },
  {
    title: 'Clinical Protocol Validator',
    emoji: '✅',
    color: '#059669',
    items: [
      'Real-time validation',
      'Treatment-specific rules',
      'Required field enforcement',
      'Warning system',
      'Audit trail',
    ],
  },
  {
    title: 'Client Configuration Portal',
    emoji: '👤',
    color: '#7c3aed',
    items: [
      'Client dashboard',
      'Template marketplace',
      'Funnel analytics',
      'User management',
      'White-label branding',
    ],
  },
  {
    title: 'Integration Layer',
    emoji: '🔌',
    color: '#d97706',
    items: [
      'Scheduling integration',
      'Patient data sync',
      'Lab order triggering',
      'Clinical notes creation',
      'Medication workflow',
    ],
  },
  {
    title: 'Patient-Facing Forms',
    emoji: '📱',
    color: '#0891b2',
    items: [
      'Mobile-responsive design',
      'Progress indicators',
      'Save & resume functionality',
      'Multi-language support',
      'WCAG 2.1 AA accessibility',
    ],
  },
  {
    title: 'Analytics & Reporting',
    emoji: '📊',
    color: '#e11d48',
    items: [
      'Form completion rates',
      'Drop-off analysis',
      'Time-to-complete metrics',
      'Field-level analytics',
      'Usage dashboard',
    ],
  },
];

export default function EpicsPillars({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [expandedEpic, setExpandedEpic] = useState<number | null>(null);

  return (
    <div
      className={`transition-all duration-700 delay-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 mb-6 group cursor-pointer"
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
          style={{ backgroundColor: ACCENT }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Key Epics / Pillars</h4>
        <span className="text-xs text-slate-400 ml-1">6 epics</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {epics.map((epic, i) => {
            const isOpen = expandedEpic === i;
            return (
              <button
                key={i}
                onClick={() => setExpandedEpic(isOpen ? null : i)}
                className={`text-left rounded-2xl border-2 bg-white p-5 transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? 'shadow-lg scale-[1.02]'
                    : 'shadow-sm hover:shadow-md hover:scale-[1.01]'
                }`}
                style={{
                  borderColor: isOpen ? epic.color + '60' : '#e2e8f020',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{epic.emoji}</span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: epic.color }}>
                        Epic {i + 1}
                      </span>
                      <h5 className="font-bold text-slate-800 text-sm leading-tight">{epic.title}</h5>
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: epic.color }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Expandable items */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-3 border-t" style={{ borderColor: epic.color + '20' }}>
                    <ul className="space-y-2">
                      {epic.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: epic.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Collapsed hint */}
                {!isOpen && (
                  <p className="text-xs text-slate-400 mt-2">
                    {epic.items.length} features — click to expand
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
