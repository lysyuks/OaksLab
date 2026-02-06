import { useState } from 'react';

const dodItems = [
  'All acceptance criteria are met and tested',
  'Unit tests written (80%+ coverage)',
  'Integration tests for API endpoints',
  'E2E test for full flow (create → validate → preview → publish)',
  'Code review completed by 2+ engineers',
  'QA testing passed',
  'Accessibility audit passed',
  'Performance benchmarks met',
  'Deployed to staging and validated by PM',
  'Documentation updated (user guide + API docs)',
];

export default function DefinitionOfDone({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold bg-emerald-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
        <h5 className="font-bold text-slate-800">Definition of Done</h5>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-emerald-50/50 rounded-xl border border-emerald-200 p-5">
          <p className="text-xs text-slate-500 italic mb-4">This user story is considered <span className="font-bold text-emerald-700">DONE</span> when:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {dodItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
