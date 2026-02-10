import { useState, useEffect, useRef } from 'react';
import { stations } from '../data/stations';

const journeyStations = stations.filter(s => s.id !== 'fhir-integration');

export default function JourneyPath() {
  const [activeStation, setActiveStation] = useState<string | null>(null);
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set());
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          journeyStations.forEach((_, i) => {
            setTimeout(() => {
              setVisibleNodes((prev) => new Set([...prev, i]));
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (pathRef.current) observer.observe(pathRef.current);
    return () => observer.disconnect();
  }, []);

  const handleStationClick = (id: string) => {
    setActiveStation(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="journey" className="py-12 sm:py-16 md:py-24 bg-white" ref={pathRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          The Journey
        </h2>
        <p className="text-center text-slate-500 mb-10 sm:mb-16 max-w-xl mx-auto text-sm sm:text-base">
          A comprehensive 29-week initiative structured into 5 strategic phases. Explore each phase to understand the complete transformation journey.
        </p>

        {/* Desktop: horizontal path */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-purple-500 to-red-500 animate-draw-line"
            />
          </div>

          <div className="relative z-10 flex justify-between px-[5%]">
            {journeyStations.map((station, i) => (
              <button
                key={station.id}
                onClick={() => handleStationClick(station.id)}
                className={`group flex flex-col items-center transition-all duration-500 cursor-pointer ${
                  visibleNodes.has(i)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Pulse ring */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full animate-pulse-ring"
                    style={{ backgroundColor: station.accentColor + '30' }}
                  />
                  {/* Node circle */}
                  <div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                      activeStation === station.id ? 'scale-110 shadow-xl ring-4 ring-offset-2' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${station.accentColor}15, ${station.accentColor}30)`,
                      border: `2px solid ${station.accentColor}`,
                      boxShadow: activeStation === station.id ? `0 0 0 4px ${station.accentColor}40` : undefined,
                    }}
                  >
                    <span className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                      {station.emoji}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: station.accentColor }}
                  >
                    Station {station.number}
                  </div>
                  <div className="text-sm font-bold text-slate-700 mt-1 group-hover:text-slate-900 transition-colors">
                    {station.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{station.timeline}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: vertical path */}
        <div className="md:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200">
            <div className="w-full bg-gradient-to-b from-teal-500 via-purple-500 to-red-500 animate-draw-line h-full" />
          </div>

          <div className="space-y-8">
            {journeyStations.map((station, i) => (
              <button
                key={station.id}
                onClick={() => handleStationClick(station.id)}
                className={`group relative flex items-center gap-4 text-left transition-all duration-500 cursor-pointer ${
                  visibleNodes.has(i)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                {/* Node */}
                <div
                  className="absolute -left-12 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${station.accentColor}20, ${station.accentColor}40)`,
                    border: `2px solid ${station.accentColor}`,
                  }}
                >
                  {station.emoji}
                </div>

                {/* Card */}
                <div className="bg-slate-50 rounded-xl p-4 group-hover:bg-white group-hover:shadow-md transition-all w-full">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: station.accentColor }}
                  >
                    Station {station.number} · {station.timeline}
                  </div>
                  <div className="text-base font-bold text-slate-700 mt-1">
                    {station.title}
                  </div>
                  <div className="text-sm text-slate-500">{station.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
