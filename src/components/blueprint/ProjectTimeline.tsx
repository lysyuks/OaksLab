import { useState } from 'react';

const ACCENT = '#2563eb';

interface Phase {
  name: string;
  weeks: string;
  startWeek: number;
  endWeek: number;
  color: string;
  items: string[];
}

const phases: Phase[] = [
  {
    name: 'Discovery',
    weeks: 'Wk 1–2',
    startWeek: 1,
    endWeek: 2,
    color: '#2563eb',
    items: ['Stakeholder interviews', 'Requirements finalization', 'Technical architecture', 'Risk validation'],
  },
  {
    name: 'Design',
    weeks: 'Wk 3–5',
    startWeek: 3,
    endWeek: 5,
    color: '#7c3aed',
    items: ['User flows & wireframes', 'High-fidelity mockups', 'Prototypes & testing'],
  },
  {
    name: 'Dev Sprint 1–4',
    weeks: 'Wk 6–13',
    startWeek: 6,
    endWeek: 13,
    color: '#059669',
    items: ['Builder Engine + UI', 'Protocol Validator', 'Integration + Patient Forms'],
  },
  {
    name: 'Dev Sprint 5–6',
    weeks: 'Wk 14–17',
    startWeek: 14,
    endWeek: 17,
    color: '#0891b2',
    items: ['Client Portal + Analytics', 'Polish & optimization'],
  },
  {
    name: 'Testing',
    weeks: 'Wk 18–19',
    startWeek: 18,
    endWeek: 19,
    color: '#d97706',
    items: ['QA testing', 'Security audit', 'HIPAA compliance review'],
  },
  {
    name: 'UAT',
    weeks: 'Wk 20–21',
    startWeek: 20,
    endWeek: 21,
    color: '#ea580c',
    items: ['3 pilot clients', 'Bug fixes', 'Documentation'],
  },
  {
    name: 'Soft Launch',
    weeks: 'Wk 22',
    startWeek: 22,
    endWeek: 22,
    color: '#e11d48',
    items: ['Migrate 2–3 pilots', 'White-glove support'],
  },
  {
    name: 'Rollout',
    weeks: 'Wk 23–26',
    startWeek: 23,
    endWeek: 26,
    color: '#dc2626',
    items: ['Gradual client rollout', 'Support & iteration'],
  },
];

const TOTAL_WEEKS = 26;

export default function ProjectTimeline({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <div
      className={`transition-all duration-700 delay-500 ${
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Project Timeline</h4>
        <span className="text-xs text-slate-400 ml-1">~6 months</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Gantt chart */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-x-auto">
          {/* Week markers */}
          <div className="hidden md:flex items-center mb-2 pl-36">
            {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
              <div
                key={i}
                className="text-[9px] text-slate-300 font-mono text-center"
                style={{ width: `${100 / TOTAL_WEEKS}%`, minWidth: 0 }}
              >
                {(i + 1) % 2 === 0 ? i + 1 : ''}
              </div>
            ))}
          </div>

          {/* Phase bars */}
          <div className="space-y-2.5">
            {phases.map((phase, i) => {
              const leftPct = ((phase.startWeek - 1) / TOTAL_WEEKS) * 100;
              const widthPct = ((phase.endWeek - phase.startWeek + 1) / TOTAL_WEEKS) * 100;
              const isHovered = hoveredPhase === i;

              return (
                <div
                  key={i}
                  className="flex items-center gap-3 group"
                  onMouseEnter={() => setHoveredPhase(i)}
                  onMouseLeave={() => setHoveredPhase(null)}
                >
                  {/* Phase label */}
                  <div className="w-24 sm:w-32 shrink-0 text-right pr-1 sm:pr-2">
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-700 truncate">{phase.name}</div>
                    <div className="text-[10px] text-slate-400">{phase.weeks}</div>
                  </div>

                  {/* Bar track */}
                  <div className="flex-1 relative h-8 bg-slate-50 rounded-lg">
                    {/* Bar */}
                    <div
                      className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 flex items-center justify-center ${
                        isHovered ? 'shadow-md scale-y-110 z-10' : ''
                      }`}
                      style={{
                        left: `${leftPct}%`,
                        width: `${widthPct}%`,
                        backgroundColor: phase.color,
                        opacity: isHovered ? 1 : 0.85,
                      }}
                    >
                      <span className="text-[10px] font-bold text-white/90 truncate px-1">
                        {phase.endWeek - phase.startWeek + 1}w
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Month markers */}
          <div className="hidden md:flex items-center mt-3 pl-36 border-t border-slate-100 pt-2">
            {['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'].map((m, i) => (
              <div key={i} className="text-[10px] text-slate-400 font-medium" style={{ width: `${100 / 6}%` }}>
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Hovered phase details */}
        {hoveredPhase !== null && (
          <div
            className="mt-3 rounded-xl border p-4 transition-all duration-200"
            style={{
              borderColor: phases[hoveredPhase].color + '40',
              backgroundColor: phases[hoveredPhase].color + '08',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: phases[hoveredPhase].color }}
              />
              <span className="font-semibold text-sm text-slate-800">
                {phases[hoveredPhase].name}
              </span>
              <span className="text-xs text-slate-400">{phases[hoveredPhase].weeks}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {phases[hoveredPhase].items.map((item, j) => (
                <span
                  key={j}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: phases[hoveredPhase].color + '15',
                    color: phases[hoveredPhase].color,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <span className="font-bold text-slate-700">Total Duration: ~6 months</span> (26 weeks)
          </span>
        </div>
      </div>
    </div>
  );
}
