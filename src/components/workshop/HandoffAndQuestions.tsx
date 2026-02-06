import { useState } from 'react';

const ACCENT = '#f59e0b';

const pmProvides = [
  'User story with clear business context',
  'Detailed acceptance criteria',
  'Edge cases and error handling',
  'Data model structure (JSON schema)',
  'API endpoint list',
  'Performance & accessibility requirements',
  'Wireframes/mockups (visual reference)',
  'Definition of done',
];

const engDefines = [
  'Specific database schema (tables, indexes)',
  'Implementation details (which libraries, algorithms)',
  'Component architecture (React component structure)',
  'State management approach',
  'API request/response formats (exact field names beyond data model)',
  'Error codes and error response structure',
  'Caching strategy',
  'Database query optimization',
  'Frontend component breakdown',
];

const questions = [
  'What\'s the best approach for the drag-and-drop library? (React DnD vs other)',
  'How should we handle concurrent editing? WebSockets or polling?',
  'What\'s the database structure for storing conditional logic efficiently?',
  'Should validation run client-side, server-side, or both?',
  'How do we optimize preview mode generation for large forms?',
  'What\'s the rollback plan if publishing fails mid-process?',
];

export default function HandoffAndQuestions({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: ACCENT }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        </span>
        <h5 className="font-bold text-slate-800">Engineering Handoff & Open Questions</h5>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Handoff */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50/50 rounded-xl border border-amber-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-amber-500">PM Provides</span>
              <span className="text-xs text-slate-400">What's in this spec</span>
            </div>
            <ul className="space-y-2">
              {pmProvides.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-xl border border-blue-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-blue-500">Engineering Defines</span>
              <span className="text-xs text-slate-400">What's NOT in this spec</span>
            </div>
            <ul className="space-y-2">
              {engDefines.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Questions */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
          <h6 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Questions for Engineering
          </h6>
          <p className="text-xs text-slate-400 italic mb-3">Before development starts, PM collaborates with engineers to resolve:</p>
          <div className="space-y-2.5">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5 bg-amber-400">
                  {i + 1}
                </span>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
