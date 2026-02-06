import { useState } from 'react';

const ACCENT = '#ef4444';

const participants = [
  { role: '2–3 Client Admins', desc: 'From different clinics', icon: '⚙️' },
  { role: '1 OLH Platform Admin', desc: 'Internal power user', icon: '🛡️' },
  { role: '2 Healthcare Providers', desc: 'Doctors who review forms', icon: '🩺' },
  { role: '2–3 End Patients', desc: 'Volunteer testers', icon: '🧑‍⚕️' },
];

const pilotTraits = [
  'Early adopter mindset (willing to try new things)',
  'Simple use case initially (weight loss or dermatology)',
  'Active patient volume (50+ patients/month)',
  'Technical comfort level: Medium',
  'Engaged stakeholder (responds quickly)',
  'Forgiving of bugs (understands it\'s new)',
];

const scenarios = [
  { id: 1, title: 'Create Weight Loss Intake from Scratch', outcome: 'Form publishes successfully and is live', steps: ['Login as Client Admin', 'Create new funnel for weight loss', 'Add 8–10 fields (name, weight, medications, goals)', 'Add conditional logic for diabetes questions', 'Preview → Validate against protocol → Fix errors → Publish'] },
  { id: 2, title: 'Use Template and Customize', outcome: 'Customized template works correctly', steps: ['Browse template library → Select "Dermatology Intake"', 'Customize branding (logo, colors)', 'Add 2 custom fields + test photo upload', 'Preview on mobile device → Publish'] },
  { id: 3, title: 'Patient Fills Out Form (E2E)', outcome: 'Submission reaches doctor\'s clinical notes', steps: ['Access published form via URL', 'Fill required fields → Upload photo → Trigger conditional logic', 'Save progress → Exit → Resume from email link', 'Complete and submit → Verify doctor receives data'] },
  { id: 4, title: 'Handle Errors & Edge Cases', outcome: 'All errors handled gracefully', steps: ['Create form with 50+ fields', 'Test max file upload size', 'Test with poor internet connection', 'Publish without protocol fields → Concurrent editing'] },
];

const uatDays = [
  {
    day: 'Day 1',
    title: 'Kickoff Session',
    time: '10:00 AM – 12:00 PM',
    color: '#7c3aed',
    items: ['UAT overview presentation', 'Platform walkthrough demo', 'Q&A session', 'Distribute scenarios & credentials'],
  },
  {
    day: 'Days 2–4',
    title: 'Independent Testing',
    time: 'Flexible schedule',
    color: '#2563eb',
    items: ['Participants test 2–3 scenarios/day', 'Report bugs in real-time', 'PM + QA on Slack for support', 'Daily standup 9:00 AM (30 min)'],
  },
  {
    day: 'Daily',
    title: 'Bug Triage',
    time: '4:00 PM',
    color: '#f59e0b',
    items: ['Review all bugs reported that day', 'Assign severity (Critical / High / Medium / Low)', 'Prioritize fixes & assign to engineers', 'Update UAT participants on status'],
  },
  {
    day: 'Day 5',
    title: 'Retesting & Sign-Off',
    time: '10:00 AM – 12:00 PM',
    color: '#059669',
    items: ['Retest all Critical/High bugs fixed', 'Complete remaining scenarios', 'Final feedback survey', 'Go/No-Go decision meeting'],
  },
];

const bugSeverity = [
  { level: 'Critical', emoji: '🔴', color: '#ef4444', desc: 'Prevents core functionality — must fix before launch' },
  { level: 'High', emoji: '🟠', color: '#f97316', desc: 'Major feature broken — fix before UAT ends' },
  { level: 'Medium', emoji: '🟡', color: '#eab308', desc: 'Feature works but has issues — fix if time allows' },
  { level: 'Low', emoji: '🟢', color: '#22c55e', desc: 'Minor cosmetic issue — add to backlog' },
];

const successCriteria = [
  'All Critical bugs resolved and retested',
  '90%+ of High bugs resolved',
  'All test scenarios completed successfully',
  'No data loss or security issues found',
  'Performance benchmarks met',
  'HIPAA compliance validated',
  'Positive feedback from majority of participants (7/10+)',
];

export default function UATSection({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openScenario, setOpenScenario] = useState<number | null>(null);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">UAT Preparation & Execution</h4>
        <span className="text-xs text-slate-400 ml-1">Weeks 20–21</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Participants + Pilot traits */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h5 className="text-sm font-bold text-slate-800 mb-3">UAT Participants (6–8 people)</h5>
            <div className="space-y-2.5">
              {participants.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{p.icon}</span>
                  <div><span className="font-semibold text-slate-800">{p.role}</span><span className="text-slate-400 ml-1.5">— {p.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h5 className="text-sm font-bold text-slate-800 mb-3">Ideal Pilot Client Traits</h5>
            <ul className="space-y-2">
              {pilotTraits.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Test Scenarios */}
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Test Scenarios</h5>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {scenarios.map((sc, i) => {
            const isOpen = openScenario === i;
            return (
              <button key={i} onClick={() => setOpenScenario(isOpen ? null : i)} className={`text-left bg-white rounded-xl border-2 p-4 transition-all duration-300 cursor-pointer ${isOpen ? 'border-red-300 shadow-md' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: ACCENT }}>Scenario {sc.id}</span>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                <h6 className="text-sm font-semibold text-slate-800 mb-1">{sc.title}</h6>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-1.5 mb-2">
                    {sc.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-600"><span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: ACCENT + '80' }}>{j + 1}</span>{s}</li>
                    ))}
                  </ul>
                  <div className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-medium">Expected: {sc.outcome}</div>
                </div>
                {!isOpen && <p className="text-xs text-slate-400 mt-1">{sc.steps.length} steps — click to expand</p>}
              </button>
            );
          })}
        </div>

        {/* Execution Calendar */}
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">UAT Execution (Week 21)</h5>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {uatDays.map((d, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-4 py-2 border-b" style={{ backgroundColor: d.color + '10', borderColor: d.color + '20' }}>
                <div className="text-xs font-bold" style={{ color: d.color }}>{d.day}</div>
                <div className="text-sm font-semibold text-slate-800">{d.title}</div>
                <div className="text-[10px] text-slate-400">{d.time}</div>
              </div>
              <ul className="p-3 space-y-1.5">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600"><span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: d.color }} />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bug Severity */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h5 className="text-sm font-bold text-slate-800 mb-3">Bug Severity Levels</h5>
            <div className="space-y-2.5">
              {bugSeverity.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span>{b.emoji}</span>
                  <div><span className="font-semibold" style={{ color: b.color }}>{b.level}:</span><span className="text-slate-500 ml-1">{b.desc}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
            <h5 className="text-sm font-bold text-emerald-800 mb-3">UAT Success Criteria</h5>
            <ul className="space-y-2">
              {successCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
