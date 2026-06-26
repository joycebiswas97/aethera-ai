import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: "AI Vector Engine",
    description: "Ingest raw unstructured data (PDFs, system logs, telemetry) and map them automatically to vector embeddings with multi-model standardization. Keeps your data clean, indexed, and semantic.",
    badge: "Ingestion",
    icon: (
      <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M22.5 12a13.16 13.16 0 01-3 3.662m-9.5-3.662H3m0 0l3-3m-3 3l3 3" />
      </svg>
    ),
    bgGradient: "from-brand-accent/15 via-slate-900/40 to-slate-950/80",
    gridClass: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Agentic ETL Workflows",
    description: "Move past static Cron schedules. Stateful AI agents orchestrate, validate, and repair corrupt rows, resolving schema violations autonomously on live pipelines.",
    badge: "Automation",
    icon: (
      <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bgGradient: "from-brand-primary/15 via-slate-900/40 to-slate-950/80",
    gridClass: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Anomaly Isolation",
    description: "Instantly catch layout shifts, semantic deviations, and silent data corruption at the field-level using zero-shot isolation models.",
    badge: "Intelligence",
    icon: (
      <svg className="w-8 h-8 text-brand-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    bgGradient: "from-brand-violet/15 via-slate-900/40 to-slate-950/80",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Autonomous Mapping",
    description: "Map relational databases to custom endpoints. Adapts automatically to API and schema modifications without causing downtimes.",
    badge: "Adaptability",
    icon: (
      <svg className="w-8 h-8 text-brand-neonTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    bgGradient: "from-brand-neonTeal/15 via-slate-900/40 to-slate-950/80",
    gridClass: "md:col-span-1 md:row-span-1"
  }
];

export default function BentoAccordion() {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const hoveredIndexRef = useRef(null);
  const lastWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const isMobile = currentWidth < 768;
      const wasMobile = lastWidth.current < 768;

      // Lock context: transition hovered desktop index into mobile accordion active index
      if (isMobile && !wasMobile) {
        if (hoveredIndexRef.current !== null) {
          setActiveAccordionIndex(hoveredIndexRef.current);
        }
      }
      lastWidth.current = currentWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 rounded-full border border-brand-primary/20">
            Platform Capabilities
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Engineered for Extreme Scalability.
          </h2>
          <p className="mt-4 text-lg text-brand-textMuted font-light">
            Aethera AI orchestrates raw data ingestion, transformation, and structural validation instantly inside a sandboxed environment.
          </p>
        </div>

        {/* ========================================================
            DESKTOP LAYOUT: Bento Grid (Visible on md and above)
           ======================================================== */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feat, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                hoveredIndexRef.current = index;
              }}
              className={`glass-panel bg-gradient-to-br ${feat.bgGradient} rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out hover:border-slate-700/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/50 group ${feat.gridClass}`}
            >
              {/* Background Accent Grid */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

              {/* Card Top */}
              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-md group-hover:scale-105 transition-transform duration-200 ease-out">
                  {feat.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/20">
                  {feat.badge}
                </span>
              </div>

              {/* Conditional Visual element for tall row-span-2 Card */}
              {index === 1 && (
                <div className="flex-grow w-full flex items-center justify-center py-8 relative z-10">
                  <div className="w-full h-full min-h-[150px] rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                      <div className="flex flex-col gap-3 p-6 opacity-40">
                         <div className="h-2 w-1/3 bg-gray-500 rounded-full"></div>
                         <div className="h-2 w-3/4 bg-gray-500 rounded-full"></div>
                         <div className="h-2 w-1/2 bg-gray-500 rounded-full"></div>
                      </div>
                  </div>
                </div>
              )}

              {/* Card Bottom */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors duration-150">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm text-brand-textMuted font-light leading-relaxed max-w-xl group-hover:text-slate-300 transition-colors duration-200">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            MOBILE LAYOUT: Touch Accordion List (Visible on mobile/tablet)
           ======================================================== */}
        <div className="md:hidden space-y-4">
          {features.map((feat, index) => {
            const isOpen = activeAccordionIndex === index;
            return (
              <article
                key={index}
                className={`glass-panel rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-brand-primary/45 bg-slate-900/40' : 'bg-slate-900/20'
                }`}
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => setActiveAccordionIndex(isOpen ? -1 : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-100">
                        {feat.title}
                      </h3>
                      <span className="text-[9px] font-semibold text-brand-accent uppercase tracking-wider">
                        {feat.badge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Chevron Toggle Icon */}
                  <div className={`transform transition-transform duration-200 ease-out text-slate-400 ${isOpen ? 'rotate-180 text-brand-accent' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out overflow-hidden will-change-height"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-sm text-brand-textMuted font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
