import { useState } from 'react';

const ACCENT = '#f59e0b';

interface AC {
  id: string;
  title: string;
  items: string[];
}

const criteria: AC[] = [
  {
    id: 'AC1',
    title: 'Form Builder Interface',
    items: [
      'Can add/remove/reorder form steps (minimum 1, maximum 10 steps)',
      'Can name each step (e.g., "Medical History", "Current Medications", "Weight Goals")',
      'Drag-and-drop 15+ field types from sidebar: Text input (short, long) · Number input · Dropdown (single, multi-select) · Radio buttons · Checkboxes · Date picker · File upload (images, PDFs) · Signature pad · Address autocomplete · Phone number with country code · Email with validation · Height/Weight with unit selection · Yes/No toggle · Scale (1-10 rating) · Section header (non-input)',
    ],
  },
  {
    id: 'AC2',
    title: 'Conditional Logic Builder',
    items: [
      'Can set rules: "Show field X if field Y = value Z"',
      'Supports operators: equals, not equals, contains, greater than, less than, is empty, is not empty',
      'Supports AND/OR logic combinations',
      'Can nest up to 5 levels deep',
      'Visual indicator shows which fields are conditional',
      'Preview mode reflects conditional logic in real-time',
    ],
  },
  {
    id: 'AC3',
    title: 'MWL Clinical Protocol Validation',
    items: [
      'Real-time validation as form is built',
      'Red error indicators on non-compliant sections with specific error messages',
      'Required questions per treatment category — Weight Loss: Current weight, height, BMI, medical conditions, current medications, pregnancy status (if applicable), weight loss goals',
      'Must include PHQ-9 (depression screening) if patient indicates mental health history',
      'Must include informed consent section',
      'Cannot publish form until all protocol requirements met',
      '"View Protocol Requirements" button shows checklist of what\'s needed',
    ],
  },
  {
    id: 'AC4',
    title: 'Preview Mode',
    items: [
      '"Preview as Patient" button launches form in new tab/modal',
      'Shows exactly what patient will see (responsive design)',
      'Can test conditional logic by filling out form',
      'Can navigate between steps',
      'Shows progress indicator (e.g., "Step 2 of 5")',
      'Preview does NOT save data',
    ],
  },
  {
    id: 'AC5',
    title: 'Save & Publish Workflow',
    items: [
      'Auto-save draft every 30 seconds (with "Saving..." indicator)',
      '"Save Draft" button for manual save',
      '"Publish" button only enabled when validation passes',
      'Confirmation modal before publishing: "This will make the form live. Patients can start filling it out. Continue?"',
      'Published forms show "Published" badge with timestamp',
      'Can unpublish and edit published forms (creates new version)',
    ],
  },
];

export default function AcceptanceCriteria({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openAC, setOpenAC] = useState<number | null>(0);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: ACCENT }}>✓</span>
        <h5 className="font-bold text-slate-800">Acceptance Criteria</h5>
        <span className="text-xs text-slate-400">{criteria.length} sections</span>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-3">
          {criteria.map((ac, i) => {
            const isOpen = openAC === i;
            return (
              <div key={i} className={`bg-white rounded-xl border transition-all duration-300 ${isOpen ? 'border-amber-300 shadow-md' : 'border-slate-100 shadow-sm'}`}>
                <button onClick={() => setOpenAC(isOpen ? null : i)} className="w-full flex items-center justify-between px-5 py-3.5 text-left cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <span className="text-xs font-bold text-amber-600">{ac.id}:</span>
                      <span className="font-semibold text-sm text-slate-800 ml-1.5">{ac.title}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{ac.items.length} items</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="px-5 pb-4 space-y-2 ml-9">
                    {ac.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
