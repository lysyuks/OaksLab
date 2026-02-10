import { useState } from 'react';

const ACCENT = '#2563eb';

const inScope = [
  'Visual drag-and-drop intake form builder',
  'MWL Clinical Protocol validation engine',
  'Client self-service configuration portal',
  'Template library (10+ pre-built forms)',
  'Real-time preview mode',
  'Integration layer with existing platform services',
  'Analytics dashboard',
  'HIPAA-compliant data handling',
];

const outOfScope = [
  'Video call infrastructure',
  'Lab ordering system',
  'Clinical notes/encounters',
  'Medication ordering',
  'Fulfillment & shipping',
  'Refills management',
];

const dependencies = [
  'Existing platform API stability',
  'MWL Clinical Protocol documentation',
  'Design system / component library',
  'Authentication system',
];

export default function ScopeCanvas({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`transition-all duration-700 delay-300 ${
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Project Scope Canvas</h4>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-3 gap-5">
          {/* In Scope */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
              <h5 className="font-bold text-emerald-800 text-sm uppercase tracking-wider">In Scope</h5>
            </div>
            <ul className="space-y-2.5">
              {inScope.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Out of Scope */}
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-slate-400 flex items-center justify-center text-white text-xs font-bold">—</span>
              <h5 className="font-bold text-slate-500 text-sm uppercase tracking-wider">Out of Scope</h5>
            </div>
            <p className="text-xs text-slate-400 mb-3 italic">Already handled by existing Weight Loss Clinic platform</p>
            <ul className="space-y-2.5">
              {outOfScope.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                  <span className="line-through decoration-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dependencies */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-white text-xs font-bold">!</span>
              <h5 className="font-bold text-amber-800 text-sm uppercase tracking-wider">Dependencies</h5>
            </div>
            <ul className="space-y-2.5">
              {dependencies.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
