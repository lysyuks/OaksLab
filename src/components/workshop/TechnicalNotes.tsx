import { useState } from 'react';

const ACCENT = '#f59e0b';

const dataModelJson = `{
  "funnel_id": "uuid",
  "client_id": "uuid",
  "name": "Weight Loss Intake - Dr. Smith Clinic",
  "status": "draft | published | archived",
  "treatment_category": "weight_loss",
  "steps": [
    {
      "step_id": "uuid",
      "step_number": 1,
      "step_name": "Medical History",
      "fields": [
        {
          "field_id": "uuid",
          "field_type": "text_short",
          "label": "Current medications",
          "placeholder": "List all medications...",
          "required": true,
          "validation": { "min_length": 3 },
          "conditional_logic": {
            "show_if": {
              "field_id": "uuid_other_field",
              "operator": "equals",
              "value": "yes"
            }
          }
        }
      ]
    }
  ],
  "protocol_validation": {
    "is_valid": false,
    "errors": ["Missing PHQ-9 screening", "No informed consent"]
  },
  "created_at": "timestamp",
  "updated_at": "timestamp",
  "published_at": "timestamp | null"
}`;

const endpoints = [
  { method: 'POST', path: '/api/funnels', desc: 'Create new funnel' },
  { method: 'GET', path: '/api/funnels/:id', desc: 'Get funnel details' },
  { method: 'PATCH', path: '/api/funnels/:id', desc: 'Update funnel (auto-save)' },
  { method: 'POST', path: '/api/funnels/:id/publish', desc: 'Publish funnel' },
  { method: 'POST', path: '/api/funnels/:id/validate', desc: 'Validate against protocol' },
  { method: 'GET', path: '/api/protocols/:category', desc: 'Get protocol requirements' },
  { method: 'GET', path: '/api/field-types', desc: 'Get available field types' },
];

const methodColors: Record<string, string> = {
  GET: '#059669',
  POST: '#2563eb',
  PATCH: '#d97706',
};

const perfReqs = [
  { metric: 'Drag-and-drop response', target: '<50ms' },
  { metric: 'Auto-save', target: '<500ms' },
  { metric: 'Preview mode load', target: '<2s' },
  { metric: 'Validation run', target: '<1s' },
  { metric: 'Large form support', target: '100+ fields' },
];

const a11yReqs = [
  'Keyboard navigation for drag-and-drop (Ctrl+Arrow keys)',
  'Screen reader announces field additions/deletions',
  'Color contrast meets WCAG 2.1 AA',
  'Focus indicators visible on all interactive elements',
];

export default function TechnicalNotes({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [showDataModel, setShowDataModel] = useState(false);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: ACCENT }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </span>
        <h5 className="font-bold text-slate-800">Technical Notes</h5>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[6000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-6">
          {/* Data Model */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <button onClick={() => setShowDataModel(!showDataModel)} className="w-full flex items-center justify-between px-5 py-3 text-left cursor-pointer bg-slate-800 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                <span className="font-semibold text-sm">Data Model (JSON Schema)</span>
              </div>
              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${showDataModel ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${showDataModel ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <pre className="p-4 bg-slate-900 text-slate-300 text-xs leading-relaxed overflow-x-auto font-mono">{dataModelJson}</pre>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h6 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              API Endpoints
            </h6>
            <div className="space-y-2">
              {endpoints.map((ep, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono text-white w-14 text-center" style={{ backgroundColor: methodColors[ep.method] }}>
                    {ep.method}
                  </span>
                  <code className="text-xs font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded">{ep.path}</code>
                  <span className="text-xs text-slate-400">— {ep.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance + Accessibility */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
              <h6 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Performance Requirements
              </h6>
              <div className="space-y-2">
                {perfReqs.map((pr, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{pr.metric}</span>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">{pr.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
              <h6 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Accessibility Requirements
              </h6>
              <ul className="space-y-2">
                {a11yReqs.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {req}
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
