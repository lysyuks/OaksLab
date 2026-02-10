import { useState } from 'react';

const ACCENT = '#ef4444';

const rolloutPhases = [
  {
    phase: 1,
    title: 'Soft Launch — Limited Pilot',
    timing: 'Week 28',
    target: '2–3 Pilot Clients',
    color: '#f59e0b',
    clients: [
      { name: 'Dr. Smith Weight Loss Clinic', why: 'Simple use case, 50 patients/month, tech-savvy admin', funnel: 'Weight loss intake with PHQ-9 screening' },
      { name: 'ClearSkin Dermatology', why: 'Photo upload testing, 100 patients/month', funnel: 'Dermatology intake with photo upload' },
      { name: 'TBD based on interest', why: 'Different use case for diversity', funnel: 'To be determined' },
    ],
    activities: ['Personal onboarding calls (1h per client)', 'Migrate first funnel live on the call', 'Daily check-in calls (15 min) for first week', 'Dedicated Slack channel: #pilot-launch'],
    metrics: ['All 3 clients create & publish funnels', '50+ patients complete forms E2E', 'Integration success: >95%', 'Critical bugs: 0', 'Client satisfaction: 8/10+'],
    support: '<1 hour response · Dedicated PM + engineer on-call · Daily check-ins',
  },
  {
    phase: 2,
    title: 'Limited Release — Expand',
    timing: 'Weeks 29+',
    target: '10–15 Clients Total',
    color: '#2563eb',
    clients: [],
    activities: ['Group onboarding webinars (3–5 clients/session)', 'Self-service onboarding with tooltips', 'Knowledge base articles + video tutorials', '<4 hour email response time', 'Weekly office hours (Q&A sessions)'],
    metrics: ['3–5 new funnels/week', '200+ form completions/week', 'Support volume trending down', 'Feature adoption rates tracked'],
    support: '<4 hour response · Webinars · Office hours',
  },
  {
    phase: 3,
    title: 'General Availability — Full Rollout',
    timing: 'Week 32+',
    target: 'All Clients (50–100)',
    color: '#059669',
    clients: [],
    activities: ['Official launch announcement + blog post', 'Product demo video (5 min)', 'Case studies from pilot clients', 'Complete knowledge base (20+ articles)', 'Template library (15+ pre-built funnels)', 'Weekly live onboarding webinars'],
    metrics: ['60%+ adoption in 90 days', 'Config time: <2 days (vs 2 months)', 'Integration success: 98%+', 'Patient completion: >85%', 'NPS score: 50+', 'Formsort usage declining 20%+/month'],
    support: 'Tiered: Enterprise (<2h) · Pro (<8h) · Standard (email + KB)',
  },
];

const rollbackTriggers = [
  'Critical bug affecting >50% of clients',
  'Data loss or security breach',
  'Integration failures causing patient experience issues',
  'Client adoption <20% after 30 days',
];

const rollbackSteps = [
  { step: 1, text: 'Pause new client onboarding immediately', time: '0h' },
  { step: 2, text: 'Notify affected clients within 1 hour', time: '1h' },
  { step: 3, text: 'Revert to Formsort/Embeddables for new funnels', time: '2h' },
  { step: 4, text: 'Keep existing funnels running if stable', time: '2h' },
  { step: 5, text: 'Root cause analysis', time: '24h' },
  { step: 6, text: 'Fix plan documented', time: '48h' },
  { step: 7, text: 'Re-launch decision', time: '1 week' },
];

const commsTimeline = [
  { week: 26, label: 'Internal team announcement (all-hands)', color: '#64748b' },
  { week: 27, label: 'Pilot clients invitation', color: '#7c3aed' },
  { week: 28, label: 'Pilot launch + daily updates', color: '#f59e0b' },
  { week: 29, label: 'Pilot success metrics shared internally', color: '#f59e0b' },
  { week: 30, label: 'Limited release invitations sent', color: '#2563eb' },
  { week: 31, label: 'Pre-launch announcement to all clients', color: '#2563eb' },
  { week: 32, label: 'General availability launch 🚀', color: '#059669' },
  { week: 33, label: 'Weekly product updates newsletter', color: '#059669' },
];

