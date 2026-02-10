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


export default function BaseCampExtras({ visible }: { visible: boolean }) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="mt-12 space-y-12">
      {/* ─── 3-Day Kickoff Structure ─── */}
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

      {/* ─── Why We're Building In-House ─── */}
      <div
        className={`transition-all duration-700 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800">Current Solution vs. In-House Builder</h4>
            <p className="text-sm text-slate-500">Moving from Formsort/Embeddables to our own platform</p>
          </div>
        </div>

        <div className="space-y-8 mt-6">
          {/* 1. The Problem */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100" style={{ backgroundColor: '#fef2f2' }}>
              <h5 className="font-bold text-slate-800 flex items-center gap-2">
                <span style={{ color: '#dc2626' }}>1.</span> The Problem with Current Tools
              </h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Issue</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#dc2626' }}>Formsort</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#dc2626' }}>Embeddables</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Setup Time', '2 months', '2 months', 'Slow client onboarding'],
                    ['Integration', 'Not native', 'Not native', 'Data silos, manual work'],
                    ['Clinical Protocol', 'Manual', 'Manual', 'Risk of non-compliance'],
                    ['Who Configures', 'Internal team', 'Internal team', 'Heavy support burden'],
                    ['Maintenance', 'Ongoing effort', 'Difficult', 'Technical debt'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                      <td className="px-4 py-2.5 font-medium text-slate-700">{row[0]}</td>
                      <td className="px-4 py-2.5" style={{ color: '#dc2626' }}>
                        <span className="inline-flex items-center gap-1">
                          <span>&#x2718;</span> {row[1]}
                        </span>
                      </td>
                      <td className="px-4 py-2.5" style={{ color: '#dc2626' }}>
                        <span className="inline-flex items-center gap-1">
                          <span>&#x2718;</span> {row[2]}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100" style={{ backgroundColor: '#fef2f2' }}>
              <p className="text-sm font-medium text-slate-700">
                <span style={{ color: '#dc2626' }} className="font-bold">Core Problem: </span>
                These tools prevent the platform from being a true end-to-end solution. Intake forms are the missing piece.
              </p>
            </div>
          </div>

          {/* 2. In-House Advantages */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100" style={{ backgroundColor: '#f0fdf4' }}>
              <h5 className="font-bold text-slate-800 flex items-center gap-2">
                <span style={{ color: ACCENT }}>2.</span> In-House Solution Advantages
              </h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">What Changes</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#dc2626' }}>Before (Formsort/Embeddables)</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: ACCENT }}>After (Custom Builder)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Setup Time', '2 months', '2 days'],
                    ['Who Builds Forms', 'Internal team', 'Client self-service'],
                    ['Protocol Validation', 'Manual', 'Automatic built-in'],
                    ['Integration', 'Custom API work', 'Native to platform'],
                    ['Platform Completeness', 'Missing piece', 'End-to-end'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                      <td className="px-4 py-2.5 font-medium text-slate-700">{row[0]}</td>
                      <td className="px-4 py-2.5" style={{ color: '#dc2626' }}>{row[1]}</td>
                      <td className="px-4 py-2.5 font-medium" style={{ color: ACCENT }}>
                        {row[2]} {i === 4 && <span>&#x2713;</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100" style={{ backgroundColor: '#f0fdf4' }}>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  '30x faster client onboarding (2 months \u2192 2 days)',
                  'Self-service = less Internal team burden',
                  'Built-in MWL Clinical Protocol validator',
                  'Seamless integration with scheduling, labs, meds, fulfillment',
                  'Complete platform ownership',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: ACCENT }} className="font-bold mt-0.5 shrink-0">&#x2713;</span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Migration Plan */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h5 className="font-bold text-slate-800 flex items-center gap-2">
                <span style={{ color: ACCENT }}>3.</span> Migration Plan
              </h5>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                {
                  phase: 'Phase 1: Parallel',
                  period: 'Month 1',
                  color: '#f59e0b',
                  items: [
                    'New builder launches',
                    'Formsort/Embeddables stay active',
                    'Pilot with 2\u20133 clients',
                  ],
                },
                {
                  phase: 'Phase 2: Gradual',
                  period: 'Months 2\u20133',
                  color: ACCENT,
                  items: [
                    'Migrate 5\u201310 clients/month',
                    'Both systems available',
                  ],
                },
                {
                  phase: 'Phase 3: Complete',
                  period: 'Month 4+',
                  color: '#16a34a',
                  items: [
                    'All clients on new builder',
                    'Sunset Formsort/Embeddables',
                  ],
                },
              ].map((p) => (
                <div key={p.phase} className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="font-bold text-sm text-slate-800">{p.phase}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 ml-[18px]">{p.period}</p>
                  <ul className="space-y-1.5 ml-[18px]">
                    {p.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50">
              <p className="text-xs text-slate-500">
                <span className="font-semibold">Safety:</span> Keep old tools for 90 days as backup
              </p>
            </div>
          </div>

          {/* 4. Success Metrics */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h5 className="font-bold text-slate-800 flex items-center gap-2">
                <span style={{ color: ACCENT }}>4.</span> Success Metrics
              </h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Metric</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#dc2626' }}>Current</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: ACCENT }}>Target</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#16a34a' }}>Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Setup Time', '8 weeks', '2 days', '28x faster'],
                    ['Team Hours/Client', '40\u201360 hrs', '2 hrs', '95% less'],
                    ['Integration Success', '85%', '99%', '+14%'],
                    ['Cost/Client', '$5,000', '$200', '96% savings'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                      <td className="px-4 py-2.5 font-medium text-slate-700">{row[0]}</td>
                      <td className="px-4 py-2.5" style={{ color: '#dc2626' }}>{row[1]}</td>
                      <td className="px-4 py-2.5 font-medium" style={{ color: ACCENT }}>{row[2]}</td>
                      <td className="px-4 py-2.5 font-bold" style={{ color: '#16a34a' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-slate-500">Development:</span>{' '}
                  <span className="font-bold text-slate-700">$500K one-time</span>
                </div>
                <div>
                  <span className="text-slate-500">Annual Savings:</span>{' '}
                  <span className="font-bold text-slate-700">$250K/year</span>
                  <span className="text-slate-400 text-xs ml-1">(50 clients x $5K saved)</span>
                </div>
                <div>
                  <span className="text-slate-500">Payback:</span>{' '}
                  <span className="font-bold" style={{ color: ACCENT }}>~2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
