import { useState } from 'react';

const ACCENT = '#2563eb';

interface Role {
  title: string;
  icon: string;
  color: string;
  permissions: string[];
}

const roles: Role[] = [
  {
    title: 'Platform Admin',
    icon: '🛡️',
    color: '#1e40af',
    permissions: [
      'Full system access',
      'Manage all clients',
      'Update clinical protocols',
      'Monitor system health',
      'Cross-client analytics',
    ],
  },
  {
    title: 'Client Admin',
    icon: '⚙️',
    color: '#7c3aed',
    permissions: [
      'Create / edit / publish funnels',
      'View analytics for their clinic',
      'Manage team members',
      'Configure branding',
      'Access templates',
    ],
  },
  {
    title: 'Client Team Member',
    icon: '👥',
    color: '#0891b2',
    permissions: [
      'View / edit assigned funnels',
      'Limited permissions',
      'Preview mode only',
      'Cannot publish',
    ],
  },
  {
    title: 'End Patient',
    icon: '🧑‍⚕️',
    color: '#059669',
    permissions: [
      'Fill out intake forms',
      'Upload documents / photos',
      'Save and resume',
      'View confirmation',
    ],
  },
  {
    title: 'Healthcare Provider',
    icon: '🩺',
    color: '#e11d48',
    permissions: [
      'Review completed forms (view-only)',
      'Access patient data',
      'Uses clinical notes system primarily',
    ],
  },
];

export default function UserRoles({ visible }: { visible: boolean }) {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">User Roles</h4>
        <span className="text-xs text-slate-400 ml-1">5 actors</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ backgroundColor: role.color + '12' }}
              >
                {role.icon}
              </div>

              <h5 className="font-bold text-slate-800 text-sm mb-3">{role.title}</h5>

              <ul className="space-y-1.5">
                {role.permissions.map((p, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                    <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: role.color }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
