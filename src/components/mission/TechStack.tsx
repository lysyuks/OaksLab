import { useState } from 'react';

const ACCENT = '#7c3aed';

interface ToolCategory {
  title: string;
  emoji: string;
  color: string;
  tools: { name: string; desc: string }[];
}

const categories: ToolCategory[] = [
  {
    title: 'Project Management',
    emoji: '📋',
    color: '#7c3aed',
    tools: [
      { name: 'Jira / Linear', desc: 'Backlog & sprint management' },
      { name: 'Notion', desc: 'Documentation & requirements' },
      { name: 'Miro', desc: 'Workshops & brainstorming' },
    ],
  },
  {
    title: 'Design',
    emoji: '🎨',
    color: '#ec4899',
    tools: [
      { name: 'Figma', desc: 'UI/UX design & prototypes' },
      { name: 'FigJam', desc: 'Collaborative ideation' },
    ],
  },
  {
    title: 'Development',
    emoji: '💻',
    color: '#059669',
    tools: [
      { name: 'GitHub', desc: 'Code repository' },
      { name: 'VS Code', desc: 'Development environment' },
      { name: 'Postman', desc: 'API testing' },
    ],
  },
  {
    title: 'Communication',
    emoji: '💬',
    color: '#2563eb',
    tools: [
      { name: 'Slack', desc: '#general · #engineering · #design · #hipaa' },
      { name: 'Zoom', desc: 'Video calls & demos' },
      { name: 'Loom', desc: 'Async video updates' },
    ],
  },
  {
    title: 'Monitoring & Analytics',
    emoji: '📊',
    color: '#d97706',
    tools: [
      { name: 'Sentry', desc: 'Error tracking' },
      { name: 'DataDog', desc: 'Performance monitoring' },
      { name: 'Amplitude', desc: 'Product analytics' },
    ],
  },
];

export default function TechStack({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Tools & Tech Stack</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:border-violet-100 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{cat.emoji}</span>
                <h5 className="font-bold text-sm" style={{ color: cat.color }}>{cat.title}</h5>
              </div>
              <div className="space-y-3">
                {cat.tools.map((tool, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">{tool.name}</div>
                      <div className="text-xs text-slate-500">{tool.desc}</div>
                    </div>
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
