import { useState } from 'react';

const mockups = [
  {
    title: 'Form Builder Interface',
    desc: 'Left sidebar with field types · Center canvas with drag-drop area · Right sidebar with field properties · Top bar with Save/Preview/Publish buttons',
    zones: [
      { label: 'Field Types', position: 'left', color: '#f59e0b' },
      { label: 'Canvas', position: 'center', color: '#2563eb' },
      { label: 'Properties', position: 'right', color: '#7c3aed' },
    ],
  },
  {
    title: 'Conditional Logic Builder',
    desc: 'Modal overlay showing logic rules · "If [field] [operator] [value], then show [field]" · Add AND/OR buttons',
    zones: [
      { label: 'If / Then Rules', position: 'center', color: '#059669' },
      { label: 'AND/OR', position: 'right', color: '#d97706' },
    ],
  },
  {
    title: 'Protocol Validation Panel',
    desc: 'Checklist of requirements · Green checkmarks for met requirements · Red X\'s with error messages for missing requirements',
    zones: [
      { label: 'Requirements List', position: 'left', color: '#059669' },
      { label: 'Errors', position: 'right', color: '#ef4444' },
    ],
  },
];

export default function Wireframes({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-5 cursor-pointer">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold bg-amber-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
        </span>
        <h5 className="font-bold text-slate-800">Wireframes / Mockups</h5>
        <span className="text-xs text-slate-400">3 screens</span>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-3 gap-4">
          {mockups.map((m, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Wireframe placeholder */}
              <div className="bg-slate-100 border-b border-slate-200 p-4 min-h-[160px] flex flex-col items-center justify-center relative">
                {/* Browser chrome */}
                <div className="absolute top-2 left-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-32 h-3 rounded-full bg-slate-200" />

                <div className="mt-4 w-full flex gap-1.5 px-2">
                  {m.zones.map((z, j) => (
                    <div
                      key={j}
                      className={`rounded-lg border-2 border-dashed flex items-center justify-center p-2 ${z.position === 'center' ? 'flex-1' : 'w-20'}`}
                      style={{ borderColor: z.color + '60', backgroundColor: z.color + '08' }}
                    >
                      <span className="text-[9px] font-bold text-center" style={{ color: z.color }}>{z.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Label */}
              <div className="p-4">
                <div className="text-xs font-bold text-amber-600 mb-1">Mockup {i + 1}</div>
                <h6 className="text-sm font-semibold text-slate-800 mb-1">{m.title}</h6>
                <p className="text-xs text-slate-500">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
