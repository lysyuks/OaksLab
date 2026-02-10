import { useEffect, useState } from 'react';

const BRAND = '#e90c54';

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 70%, #0f0f1a 100%)' }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-10 left-[10%] w-80 h-80 rounded-full blur-[120px]" style={{ backgroundColor: BRAND, opacity: 0.12 }} />
      <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full blur-[140px]" style={{ backgroundColor: '#6366f1', opacity: 0.08 }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ backgroundColor: BRAND, opacity: 0.05 }} />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${BRAND}40, transparent)` }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${BRAND}30, transparent)` }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ backgroundColor: `${BRAND}18`, border: `1px solid ${BRAND}40`, color: '#ff6b8a' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND }} />
          Product Strategy · 2026
        </div>

        {/* Title */}
        <h1
          className={`text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-white">Weight Loss Clinic</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(135deg, ${BRAND}, #ff6b8a, #ff8fa3)` }}
          >
            Intake Form Solution
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl font-light max-w-2xl mx-auto transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Strategic Product Roadmap — From Vision to Launch
        </p>

        {/* Description */}
        <p
          className={`mt-5 text-sm md:text-base font-light max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-[450ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          Patient intake forms are the first touchpoint in healthcare delivery. This strategic initiative transforms how healthcare providers collect patient information — creating a self-service platform that reduces setup time from 2 months to 2 days while ensuring clinical compliance and seamless integration with existing healthcare systems.
        </p>

        {/* Divider */}
        <div className={`mt-6 sm:mt-10 mb-6 sm:mb-10 flex justify-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div className="h-px w-32" style={{ background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)` }} />
        </div>

        {/* Stats row */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: '29', label: 'Week Timeline', icon: '📅' },
            { value: '5', label: 'Key Phases', icon: '🎯' },
            { value: '3', label: 'Pilot Clients', icon: '🚀' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-10 sm:mt-16 transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={() =>
              document
                .getElementById('journey')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex flex-col items-center gap-2 transition-colors cursor-pointer"
            style={{ color: 'rgba(255,255,255,0.35)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ff6b8a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
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
