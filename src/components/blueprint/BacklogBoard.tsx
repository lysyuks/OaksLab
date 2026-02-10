import { useState } from 'react';

const ACCENT = '#2563eb';

interface StoryCard {
  epic: string;
  epicColor: string;
  title: string;
  points: number;
  description: string;
}

const columns: { label: string; color: string; cards: StoryCard[] }[] = [
  {
    label: 'To Do',
    color: '#64748b',
    cards: [
      {
        epic: 'Epic 1',
        epicColor: '#2563eb',
        title: 'Drag & drop form fields',
        points: 8,
        description:
          'As a Client Admin, I want to drag and drop form fields so I can quickly build intake forms.',
      },
      {
        epic: 'Epic 2',
        epicColor: '#059669',
        title: 'Auto-validate against protocol',
        points: 13,
        description:
          "As a Platform Admin, I want the system to auto-validate funnels so clients can't publish non-compliant forms.",
      },
      {
        epic: 'Epic 5',
        epicColor: '#0891b2',
        title: 'Save & resume for patients',
        points: 8,
        description:
          "As a patient, I want to save progress and resume later so I don't lose my work.",
      },
    ],
  },
  {
    label: 'In Progress',
    color: '#2563eb',
    cards: [
      {
        epic: 'Epic 3',
        epicColor: '#7c3aed',
        title: 'Template library',
        points: 5,
        description:
          'As a Client Admin, I want to browse and clone pre-built funnel templates.',
      },
      {
        epic: 'Epic 4',
        epicColor: '#d97706',
        title: 'Scheduling integration',
        points: 13,
        description:
          'As a patient, I want to book an appointment at the end of intake.',
      },
    ],
  },
  {
    label: 'Done',
    color: '#059669',
    cards: [
      {
        epic: 'Epic 1',
        epicColor: '#2563eb',
        title: 'Field type selector',
        points: 3,
        description: 'Component that renders the correct input type for each field definition.',
      },
      {
        epic: 'Epic 3',
        epicColor: '#7c3aed',
        title: 'Client dashboard shell',
        points: 8,
        description: 'Authenticated dashboard layout with navigation and client context.',
      },
    ],
  },
];

export default function BacklogBoard({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Sample Backlog</h4>
        <span className="text-xs text-slate-400 ml-1">Kanban view</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div key={col.label} className="rounded-2xl bg-slate-100/60 border border-slate-200/60 p-4">
              {/* Column header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: col.color }} />
                  <h5 className="font-bold text-sm text-slate-700">{col.label}</h5>
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-full">
                  {col.cards.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {col.cards.map((card, j) => (
                  <div
                    key={j}
                    className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Epic tag + points */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: card.epicColor }}
                      >
                        {card.epic}
                      </span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                        {card.points} pts
                      </span>
                    </div>

                    <h6 className="font-semibold text-sm text-slate-800 mb-1">{card.title}</h6>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
