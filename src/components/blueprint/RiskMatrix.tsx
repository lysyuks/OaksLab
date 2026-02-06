import { useState } from 'react';

const ACCENT = '#2563eb';

interface Risk {
  title: string;
  severity: 'high' | 'medium';
  why: string;
  mitigations: string[];
}

const risks: Risk[] = [
  {
    title: 'Clinical Protocol Validation Engine',
    severity: 'high',
    why: 'Complex logic, compliance critical, performance impact',
    mitigations: [
      'Technical spike in Week 1',
      'Full protocol documentation before coding',
      '100+ test cases for rule engine',
      'Admin UI for rule updates',
      'External compliance audit',
    ],
  },
  {
    title: 'Data Migration',
    severity: 'high',
    why: 'Unknown formats, zero downtime needed',
    mitigations: [
      'Early Formsort/Embeddables export access',
      'Dry-run migration scripts',
      '30-day parallel run',
      'Manual QA on every migrated funnel',
    ],
  },
  {
    title: 'Integration Reliability',
    severity: 'medium',
    why: 'Depends on OLH APIs, network failures',
    mitigations: [
      'Comprehensive integration testing',
      'Retry logic & queue system',
      'Graceful degradation',
      'Monitoring & alerting',
    ],
  },
  {
    title: 'Client Adoption',
    severity: 'medium',
    why: 'Change management, training burden',
    mitigations: [
      'Excellent onboarding with tooltips',
      'Video tutorials & knowledge base',
      'Template library for quick start',
      'White-glove support for first 5 clients',
    ],
  },
];

export default function RiskMatrix({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Risk Matrix & Mitigation</h4>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Visual 2x2 matrix */}
        <div className="mb-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-hidden">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider -rotate-0">Impact →</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* High Impact, High Probability */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 min-h-[80px]">
              <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1.5">High Impact · High Prob.</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Protocol Engine</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Data Migration</span>
              </div>
            </div>
            {/* High Impact, Low Probability */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 min-h-[80px]">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">High Impact · Low Prob.</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Integration Reliability</span>
              </div>
            </div>
            {/* Low Impact, High Probability */}
            <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3 min-h-[80px]">
              <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1.5">Low Impact · High Prob.</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium">Client Adoption</span>
              </div>
            </div>
            {/* Low Impact, Low Probability */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 min-h-[80px]">
              <div className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-1.5">Low Impact · Low Prob.</div>
              <p className="text-xs text-green-500 italic">No critical risks here</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Probability →</span>
          </div>
        </div>

        {/* Risk detail cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {risks.map((risk, i) => {
            const isHigh = risk.severity === 'high';
            const isOpen = expandedRisk === i;
            const badgeColor = isHigh ? '#ef4444' : '#f59e0b';
            const borderColor = isHigh ? '#fecaca' : '#fde68a';
            const bgColor = isHigh ? '#fef2f2' : '#fffbeb';

            return (
              <div
                key={i}
                className="rounded-xl border-2 overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? badgeColor + '60' : borderColor,
                  backgroundColor: isOpen ? bgColor : 'white',
                }}
              >
                <button
                  onClick={() => setExpandedRisk(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: badgeColor }}
                    >
                      {isHigh ? '🔴 High' : '🟡 Medium'}
                    </span>
                    <span className="font-semibold text-sm text-slate-800">{risk.title}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4">
                    <p className="text-xs text-slate-500 italic mb-3">
                      <span className="font-semibold">Why:</span> {risk.why}
                    </p>
                    <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mitigation Plan</h6>
                    <ul className="space-y-1.5">
                      {risk.mitigations.map((m, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {m}
                        </li>
                      ))}
                    </ul>
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
