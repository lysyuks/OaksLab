import { useEffect, useState } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Project Roadmap 2025
        </div>

        {/* Title */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-white">OpenLoop Health</span>
          <br />
          <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
            Funnel Builder
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          From Vision to Launch — Your Roadmap
        </p>

        {/* Stats row */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: '50', label: 'Day Timeline' },
            { value: '5', label: 'Key Phases' },
            { value: '3', label: 'Pilot Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={() =>
              document
                .getElementById('journey')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex flex-col items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Explore the Journey</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
