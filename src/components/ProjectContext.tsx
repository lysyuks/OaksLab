import { useEffect, useRef, useState } from 'react';

export default function ProjectContext() {
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
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Project Context</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Why Weight Loss Clinic is building this — and what changes for healthcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Current State */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.05))',
              border: '1px solid rgba(239,68,68,0.2)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-xl">
                ⚠️
              </div>
              <h3 className="text-lg font-bold text-red-300">Current State</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Using Typeform / Jotform as third-party intake form builders.
            </p>
            <ul className="space-y-2.5">
              {[
                '4–6 week setup time per client',
                'Clients must learn clinical protocols',
                'Complex integration & testing cycles',
                'No end-to-end platform ownership',
                'Limited customization flexibility',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-red-400 mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Goal */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.05))',
              border: '1px solid rgba(20,184,166,0.3)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-xl">
                🎯
              </div>
              <h3 className="text-lg font-bold text-teal-300">The Goal</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Complete end-to-end telehealth solution with full platform ownership.
            </p>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-slate-200 italic leading-relaxed">
                "This is the last piece missing in our end-to-end flow. Configuration always took 4–6 weeks on
                Typeform/Jotform because every client needed to learn the Clinical Protocol and the
                integration/testing always took a lot of effort."
              </p>
            </div>
          </div>

          {/* Future State */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))',
              border: '1px solid rgba(34,197,94,0.2)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">
                🚀
              </div>
              <h3 className="text-lg font-bold text-green-300">Future State</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Self-service intake form builder with built-in clinical intelligence.
            </p>
            <ul className="space-y-2.5">
              {[
                'Self-service setup in days, not months',
                'Protocol-first: clinical rules as config',
                'Pre-built platform integrations',
                'Automated compliance validation',
                'Full e2e platform ownership',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-green-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transformation arrow on desktop */}
        <div
          className={`hidden md:flex justify-center mt-12 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="flex items-center gap-6 bg-white/5 rounded-full px-8 py-3 border border-white/10">
            <span className="text-red-400 font-semibold text-sm">4–6 Weeks</span>
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-green-400 font-semibold text-sm">Days</span>
            <span className="text-slate-500 mx-2">|</span>
            <span className="text-red-400 font-semibold text-sm">Manual Config</span>
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-green-400 font-semibold text-sm">Protocol-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
