import { useState } from 'react';
import StoryHeader from './workshop/StoryHeader';
import AcceptanceCriteria from './workshop/AcceptanceCriteria';
import EdgeCases from './workshop/EdgeCases';
import TechnicalNotes from './workshop/TechnicalNotes';
import Wireframes from './workshop/Wireframes';
import DefinitionOfDone from './workshop/DefinitionOfDone';
import HandoffAndQuestions from './workshop/HandoffAndQuestions';
import SpecPhilosophy from './workshop/SpecPhilosophy';

const ACCENT = '#f59e0b';

const sprints = [
  { id: '1\u20134', weeks: 'Weeks 7\u201314', title: 'Intake Form Builder Engine + Clinical Protocol Validator', color: '#f59e0b', items: ['No-code builder with branching logic editor', 'Protocol engine: clinical rules \u2192 configuration', 'Auto-scoring for validated instruments (PHQ-9, GAD-7)', 'Compliance validator for form checks'] },
  { id: '5\u20138', weeks: 'Weeks 15\u201323', title: 'Client Portal + Integration Layer', color: '#2563eb', items: ['Client dashboard & template library', 'EHR integration (Healthie, scheduling)', 'Payment stack integration', 'Patient-facing form renderer'] },
];

export default function WorkshopExtras({ visible }: { visible: boolean }) {
  const [showSprints, setShowSprints] = useState(true);

  return (
    <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
      {/* Development Sprint Overview */}
      <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button onClick={() => setShowSprints(!showSprints)} className="flex items-center gap-3 mb-6 cursor-pointer">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: ACCENT }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800">Development Phases Overview</h4>
            <span className="text-xs text-slate-400">Weeks 5–23 · 2-week sprints with daily standups, biweekly reviews</span>
          </div>
          <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showSprints ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ${showSprints ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Two-phase layout */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-6">
            {/* Specifications Phase */}
            <div className="bg-white rounded-2xl border-2 overflow-hidden" style={{ borderColor: ACCENT + '40' }}>
              <div className="px-5 py-3 border-b" style={{ backgroundColor: ACCENT + '10', borderColor: ACCENT + '20' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  <span className="font-bold text-sm text-slate-800">Specifications Phase</span>
                </div>
                <span className="text-xs text-slate-400 ml-5">Weeks 5–6</span>
              </div>
              <ul className="p-5 space-y-2">
                {['User story documentation with acceptance criteria', 'Wireframes and mockups for all features', 'API contract definitions', 'Technical handoff to engineering team'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Phase */}
            <div className="bg-white rounded-2xl border-2 overflow-hidden" style={{ borderColor: '#2563eb40' }}>
              <div className="px-5 py-3 border-b" style={{ backgroundColor: '#2563eb10', borderColor: '#2563eb20' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2563eb' }} />
                  <span className="font-bold text-sm text-slate-800">Development Phase</span>
                </div>
                <span className="text-xs text-slate-400 ml-5">Weeks 7–23 · 8 sprints</span>
              </div>
              <ul className="p-5 space-y-2">
                {['Sprint 1\u20134: Intake Form Builder Engine + Protocol Validator', 'Sprint 5\u20138: Client Portal + Integration Layer', 'Continuous integration & automated testing', 'Biweekly sprint reviews with stakeholders'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#2563eb' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sprint detail cards */}
          <div className="space-y-4">
            {sprints.map((s) => (
              <div key={s.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-5 py-3 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: s.color }}>Sprint {s.id}</span>
                    <span className="font-semibold text-sm text-slate-800">{s.title}</span>
                  </div>
                  <span className="text-xs text-slate-400">{s.weeks}</span>
                </div>
                <div className="px-5 py-3">
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: s.color + '12', color: s.color }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-slate-50 rounded-xl px-5 py-3 text-xs text-slate-500">
            <span className="font-semibold">Cadence:</span> 2-week sprints · Daily standups · Biweekly reviews · Continuous integration
          </div>
        </div>
      </div>

      {/* Section 1: Full User Story Spec */}
      <div>
        <StoryHeader visible={visible} />

        {/* Nested spec sections inside the story */}
        <div className="ml-0 mt-6 pl-4 border-l-2 border-amber-200 space-y-8">
          <AcceptanceCriteria visible={visible} />
          <EdgeCases visible={visible} />
          <TechnicalNotes visible={visible} />
          <Wireframes visible={visible} />
          <DefinitionOfDone visible={visible} />
          <HandoffAndQuestions visible={visible} />
        </div>
      </div>

      {/* Section 2: Spec Philosophy */}
      <SpecPhilosophy visible={visible} />
    </div>
  );
}
