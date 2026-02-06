import { useState } from 'react';

const ACCENT = '#f59e0b';

const pmOwns = [
  { icon: '🎯', text: 'User needs & business context (the "why")' },
  { icon: '✅', text: 'Acceptance criteria (the "what" at user level)' },
  { icon: '⚠️', text: 'Edge cases & error states (the "what ifs")' },
  { icon: '📊', text: 'Success metrics (the "how we measure")' },
  { icon: '🎨', text: 'Visual design intent (wireframes/mockups)' },
];

const engOwns = [
  { icon: '🏗️', text: 'Technical architecture (the "how" at code level)' },
  { icon: '🗄️', text: 'Database design & optimization' },
  { icon: '🔌', text: 'API contracts & error handling details' },
  { icon: '🧩', text: 'Component structure & state management' },
  { icon: '⚡', text: 'Performance optimizations' },
  { icon: '🧪', text: 'Technical testing strategy' },
];

export default function SpecPhilosophy({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Specification Philosophy</h4>
        <span className="text-xs text-slate-400 ml-1">Why this level of detail?</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {/* PM */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/30 p-5">
            <h5 className="font-bold text-sm uppercase tracking-wider text-amber-700 mb-4">What PM Owns</h5>
            <div className="space-y-2.5">
              {pmOwns.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-base shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-5">
            <h5 className="font-bold text-sm uppercase tracking-wider text-blue-700 mb-4">What Engineering Owns</h5>
            <div className="space-y-2.5">
              {engOwns.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-base shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sweet spot */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-5 text-white">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0">🎯</span>
            <div>
              <h5 className="font-bold text-sm uppercase tracking-wider mb-1">The Handoff Sweet Spot</h5>
              <p className="text-sm text-white/90 leading-relaxed">
                Enough detail that engineers understand requirements fully, but not so much that it constrains technical creativity.
                This spec provides the <span className="font-bold">"contract"</span> — engineers determine the <span className="font-bold">implementation</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
