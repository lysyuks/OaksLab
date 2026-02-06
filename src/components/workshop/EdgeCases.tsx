import { useState } from 'react';

interface EdgeCase {
  title: string;
  behavior: string;
  extra?: string;
}

const edgeCases: EdgeCase[] = [
  {
    title: 'User abandons form mid-creation',
    behavior: 'Draft auto-saved, available in "Drafts" tab. User can resume editing from where they left off.',
  },
  {
    title: 'User tries to delete a field with conditional logic attached',
    behavior: 'Warning modal: "3 other fields depend on this field. Deleting it will remove their conditional logic. Continue?"',
    extra: 'Shows list of dependent fields.',
  },
  {
    title: 'User creates 50+ fields in one form',
    behavior: 'Warning message: "Forms with 50+ fields have lower completion rates. Consider splitting into multiple steps."',
    extra: 'Still allows saving/publishing.',
  },
  {
    title: 'Protocol requirements change after form is published',
    behavior: 'System flags form as "Needs Review" with notification to Client Admin.',
    extra: 'Shows what changed: "New requirement: Must include GAD-7 anxiety screening." Form remains published but shows warning banner until updated.',
  },
  {
    title: 'Two admins edit same form simultaneously',
    behavior: 'Last-write-wins with notification: "This form was updated by [Name] 30 seconds ago. Your changes will overwrite theirs. Continue?"',
  },
  {
    title: 'User uploads invalid file in builder',
    behavior: 'Clear error: "Only PNG, JPG files under 5MB allowed." File upload field shows red border.',
  },
];

export default function EdgeCases({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-sm bg-orange-100 text-orange-600">🔸</span>
        <h5 className="font-bold text-slate-800">Edge Cases & Error Handling</h5>
        <span className="text-xs text-slate-400">{edgeCases.length} cases</span>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-3">
          {edgeCases.map((ec, i) => (
            <div key={i} className="bg-white rounded-xl border border-orange-100 shadow-sm p-4" style={{ borderLeft: '3px solid #f97316' }}>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-xs font-bold text-orange-500 mt-0.5">EC{i + 1}</span>
                <h6 className="text-sm font-semibold text-slate-800">{ec.title}</h6>
              </div>
              <p className="text-sm text-slate-600 ml-7">
                <span className="font-medium text-slate-700">Behavior: </span>{ec.behavior}
              </p>
              {ec.extra && <p className="text-sm text-slate-500 ml-7 mt-1 italic">{ec.extra}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
