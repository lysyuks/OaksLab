import { useState } from 'react';

const ACCENT = '#0d9488';

const days = [
  {
    day: 1,
    title: 'Foundation & Alignment',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11M8 14v4m4-4v4m4-4v4" />
      </svg>
    ),
    items: [
      'Vision & goals workshop',
      'Stakeholder mapping',
      'Success metrics definition',
    ],
  },
  {
    day: 2,
    title: 'Discovery & Deep Dive',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    items: [
      'User roles & workflows',
      'MWL Clinical Protocol review',
      'Integration requirements mapping',
    ],
  },
  {
    day: 3,
    title: 'Planning & Risk Assessment',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    items: [
      'Risk identification & mitigation',
      'Pilot client selection',
      'Roadmap & next steps',
      '🍺 Beer at Prague\u2019s pub DVA Kohouti',
    ],
  },
];

const questionCategories = [
  {
    title: 'Strategic Questions',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    questions: [
      'Why build this in-house vs. continue with current tools?',
      'What does success look like in 6 months?',
      'What are the top 3 risks if we proceed? If we don\'t?',
      'What\'s the budget and resource allocation for this initiative?',
      'How does this fit into the broader product roadmap?',
    ],
  },
  {
    title: 'Technical & Integration Questions',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    questions: [
      'Walk through your current API architecture end-to-end',
      'Which integration is most critical and most fragile?',
      'What\'s your current data volume and expected growth?',
      'What\'s the current tech stack and deployment infrastructure?',
      'How are clinical protocol changes currently propagated?',
    ],
  },
  {
    title: 'Client & User Questions',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    questions: [
      'Who are your ideal pilot clients and why?',
      'What\'s the most complex funnel you\'ve built to date?',
      'What do clients complain about most today?',
      'How long does onboarding a new client currently take?',
    ],
  },
];

const competitors = [
  { name: 'Formsort', type: 'Form Builder' },
  { name: 'Embeddables', type: 'Funnel Platform' },
  { name: 'Typeform', type: 'Survey Tool' },
  { name: 'Jotform', type: 'Form Builder' },
];

const advantages = [
  { icon: '🏥', text: 'Built-in Clinical Protocol validation' },
  { icon: '🔗', text: 'Native OLH platform integration' },
  { icon: '⚡', text: 'Self-service configuration (no 2-month setup)' },
  { icon: '🔒', text: 'HIPAA-compliant by design, not by add-on' },
];

export default function BaseCampExtras({ visible }: { visible: boolean }) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="mt-12 space-y-12">
      {/* ─── 3-Day Structure ─── */}
      <div
        className={`transition-all duration-700 delay-400 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-800">3-Day Kickoff Structure</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {days.map((d, i) => (
            <div
              key={d.day}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-teal-200 transition-all duration-300"
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}80)`,
                }}
              />
              <div className="p-5">
                {/* Day badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      color: ACCENT,
                      backgroundColor: ACCENT + '12',
                    }}
                  >
                    <span style={{ color: ACCENT }}>{d.icon}</span>
                    Day {d.day}
                  </span>
                </div>

                <h5 className="font-bold text-slate-800 mb-3">{d.title}</h5>

                <ul className="space-y-2">
                  {d.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting arrows between cards (desktop) */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-4 text-slate-300">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="text-xs text-slate-400 font-medium">3 days to full alignment</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      {/* ─── Key Questions ─── */}
      <div
        className={`transition-all duration-700 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-800">Key Questions to Ask</h4>
        </div>

        <div className="space-y-3">
          {questionCategories.map((cat, i) => {
            const isExpanded = expandedCategory === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isExpanded ? 'border-teal-200 shadow-md' : 'border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleCategory(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: isExpanded ? ACCENT : '#94a3b8' }}
                    >
                      {cat.icon}
                    </span>
                    <span className={`font-semibold ${isExpanded ? 'text-teal-700' : 'text-slate-700'}`}>
                      {cat.title}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">
                      {cat.questions.length} questions
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="px-5 pb-4 space-y-2.5">
                    {cat.questions.map((q, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                          style={{ backgroundColor: ACCENT + '80' }}
                        >
                          {j + 1}
                        </span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Competitor Snapshot ─── */}
      <div
        className={`transition-all duration-700 delay-600 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-800">Competitor Snapshot</h4>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Current Solutions */}
            <div className="p-6">
              <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Current Solutions</h5>
              <div className="flex flex-wrap gap-2">
                {competitors.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600"
                  >
                    {c.name}
                    <span className="text-xs text-slate-400">· {c.type}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Our Advantages */}
            <div className="p-6">
              <h5 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: ACCENT }}>
                Our Key Advantages
              </h5>
              <ul className="space-y-2.5">
                {advantages.map((a, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="text-base">{a.icon}</span>
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
