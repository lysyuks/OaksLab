import { useState } from 'react';

const ACCENT = '#7c3aed';

const featureDecisions = [
  { scope: 'Small (1-day scope)', color: '#059669', who: 'PM decides, informs team', icon: '⚡' },
  { scope: 'Medium (1-week scope)', color: '#d97706', who: 'PM + Tech Lead decide', icon: '🤝' },
  { scope: 'Large (multi-week scope)', color: '#ef4444', who: 'Full team + stakeholder approval', icon: '👥' },
];

const techDecisions = [
  { scope: 'Implementation details', who: 'Engineers decide', color: '#059669' },
  { scope: 'Architecture changes', who: 'Tech Lead decides, reviews with PM', color: '#d97706' },
  { scope: 'Major tech choices', who: 'Tech Lead proposes, PM validates business needs, team discusses', color: '#ef4444' },
];

const escalationPaths = [
  { label: 'Technical', path: ['PM', 'Tech Lead', 'Engineering Manager', 'CTO'], color: '#2563eb' },
  { label: 'Business', path: ['PM', 'Stakeholder', 'Product Lead', 'CEO'], color: '#7c3aed' },
];

export default function DecisionFramework({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Decision-Making Framework</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature decisions */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h5 className="font-bold text-sm text-slate-800 mb-4">Feature Decisions</h5>
            <div className="space-y-3">
              {featureDecisions.map((fd, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-3" style={{ backgroundColor: fd.color + '08', borderLeft: `3px solid ${fd.color}` }}>
                  <span className="text-lg">{fd.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{fd.scope}</div>
                    <div className="text-xs text-slate-500">{fd.who}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical decisions */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h5 className="font-bold text-sm text-slate-800 mb-4">Technical Decisions</h5>
            <div className="space-y-3">
              {techDecisions.map((td, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-3" style={{ backgroundColor: td.color + '08', borderLeft: `3px solid ${td.color}` }}>
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: td.color }}>
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{td.scope}</div>
                    <div className="text-xs text-slate-500">{td.who}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Escalation paths */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h5 className="font-bold text-sm text-slate-800 mb-4">Escalation Paths</h5>
          <div className="space-y-4">
            {escalationPaths.map((ep, i) => (
              <div key={i}>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: ep.color }}>{ep.label}</span>
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  {ep.path.map((step, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <span
                        className="text-xs font-medium px-3 py-1.5 rounded-lg"
                        style={{ backgroundColor: ep.color + '12', color: ep.color }}
                      >
                        {step}
                      </span>
                      {j < ep.path.length - 1 && (
                        <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
