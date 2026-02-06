import { useState } from 'react';

const ACCENT = '#f59e0b';

export default function StoryHeader({ visible }: { visible: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 mb-6 cursor-pointer">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-800">Sample User Story — Detailed Specification</h4>
        <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Ticket-style card */}
        <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-md overflow-hidden">
          {/* Top bar */}
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-amber-500">Feature</span>
              <span className="text-xs font-mono text-slate-400">OLH-247</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700">High Priority</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700">13 Story Points</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">Epic 1: Builder Engine</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Configure Multi-Step Weight Loss Intake Form with Clinical Protocol Validation</h3>

            <div className="bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <span className="font-bold text-slate-800">As a</span> Client Admin for a weight loss clinic<br />
                <span className="font-bold text-slate-800">I want to</span> create a multi-step intake form that collects patient history, medications, goals, and validates against MWL Clinical Protocol<br />
                <span className="font-bold text-slate-800">So that</span> doctors have complete, compliant information before consultations and we can launch our telehealth service quickly
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500"><span className="font-semibold text-slate-700">Business Value:</span> High</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-500">Enables clients to self-configure forms in <span className="font-semibold text-emerald-600">&lt;2 days</span> vs <span className="font-semibold text-red-500">2 months</span> with current system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
