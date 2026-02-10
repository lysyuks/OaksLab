import { useState } from 'react';

const ACCENT = '#ef4444';

const levels = [
  {
    label: 'E2E Tests',
    pct: '10%',
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
    width: '30%',
    what: 'Test complete user journeys in real browser',
    who: 'QA team + automated scripts',
    tools: 'Playwright, Selenium',
    examples: [
      'Complete form creation flow (login → create → add fields → validate → publish)',
      'Patient form submission flow (open form → fill out → conditional logic → submit)',
      'Client admin workflow (login → dashboard → template → customize → preview → publish)',
    ],
    coverage: '5–7 critical paths',
    run: 'Before each release',
  },
  {
    label: 'Integration Tests',
    pct: '20%',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
    width: '55%',
    what: 'Test how components work together',
    who: 'Engineers + QA team',
    tools: 'Cypress, Postman / Newman',
    examples: [
      'API endpoint testing (create form → validate → publish)',
      'Database operations (save draft, retrieve form)',
      'Third-party integrations (Healthie, scheduling APIs)',
      'Authentication flow',
    ],
    coverage: 'Critical user flows',
    run: 'Daily automated builds',
  },
  {
    label: 'Unit Tests',
    pct: '70%',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    width: '100%',
    what: 'Test individual components / functions in isolation',
    who: 'Engineers during development',
    tools: 'Jest, React Testing Library',
    examples: [
      'Form field validation logic',
      'Conditional logic evaluator',
      'Protocol validation rules',
      'Data transformation functions',
    ],
    coverage: '80%+',
    run: 'On every commit (CI/CD pipeline)',
  },
];

export default function TestingStrategy({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openLevel, setOpenLevel] = useState<number | null>(null);

  return (
    <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Testing Strategy & Approach</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Visual Pyramid */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">Testing Pyramid</h5>
          <svg viewBox="0 0 500 330" className="w-full max-w-lg mx-auto block">
            <style>{`
              .pyramid-level { cursor: pointer; transition: opacity 0.2s, filter 0.2s; }
              .pyramid-level:hover { opacity: 1 !important; filter: brightness(1.08); }
            `}</style>

            {/* E2E Tests — Top Triangle */}
            <g className="pyramid-level" onClick={() => setOpenLevel(openLevel === 0 ? null : 0)} opacity={openLevel === 0 ? 1 : 0.88}>
              <polygon points="250,10 184,108 316,108" fill="#ef4444" />
              {openLevel === 0 && <polygon points="250,10 184,108 316,108" fill="none" stroke="#dc2626" strokeWidth="3" />}
              <text x="250" y="68" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" style={{ pointerEvents: 'none' }}>E2E Tests</text>
              <text x="250" y="86" textAnchor="middle" fill="white" fontSize="11" opacity="0.9" style={{ pointerEvents: 'none' }}>10%</text>
            </g>

            {/* Integration Tests — Middle Trapezoid */}
            <g className="pyramid-level" onClick={() => setOpenLevel(openLevel === 1 ? null : 1)} opacity={openLevel === 1 ? 1 : 0.88}>
              <polygon points="180,114 113,212 387,212 320,114" fill="#f59e0b" />
              {openLevel === 1 && <polygon points="180,114 113,212 387,212 320,114" fill="none" stroke="#d97706" strokeWidth="3" />}
              <text x="250" y="155" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" style={{ pointerEvents: 'none' }}>Integration Tests</text>
              <text x="250" y="177" textAnchor="middle" fill="white" fontSize="12" opacity="0.9" style={{ pointerEvents: 'none' }}>20%</text>
              <text x="250" y="199" textAnchor="middle" fill="white" fontSize="10" opacity="0.65" style={{ pointerEvents: 'none' }}>API &amp; workflow testing</text>
            </g>

            {/* Unit Tests — Bottom Trapezoid */}
            <g className="pyramid-level" onClick={() => setOpenLevel(openLevel === 2 ? null : 2)} opacity={openLevel === 2 ? 1 : 0.88}>
              <polygon points="109,218 40,320 460,320 391,218" fill="#059669" />
              {openLevel === 2 && <polygon points="109,218 40,320 460,320 391,218" fill="none" stroke="#047857" strokeWidth="3" />}
              <text x="250" y="258" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" style={{ pointerEvents: 'none' }}>Unit Tests</text>
              <text x="250" y="282" textAnchor="middle" fill="white" fontSize="14" opacity="0.9" style={{ pointerEvents: 'none' }}>70%</text>
              <text x="250" y="306" textAnchor="middle" fill="white" fontSize="10" opacity="0.65" style={{ pointerEvents: 'none' }}>Component-level testing during development</text>
            </g>
          </svg>
        </div>

        {/* Expandable detail cards */}
        <div className="space-y-3">
          {levels.map((lvl, i) => {
            const isOpen = openLevel === i;
            return (
              <div key={i} className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : 'shadow-sm'}`} style={{ borderColor: isOpen ? lvl.color + '60' : '#e2e8f0' }}>
                <button onClick={() => setOpenLevel(isOpen ? null : i)} className="w-full flex items-center justify-between px-5 py-3.5 text-left cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: lvl.color }}>{lvl.pct}</span>
                    <span className="font-semibold text-slate-800">{lvl.label}</span>
                  </div>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5 grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2.5">
                      <div><span className="text-xs font-bold text-slate-400">What:</span><p className="text-sm text-slate-600">{lvl.what}</p></div>
                      <div><span className="text-xs font-bold text-slate-400">Who:</span><p className="text-sm text-slate-600">{lvl.who}</p></div>
                      <div><span className="text-xs font-bold text-slate-400">Tools:</span><p className="text-sm text-slate-600">{lvl.tools}</p></div>
                      <div><span className="text-xs font-bold text-slate-400">Coverage:</span><p className="text-sm font-semibold" style={{ color: lvl.color }}>{lvl.coverage}</p></div>
                      <div><span className="text-xs font-bold text-slate-400">Run:</span><p className="text-sm text-slate-600">{lvl.run}</p></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400">Examples:</span>
                      <ul className="mt-1 space-y-1.5">
                        {lvl.examples.map((ex, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: lvl.color }} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