export default function GTMRollout({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openPhase, setOpenPhase] = useState<number | null>(0);
  const [showRollback, setShowRollback] = useState(false);
  const [showComms, setShowComms] = useState(false);

  return (
    <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Go-to-Market & Rollout Strategy</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[15000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Philosophy */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl p-5 text-white mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Rollout Philosophy</h5>
              <p className="text-sm text-white/90">"Start small, learn fast, scale gradually" — Minimize risk with pilots, run Formsort/Embeddables in parallel for 30 days, white-glove support during transition.</p>
            </div>
          </div>
        </div>

        {/* 3 Phase Cards */}
        <div className="space-y-4 mb-8">
          {rolloutPhases.map((rp, i) => {
            const isOpen = openPhase === i;
            return (
              <div key={i} className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow-sm'}`} style={{ borderColor: isOpen ? rp.color + '50' : '#e2e8f0' }}>
                <button onClick={() => setOpenPhase(isOpen ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: rp.color }}>P{rp.phase}</span>
                    <div>
                      <div className="font-bold text-slate-800">{rp.title}</div>
                      <div className="text-xs text-slate-400">{rp.timing} · {rp.target}</div>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5">
                    {/* Pilot clients if any */}
                    {rp.clients.length > 0 && (
                      <div className="mb-4">
                        <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Pilot Clients</h6>
                        <div className="space-y-2">
                          {rp.clients.map((c, j) => (
                            <div key={j} className="rounded-lg p-3 text-sm" style={{ backgroundColor: rp.color + '08', borderLeft: `3px solid ${rp.color}` }}>
                              <span className="font-semibold text-slate-800">{c.name}</span>
                              <span className="text-slate-400 ml-2 text-xs">— {c.why}</span>
                              <div className="text-xs mt-0.5" style={{ color: rp.color }}>Funnel: {c.funnel}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Activities */}
                      <div>
                        <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Activities</h6>
                        <ul className="space-y-1.5">{rp.activities.map((a, j) => (<li key={j} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: rp.color }} />{a}</li>))}</ul>
                      </div>
                      {/* Success Metrics */}
                      <div>
                        <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Success Metrics</h6>
                        <ul className="space-y-1.5">{rp.metrics.map((m, j) => (<li key={j} className="flex items-start gap-2 text-sm text-slate-600"><svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{m}</li>))}</ul>
                      </div>
                      {/* Support */}
                      <div>
                        <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Support Model</h6>
                        <p className="text-sm text-slate-600">{rp.support}</p>
                      </div>
                    </div>

                    {rp.phase < 3 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span><span className="font-semibold">Go/No-Go decision</span> at end of {rp.timing} before advancing to Phase {rp.phase + 1}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rollback Plan */}
        <div className="mb-6">
          <button onClick={() => setShowRollback(!showRollback)} className="w-full bg-red-50 border-2 border-red-200 rounded-xl px-5 py-3.5 flex items-center justify-between text-left cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-lg">🛑</span>
              <span className="font-bold text-red-700">Rollback Plan (If Things Go Wrong)</span>
            </div>
            <svg className={`w-5 h-5 text-red-400 transition-transform duration-300 ${showRollback ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${showRollback ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white border-2 border-t-0 border-red-200 rounded-b-xl p-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Trigger Conditions</h6>
                  <ul className="space-y-2">{rollbackTriggers.map((t, i) => (<li key={i} className="flex items-start gap-2 text-sm text-slate-600"><span className="text-red-400 mt-0.5">✗</span>{t}</li>))}</ul>
                </div>
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Rollback Procedure</h6>
                  <div className="relative pl-6 space-y-0">
                    <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-red-200" />
                    {rollbackSteps.map((s) => (
                      <div key={s.step} className="relative flex items-start gap-3 py-1.5">
                        <div className="absolute -left-6 mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold text-white bg-red-400 z-10">{s.step}</div>
                        <div className="pl-1 text-sm text-slate-600">{s.text} <span className="text-xs text-slate-400 ml-1">({s.time})</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Plan */}
        <div>
          <button onClick={() => setShowComms(!showComms)} className="w-full bg-white border border-slate-100 shadow-sm rounded-xl px-5 py-3.5 flex items-center justify-between text-left cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-lg">📣</span>
              <span className="font-bold text-slate-800">Communication Plan</span>
            </div>
            <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showComms ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${showComms ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white border border-t-0 border-slate-100 rounded-b-xl p-5">
              <div className="relative pl-6 space-y-0">
                <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200" />
                {commsTimeline.map((c, i) => (
                  <div key={i} className="relative flex items-start gap-3 py-2">
                    <div className="absolute -left-6 mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center z-10" style={{ backgroundColor: c.color }}>
                      <span className="text-[8px] font-bold text-white">{c.week}</span>
                    </div>
                    <div className="pl-1">
                      <span className="text-xs font-bold" style={{ color: c.color }}>Week {c.week}</span>
                      <span className="text-sm text-slate-600 ml-2">{c.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Channels</h6>
                <div className="flex flex-wrap gap-2">
                  {['Email: Official announcements', 'Blog: Features & case studies', 'Slack: Real-time support (pilots)', 'Webinars: Training & Q&A', 'In-app: Feature tips'].map((ch, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200">{ch}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
