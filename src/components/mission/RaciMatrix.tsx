import { useState } from 'react';

const ACCENT = '#7c3aed';

type RaciValue = 'R' | 'A' | 'R/A' | 'C' | 'I';

const raciColors: Record<string, { bg: string; text: string; label: string }> = {
  R:   { bg: '#059669', text: '#fff', label: 'Responsible' },
  A:   { bg: '#2563eb', text: '#fff', label: 'Accountable' },
  'R/A': { bg: '#0d9488', text: '#fff', label: 'Responsible & Accountable' },
  C:   { bg: '#eab308', text: '#713f12', label: 'Consulted' },
  I:   { bg: '#cbd5e1', text: '#475569', label: 'Informed' },
};

const roles = ['PM', 'Designer', 'Tech Lead', 'Engineers', 'Stakeholders'];

const activities: { name: string; values: RaciValue[] }[] = [
  { name: 'Requirements gathering',   values: ['A', 'C', 'C', 'I', 'R'] },
  { name: 'User flow design',         values: ['C', 'R/A', 'I', 'I', 'C'] },
  { name: 'Technical architecture',   values: ['C', 'I', 'R/A', 'C', 'I'] },
  { name: 'API contract definition',  values: ['C', 'I', 'R', 'A', 'I'] },
  { name: 'UI/UX wireframes',         values: ['A', 'R', 'C', 'I', 'C'] },
  { name: 'Database schema',          values: ['C', 'I', 'A', 'R', 'I'] },
  { name: 'Risk assessment',          values: ['R/A', 'C', 'C', 'C', 'C'] },
  { name: 'Sprint planning',          values: ['R/A', 'C', 'C', 'C', 'I'] },
  { name: 'User story refinement',    values: ['R', 'C', 'C', 'A', 'I'] },
];

export default function RaciMatrix({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Team Collaboration Model</h4>
        <span className="text-xs text-slate-400 ml-1">RACI Matrix</span>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-4">
          {Object.entries(raciColors).filter(([k]) => k !== 'R/A').map(([key, val]) => (
            <span key={key} className="inline-flex items-center gap-1.5 text-xs font-medium">
              <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: val.bg, color: val.text }}>{key}</span>
              {val.label}
            </span>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-48">Activity</th>
                {roles.map((role) => (
                  <th key={role} className="py-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">{role}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activities.map((act, ri) => (
                <tr key={ri} className={`border-b border-slate-50 transition-colors ${hovered?.row === ri ? 'bg-violet-50/40' : 'hover:bg-slate-50/50'}`}>
                  <td className="py-2.5 px-4 text-sm font-medium text-slate-700">{act.name}</td>
                  {act.values.map((val, ci) => {
                    const style = raciColors[val];
                    const isHovered = hovered?.row === ri && hovered?.col === ci;
                    return (
                      <td key={ci} className="py-2.5 px-3 text-center"
                        onMouseEnter={() => setHovered({ row: ri, col: ci })}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-transform duration-200 ${isHovered ? 'scale-125 shadow-md' : ''}`}
                          style={{ backgroundColor: style.bg, color: style.text }}
                          title={`${roles[ci]}: ${style.label}`}
                        >
                          {val}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hover hint */}
        {hovered && (
          <div className="mt-2 text-xs text-slate-400 text-center">
            <span className="font-semibold text-slate-600">{roles[hovered.col]}</span> is{' '}
            <span className="font-semibold" style={{ color: raciColors[activities[hovered.row].values[hovered.col]].bg === '#cbd5e1' ? '#475569' : raciColors[activities[hovered.row].values[hovered.col]].bg }}>
              {raciColors[activities[hovered.row].values[hovered.col]].label}
            </span>{' '}
            for <span className="font-semibold text-slate-600">{activities[hovered.row].name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
