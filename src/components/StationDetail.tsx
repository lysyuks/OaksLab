import { useEffect, useRef, useState } from 'react';
import type { StationData } from '../data/stations';
import BaseCampExtras from './BaseCampExtras';
import BlueprintExtras from './BlueprintExtras';
import MissionControlExtras from './MissionControlExtras';
import WorkshopExtras from './WorkshopExtras';

interface Props {
  station: StationData;
  isEven: boolean;
}

export default function StationDetail({ station, isEven }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={station.id}
      ref={ref}
      className={`py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-slate-50/70'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Station header */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
              style={{
                background: `linear-gradient(135deg, ${station.accentColor}15, ${station.accentColor}30)`,
                border: `2px solid ${station.accentColor}40`,
              }}
            >
              {station.emoji}
            </div>
            <div>
              <div
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: station.accentColor }}
              >
                Station {station.number} · {station.timeline}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {station.title}
                <span className="text-slate-400 font-normal ml-3 text-lg">
                  {station.subtitle}
                </span>
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-3xl mb-10 leading-relaxed">
            {station.description}
          </p>

          {/* Two-column content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <div
              className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: station.accentColor }}
                >
                  ✓
                </div>
                <h4 className="font-bold text-slate-700">Deliverables</h4>
              </div>
              <ul className="space-y-3">
                {station.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600"
                    style={{
                      transitionDelay: `${300 + i * 100}ms`,
                    }}
                  >
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: station.accentColor }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Activities */}
            <div
              className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: station.accentColor }}
                >
                  →
                </div>
                <h4 className="font-bold text-slate-700">Key Activities</h4>
              </div>
              <ul className="space-y-3">
                {station.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: station.accentColor + '90' }}
                    >
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extra content for Base Camp */}
          {station.id === 'base-camp' && <BaseCampExtras visible={visible} />}

          {/* Extra content for The Blueprint */}
          {station.id === 'the-blueprint' && <BlueprintExtras visible={visible} />}

          {/* Extra content for Mission Control */}
          {station.id === 'mission-control' && <MissionControlExtras visible={visible} />}

          {/* Extra content for The Workshop */}
          {station.id === 'the-workshop' && <WorkshopExtras visible={visible} />}
        </div>
      </div>
    </section>
  );
}
