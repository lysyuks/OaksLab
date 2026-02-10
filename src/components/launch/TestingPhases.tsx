import { useState } from 'react';

const ACCENT = '#ef4444';

interface Phase {
  name: string;
  weeks: string;
  startWeek: number;
  endWeek: number;
  color: string;
  items: { title: string; details: string[] }[];
}

const phases: Phase[] = [
  {
    name: 'Developer Testing',
    weeks: 'Wk 5–23 (Ongoing)',
    startWeek: 5,
    endWeek: 23,
    color: '#059669',
    items: [
      { title: 'Continuous', details: ['Unit tests alongside code', 'Code review includes test review', 'Local feature testing', 'CI/CD runs tests automatically'] },
    ],
  },
  {
    name: 'QA — Functional',
    weeks: 'Weeks 24–25',
    startWeek: 24,
    endWeek: 25,
    color: '#f59e0b',
    items: [
      { title: 'Functional Testing', details: ['Test all acceptance criteria', 'Cross-browser: Chrome, Firefox, Safari, Edge', 'Mobile: iOS Safari, Android Chrome', 'Accessibility: WCAG 2.1 AA'] },
    ],
  },
  {
    name: 'QA — Integration & Perf',
    weeks: 'Week 25',
    startWeek: 25,
    endWeek: 25,
    color: '#d97706',
    items: [
      { title: 'Integration & Performance', details: ['All API integrations end-to-end', 'Load testing: 1000 concurrent users', 'Builder load: <2s · Form render: <1s · Auto-save: <500ms · Submit: <3s', 'Database stress testing'] },
    ],
  },
  {
    name: 'Security & Compliance',
    weeks: 'Week 26',
    startWeek: 26,
    endWeek: 26,
    color: '#ef4444',
    items: [
      { title: 'Security Audit', details: ['Penetration testing by security firm', 'HIPAA compliance audit', 'Vulnerability scanning', 'Encryption, access control, and audit log verification'] },
    ],
  },
  {
    name: 'UAT',
    weeks: 'Week 27',
    startWeek: 27,
    endWeek: 27,
    color: '#7c3aed',
    items: [
      { title: 'User Acceptance', details: ['Pilot client testing', 'Real-world scenarios', 'Bug triage & fixes', 'Sign-off & Go/No-Go decision'] },
    ],
  },
];

const TOTAL = 29;
const START = 5;

export default function TestingPhases({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Testing Phases & Timeline</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-x-auto">
          <div className="space-y-2.5">
            {phases.map((p, i) => {
              const leftPct = ((p.startWeek - START) / (TOTAL - START)) * 100;
              const widthPct = ((p.endWeek - p.startWeek + 1) / (TOTAL - START)) * 100;
              const isHovered = hovered === i;
              return (
                <div key={i} className="flex items-center gap-2 sm:gap-3" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                  <div className="w-28 sm:w-40 shrink-0 text-right pr-1 sm:pr-2">
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-700 truncate">{p.name}</div>
                    <div className="text-[10px] text-slate-400">{p.weeks}</div>
                  </div>
                  <div className="flex-1 relative h-8 bg-slate-50 rounded-lg">
                    <div
                      className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 flex items-center justify-center ${isHovered ? 'shadow-md scale-y-110 z-10' : ''}`}
                      style={{ left: `${leftPct}%`, width: `${widthPct}%`, backgroundColor: p.color, opacity: isHovered ? 1 : 0.85 }}
                    >
                      <span className="text-[10px] font-bold text-white/90 truncate px-1">{p.endWeek - p.startWeek + 1}w</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hovered detail */}
        {hovered !== null && (
          <div className="mt-3 rounded-xl border p-4" style={{ borderColor: phases[hovered].color + '40', backgroundColor: phases[hovered].color + '08' }}>
            {phases[hovered].items.map((item, j) => (
              <div key={j}>
                <span className="font-semibold text-sm text-slate-800">{item.title}</span>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {item.details.map((d, k) => (
                    <span key={k} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: phases[hovered].color + '15', color: phases[hovered].color }}>{d}</span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
