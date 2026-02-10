import { useState } from 'react';

const ACCENT = '#0d9488';

const benefits = [
  'No manual data entry (saves 15 min/patient)',
  'Works with any FHIR-compatible EHR',
  'Doctors have patient data before appointments',
  'Regulatory compliance (21st Century Cures Act)',
  'Future-proof integration',
];

const newEpics = [
  { num: 7, emoji: '🔄', title: 'FHIR Mapping Engine', dur: '2-3 weeks', items: ['Transform form data to FHIR resources', 'Support Patient, Observation, Condition, Medication, Goal', 'Validate against FHIR R4 standard'] },
  { num: 8, emoji: '🔌', title: 'FHIR API', dur: '2-3 weeks', items: ['RESTful FHIR endpoints', 'OAuth 2.0 authentication', 'Send data to EHR systems'] },
  { num: 9, emoji: '🎨', title: 'Mapping Configuration UI', dur: '2 weeks', items: ['Let clients map form fields to FHIR resources', 'Template library for common use cases', 'Preview FHIR output'] },
];

const impactItems = [
  { label: 'Timeline', value: '+7-8 weeks (7.5 months total)', icon: '📅' },
  { label: 'For Clients', value: '+30 min setup/form, saves hours monthly', icon: '⚙️' },
  { label: 'For Patients', value: 'No change in experience', icon: '🧑‍⚕️' },
  { label: 'For Doctors', value: 'Automatic data in their EHR', icon: '🩺' },
];

const formFields = [
  'Name: Jane Smith',
  'DOB: 1985-03-15',
  'Weight: 180 lbs',
  'Height: 5\'6"',
  'Medications: Metformin 500mg',
  'Conditions: Type 2 Diabetes',
  'Goal: Lose 30 lbs in 6 months',
  'PHQ-9 Score: 8',
];

const fhirResources = [
  { num: 1, resource: 'Patient', desc: 'demographics' },
  { num: 2, resource: 'Observation', desc: 'weight: 180 lbs' },
  { num: 3, resource: 'Observation', desc: 'height: 66 inches' },
  { num: 4, resource: 'Condition', desc: 'Type 2 Diabetes' },
  { num: 5, resource: 'MedicationStatement', desc: 'Metformin' },
  { num: 6, resource: 'Observation', desc: 'PHQ-9 score: 8' },
  { num: 7, resource: 'Goal', desc: 'target weight: 150 lbs' },
];

const fhirSnippet = '{\n  "resourceType": "Patient",\n  "name": [{ "text": "Jane Smith" }],\n  "birthDate": "1985-03-15"\n}';

const mappingRows = [
  { field: 'Full Name', fhir: 'Patient.name' },
  { field: 'Date of Birth', fhir: 'Patient.birthDate' },
  { field: 'Current Weight', fhir: 'Observation (Weight)' },
  { field: 'Medications', fhir: 'MedicationStatement' },
  { field: 'Medical Conditions', fhir: 'Condition' },
  { field: 'PHQ-9 Answers', fhir: 'Observation (PHQ-9)' },
];

const flowSteps = [
  'Patient submits form',
  'System validates data',
  'Maps to FHIR R4 resources',
  'Creates FHIR Bundle',
  'Sends to EHR via API',
  'Doctor sees data in their system',
];

const integrationMethods = [
  { method: 'Push', desc: 'Send immediately to EHR', rec: true },
  { method: 'Pull', desc: 'EHR fetches on-demand', rec: false },
  { method: 'HL7 v2 fallback', desc: 'For legacy systems', rec: false },
];

const resourceTable = [
  { data: 'Demographics', resource: 'Patient', example: 'Name, DOB, phone' },
  { data: 'Weight / Height', resource: 'Observation', example: 'Vital signs' },
  { data: 'Diagnoses', resource: 'Condition', example: 'Diabetes, hypertension' },
  { data: 'Medications', resource: 'MedicationStatement', example: 'Metformin, Lisinopril' },
  { data: 'Goals', resource: 'Goal', example: 'Weight loss target' },
  { data: 'Screening scores', resource: 'Observation', example: 'PHQ-9, GAD-7' },
];

const risks = [
  { critical: false, title: 'Complexity', why: 'FHIR is technical', mit: 'Templates, auto-suggestions, training' },
  { critical: false, title: 'EHR API Limits', why: 'Rate limiting', mit: 'Queue system, retry logic' },
  { critical: true, title: 'Mapping Errors', why: 'Wrong data could affect care', mit: 'Validation, preview mode, testing' },
  { critical: false, title: 'Adoption', why: 'Clients may find it complex', mit: 'Make optional initially, show ROI' },
];

const timelinePhases = [
  { name: 'FHIR Mapping Engine', weeks: 'Wk 18-20', start: 18, end: 20, color: '#0d9488' },
  { name: 'FHIR API', weeks: 'Wk 21-22', start: 21, end: 22, color: '#2563eb' },
  { name: 'Mapping UI', weeks: 'Wk 23-24', start: 23, end: 24, color: '#7c3aed' },
  { name: 'FHIR Testing', weeks: 'Wk 25-26', start: 25, end: 26, color: '#f59e0b' },
];

