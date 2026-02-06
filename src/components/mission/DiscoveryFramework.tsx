import { useState } from 'react';

const ACCENT = '#7c3aed';

const week1 = [
  { icon: '🎙️', text: 'Stakeholder interviews (5–7 sessions)' },
  { icon: '🔍', text: 'Current system analysis' },
  { icon: '📊', text: 'Competitive research' },
  { icon: '🗺️', text: 'User flow mapping' },
  { icon: '📝', text: 'Technical constraints documentation' },
];

const week2 = [
  { icon: '✅', text: 'Requirements review with stakeholders' },
  { icon: '⚙️', text: 'Technical feasibility assessment' },
  { icon: '⚠️', text: 'Risk identification workshop' },
  { icon: '🏗️', text: 'Preliminary architecture design' },
  { icon: '📢', text: 'Discovery readout presentation' },
];

const artifacts = [
  'Requirements document',
  'User stories backlog (prioritized)',
  'Technical architecture proposal',
  'Risk register',
  'Project timeline & milestones',
];

export default function DiscoveryFramework({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Discovery Management Framework</h4>
        <span className="text-xs text-slate-400 ml-1">2 weeks</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Two-week layout */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Week 1 */}
          <div className="rounded-2xl border-2 border-violet-200 bg-violet-50/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: ACCENT }}>Week 1</span>
              <span className="text-sm font-semibold text-slate-700">Requirements & Research</span>
            </div>
            <ul className="space-y-2.5">
              {week1.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-base shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Week 2 */}
          <div className="rounded-2xl border-2 border-violet-200 bg-violet-50/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: ACCENT }}>Week 2</span>
              <span className="text-sm font-semibold text-slate-700">Validation & Planning</span>
            </div>
            <ul className="space-y-2.5">
              {week2.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-base shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Artifacts */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Discovery Artifacts</h5>
          <div className="flex flex-wrap gap-2">
            {artifacts.map((a, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-medium" style={{ backgroundColor: ACCENT + '10', color: ACCENT }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
