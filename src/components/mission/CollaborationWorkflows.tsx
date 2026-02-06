import { useState } from 'react';

const ACCENT = '#7c3aed';

interface Workflow {
  title: string;
  emoji: string;
  color: string;
  steps: string[];
  tools: string;
}

const workflows: Workflow[] = [
  {
    title: 'PM ↔ Designer',
    emoji: '🎨',
    color: '#ec4899',
    steps: [
      'PM provides user stories & requirements',
      'Designer creates wireframes / mockups',
      'PM reviews against requirements',
      'Collaborative refinement session',
      'Designer produces high-fidelity designs',
      'PM validates with stakeholders',
      'Handoff to engineering',
    ],
    tools: 'Figma for design · Notion for specs · Slack for quick feedback',
  },
  {
    title: 'PM ↔ Tech Lead',
    emoji: '🏗️',
    color: '#2563eb',
    steps: [
      'PM presents feature requirements',
      'Tech Lead assesses technical feasibility',
      'Collaborative architecture discussion',
      'Tech Lead proposes solution options',
      'PM evaluates trade-offs (time / complexity / cost)',
      'Joint decision on approach',
      'Tech Lead documents architecture',
    ],
    tools: 'Miro for diagrams · Linear/Jira for tickets · Weekly 1:1s',
  },
  {
    title: 'PM ↔ Engineering Team',
    emoji: '⚡',
    color: '#059669',
    steps: [
      'PM writes user stories with acceptance criteria',
      'Engineers ask clarifying questions',
      'Story refinement session (whole team)',
      'Engineers estimate story points',
      'PM prioritizes based on value & dependencies',
      'Engineers develop & demo',
      'PM validates against acceptance criteria',
    ],
    tools: 'Jira/Linear for backlog · GitHub for code review · Daily standups',
  },
];

export default function CollaborationWorkflows({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [openWorkflow, setOpenWorkflow] = useState<number | null>(0);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Collaboration Workflows</h4>
        <span className="text-xs text-slate-400 ml-1">3 flows</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-4">
          {workflows.map((wf, i) => {
            const isOpen = openWorkflow === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{ borderColor: isOpen ? wf.color + '50' : '#e2e8f0' }}
              >
                <button
                  onClick={() => setOpenWorkflow(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{wf.emoji}</span>
                    <span className="font-semibold text-slate-800">{wf.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5">
                    {/* Flow steps */}
                    <div className="relative pl-6 space-y-0">
                      {/* Vertical line */}
                      <div className="absolute left-[9px] top-2 bottom-2 w-0.5" style={{ backgroundColor: wf.color + '30' }} />

                      {wf.steps.map((step, j) => (
                        <div key={j} className="relative flex items-start gap-3 py-1.5">
                          {/* Node */}
                          <div
                            className="absolute -left-6 mt-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0 z-10"
                            style={{ backgroundColor: wf.color }}
                          >
                            {j + 1}
                          </div>
                          <span className="text-sm text-slate-600 pl-1">{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tools: </span>
                      <span className="text-xs text-slate-500">{wf.tools}</span>
                    </div>
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
