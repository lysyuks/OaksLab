import { useState } from 'react';

const ACCENT = '#7c3aed';

interface Event {
  time: string;
  duration: string;
  title: string;
  who: string;
  goal: string;
  color: string;
}

const days: { day: string; events: Event[] }[] = [
  {
    day: 'Monday',
    events: [
      { time: '9:00 AM', duration: '2h', title: 'Sprint Planning', who: 'Full team', goal: 'Commit to sprint scope', color: '#7c3aed' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { time: '9:15 AM', duration: '15m', title: 'Daily Standup', who: 'Full team', goal: 'What I did, doing, blockers', color: '#2563eb' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { time: '9:15 AM', duration: '15m', title: 'Daily Standup', who: 'Full team', goal: 'What I did, doing, blockers', color: '#2563eb' },
      { time: '2:00 PM', duration: '1h', title: 'Design Review', who: 'PM, Designer, Tech Lead', goal: 'Review in-progress designs', color: '#ec4899' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { time: '9:15 AM', duration: '15m', title: 'Daily Standup', who: 'Full team', goal: 'What I did, doing, blockers', color: '#2563eb' },
      { time: '3:00 PM', duration: '1h', title: 'Technical Sync', who: 'PM, Tech Lead, Engineers', goal: 'Technical decisions & blockers', color: '#059669' },
    ],
  },
  {
    day: 'Friday',
    events: [
      { time: '10:00 AM', duration: '1h', title: 'Sprint Review / Demo', who: 'Full team + Stakeholders', goal: 'Demo completed work', color: '#d97706' },
      { time: '11:30 AM', duration: '45m', title: 'Retrospective', who: 'Full team', goal: 'What went well, what to improve', color: '#ef4444' },
    ],
  },
];

export default function WeeklyRhythm({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Weekly Rhythm & Ceremonies</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Calendar grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {days.map((d) => (
            <div key={d.day} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Day header */}
              <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/50">
                <span className="text-sm font-bold text-slate-700">{d.day}</span>
              </div>
              {/* Events */}
              <div className="p-3 space-y-2.5 min-h-[120px]">
                {d.events.map((ev, j) => (
                  <div
                    key={j}
                    className="rounded-xl p-3 text-xs"
                    style={{ backgroundColor: ev.color + '10', borderLeft: `3px solid ${ev.color}` }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold" style={{ color: ev.color }}>{ev.time}</span>
                      <span className="text-slate-400">· {ev.duration}</span>
                    </div>
                    <div className="font-semibold text-slate-800 mb-0.5">{ev.title}</div>
                    <div className="text-slate-500">{ev.who}</div>
                    <div className="text-slate-400 italic mt-1">{ev.goal}</div>
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