export default function FhirExtras({ visible }: { visible: boolean }) {
  const [showSnippet, setShowSnippet] = useState(false);

  return (
    <div className="mt-12 space-y-10">

      {/* 1. What is FHIR */}
      <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="rounded-2xl p-5 border" style={{ backgroundColor: '#f0fdfa', borderColor: '#99f6e4' }}>
          <h5 className="font-bold text-sm mb-2" style={{ color: '#115e59' }}>What is FHIR R4?</h5>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            <strong style={{ color: '#0f766e' }}>FHIR R4 (Fast Healthcare Interoperability Resources)</strong> is the healthcare industry standard for exchanging patient data between systems.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            <strong className="text-slate-800">What the Client Wants:</strong> Automatically send intake form data to doctors' EHR systems (Epic, Cerner, Athena) in standardized FHIR format.
          </p>
          <div className="flex flex-wrap gap-2">
            {benefits.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium" style={{ backgroundColor: '#ccfbf1', color: '#0f766e' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Impact on Scope */}
      <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Impact on Project Scope</h5>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-3">
            {newEpics.map((ep) => (
              <div key={ep.num} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{ep.emoji}</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>Epic {ep.num}</span>
                      <h6 className="text-sm font-bold text-slate-800">{ep.title}</h6>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdfa', color: '#0f766e' }}>{ep.dur}</span>
                </div>
                <ul className="space-y-1">
                  {ep.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#14b8a6' }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h6 className="text-sm font-bold text-slate-800 mb-4">Impact Summary</h6>
            <div className="space-y-3">
              {impactItems.map((im, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-lg">{im.icon}</span>
                  <div>
                    <span className="font-semibold text-slate-800">{im.label}:</span>
                    <span className="text-slate-500 ml-1">{im.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Form to FHIR Example */}
      <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Example: Intake Form → FHIR Resources</h5>
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#d97706' }}>Patient Fills Out</div>
            <ul className="space-y-1">
              {formFields.map((d, i) => (
                <li key={i} className="text-sm text-slate-700 font-mono">{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#f0fdfa', borderColor: '#99f6e4' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#0d9488' }}>System Creates 7 FHIR Resources</div>
            <ul className="space-y-1.5">
              {fhirResources.map((r) => (
                <li key={r.num} className="flex items-center gap-2 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#14b8a6' }}>{r.num}</span>
                  <span className="font-semibold" style={{ color: '#115e59' }}>{r.resource}</span>
                  <span className="text-slate-400">({r.desc})</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2 text-xs font-medium" style={{ borderTop: '1px solid #99f6e4', color: '#0d9488' }}>
              All packaged in a <strong>FHIR Bundle</strong> → Sent to doctor's EHR via API
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={() => setShowSnippet(!showSnippet)} className="text-xs font-medium cursor-pointer flex items-center gap-1" style={{ color: '#0d9488' }}>
            <svg className={`w-3 h-3 transition-transform ${showSnippet ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            {showSnippet ? 'Hide' : 'Show'} sample FHIR JSON
          </button>
          {showSnippet && (
            <pre className="bg-slate-900 text-slate-300 text-xs p-4 rounded-xl font-mono overflow-x-auto mt-2">{fhirSnippet}</pre>
          )}
        </div>
      </div>

      {/* 4. Mapping UI */}
      <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Mapping Configuration UI</h5>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-5 py-2.5 flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-xs font-semibold text-slate-500 ml-2">FHIR Mapping</span>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider pb-2">Form Field</th>
                  <th className="w-8" />
                  <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider pb-2">FHIR Resource</th>
                </tr>
              </thead>
              <tbody>
                {mappingRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-1.5 text-slate-700 font-medium">{row.field}</td>
                    <td className="py-1.5 text-center" style={{ color: '#2dd4bf' }}>→</td>
                    <td className="py-1.5 font-mono text-xs px-2 rounded" style={{ color: '#0f766e', backgroundColor: '#f0fdfa' }}>{row.fhir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
              {['Use Template', 'Preview', 'Save'].map((btn) => (
                <span key={btn} className="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500">{btn}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Auto-suggest appropriate mappings', 'Templates for weight loss, dermatology, etc.', 'Preview FHIR output before saving'].map((f, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full border" style={{ backgroundColor: '#f0fdfa', color: '#0f766e', borderColor: '#99f6e4' }}>{f}</span>
          ))}
        </div>
      </div>

      {/* 5. Integration Flow */}
      <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h5 className="text-sm font-bold text-slate-800 mb-3">Integration Flow</h5>
            <div className="space-y-2">
              {flowSteps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: ACCENT }}>{i + 1}</span>
                  <span className="text-sm text-slate-600">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h5 className="text-sm font-bold text-slate-800 mb-3">Integration Methods</h5>
            <div className="space-y-2.5">
              {integrationMethods.map((m, i) => (
                <div key={i} className="flex items-center justify-between text-sm rounded-lg p-3 border" style={{ backgroundColor: m.rec ? '#f0fdfa' : '#f8fafc', borderColor: m.rec ? '#99f6e4' : '#e2e8f0' }}>
                  <div>
                    <span className="font-semibold" style={{ color: m.rec ? '#115e59' : '#334155' }}>{m.method}</span>
                    <span className="text-slate-400 ml-2 text-xs">— {m.desc}</span>
                  </div>
                  {m.rec && <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#14b8a6' }}>Recommended</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Resources Table */}
      <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Common FHIR Resources</h5>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">Form Data</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">FHIR Resource</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">Example</th>
              </tr>
            </thead>
            <tbody>
              {resourceTable.map((row, i) => (
                <tr key={i} className="border-b border-slate-50">
                  <td className="py-2.5 px-4 text-slate-700 font-medium">{row.data}</td>
                  <td className="py-2.5 px-4 font-mono text-xs" style={{ color: '#0f766e' }}>{row.resource}</td>
                  <td className="py-2.5 px-4 text-slate-500">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. ROI */}
      <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Benefits & ROI</h5>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 text-center">
            <div className="text-2xl mb-2">⏱️</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Time Savings</div>
            <div className="text-sm text-slate-500 mb-2">Before: 15 min x 100 pts = 25 hrs/month</div>
            <div className="text-sm font-bold" style={{ color: '#059669' }}>After: 0 min (automatic)</div>
          </div>
          <div className="rounded-xl p-5 text-center border" style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}>
            <div className="text-2xl mb-2">💰</div>
            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#059669' }}>Annual Savings</div>
            <div className="text-2xl font-bold" style={{ color: '#047857' }}>$7,500</div>
            <div className="text-xs" style={{ color: '#059669' }}>per client per year</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 text-center">
            <div className="text-2xl mb-2">✅</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Data Quality</div>
            <div className="text-sm text-slate-500 mb-2">Before: 5-10% entry errors</div>
            <div className="text-sm font-bold" style={{ color: '#059669' }}>{'After: <1% errors'}</div>
          </div>
        </div>
      </div>

      {/* 8. Risks */}
      <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Risks & Mitigation</h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {risks.map((r, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4" style={{ borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor: r.critical ? '#ef4444' : '#f59e0b' }}>
              <div className="flex items-center gap-2 mb-1">
                <span>{r.critical ? '🔴' : '🟡'}</span>
                <span className="font-semibold text-sm text-slate-800">{r.title}</span>
              </div>
              <p className="text-xs text-slate-500 italic mb-1">Why: {r.why}</p>
              <p className="text-xs text-slate-600">
                <span className="font-semibold" style={{ color: '#059669' }}>Mitigation:</span> {r.mit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 9. Timeline */}
      <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Updated Timeline</h5>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">Original: <strong className="text-slate-600">6 months</strong></span>
              <span style={{ color: '#14b8a6' }}>→</span>
              <strong style={{ color: '#0f766e' }}>With FHIR: 7.5 months</strong>
            </div>
          </div>
          <div className="space-y-2 min-w-[350px]">
            {timelinePhases.map((p, i) => {
              const leftPct = ((p.start - 18) / 9) * 100;
              const widthPct = ((p.end - p.start + 1) / 9) * 100;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-36 shrink-0 text-right pr-2">
                    <div className="text-xs font-semibold text-slate-700">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.weeks}</div>
                  </div>
                  <div className="flex-1 relative h-7 bg-slate-50 rounded-lg">
                    <div
                      className="absolute top-0.5 bottom-0.5 rounded-md flex items-center justify-center"
                      style={{ left: leftPct + '%', width: widthPct + '%', backgroundColor: p.color, opacity: 0.85 }}
                    >
                      <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>{p.end - p.start + 1}w</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 10. Recommendation */}
      <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(to right, #0d9488, #14b8a6)' }}>
          <div className="p-5 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wider mb-2">Recommendation: Proceed with FHIR R4</h5>
                <div className="grid sm:grid-cols-2 gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <div>
                    <strong className="text-white">Why:</strong>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-start gap-1.5"><span className="mt-1 w-1 h-1 rounded-full shrink-0 bg-white/60" />Essential for enterprise clients</li>
                      <li className="flex items-start gap-1.5"><span className="mt-1 w-1 h-1 rounded-full shrink-0 bg-white/60" />Strong ROI ($7,500/yr per client)</li>
                      <li className="flex items-start gap-1.5"><span className="mt-1 w-1 h-1 rounded-full shrink-0 bg-white/60" />Competitive advantage</li>
                      <li className="flex items-start gap-1.5"><span className="mt-1 w-1 h-1 rounded-full shrink-0 bg-white/60" />Regulatory compliance requirement</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Trade-off:</strong>
                    <p className="mt-1">+1.5 months timeline, but delivers significantly more value.</p>
                    <div className="mt-3 rounded-lg p-3 bg-white/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/70">Alternative:</span>
                      <p className="text-xs mt-1 text-white/80">Launch without FHIR first (6 months), add later (Phase 2). Risk: May lose enterprise deals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
