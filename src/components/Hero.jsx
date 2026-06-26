import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      
      {/* Dynamic Background Glowing Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[130px] opacity-75 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] opacity-75 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-6 flex flex-col text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/25">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping" />
              Engine v4.0 Active
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display animate-slide-up">
            Automate Your Data Pipelines with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-primary to-brand-violet">
              Agentic AI.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-brand-textMuted font-light leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up [animation-delay:100ms]">
            Ingest raw databases, parse schema layouts, clean exceptions, and index vector embeddings on an isolated agent-driven compute node. Zero cron jobs, zero downtime.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up [animation-delay:200ms]">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-accent to-brand-neonTeal hover:from-brand-accent/90 hover:to-brand-neonTeal/90 transition-all duration-200 ease-out shadow-lg shadow-brand-accent/10 active:scale-97 text-center cursor-pointer"
            >
              Deploy Live Pipeline
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 ease-out text-center cursor-pointer active:scale-97"
            >
              View Capabilities
            </a>
          </div>

          {/* Proof Badges */}
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60 animate-fade-in [animation-delay:300ms]">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg font-display">99.98%</span>
              <span className="text-xs text-brand-textMuted">Pipeline Cleanliness</span>
            </div>
            <div className="w-px h-6 bg-slate-900 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg font-display">Sub-2m</span>
              <span className="text-xs text-brand-textMuted">Latent Sync Delay</span>
            </div>
            <div className="w-px h-6 bg-slate-900 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg font-display">SOC-2</span>
              <span className="text-xs text-brand-textMuted">Certified Security</span>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Interactive Pipeline SVG Visualizer */}
        <div className="lg:col-span-6 animate-fade-in [animation-delay:325ms] relative">
          <div className="glass-panel rounded-3xl p-6 relative overflow-hidden aspect-[4/3] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5">
            
            {/* Visualizer Header */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-xs font-mono text-slate-500 ml-2">aethera-core-active-node</span>
              </div>
              <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                1,420 events/sec
              </span>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                {/* SVG Definitions */}
                <defs>
                  <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  
                  {/* Flow animation helper path */}
                  <style>
                    {`
                      @keyframes dashflow {
                        to {
                          stroke-dashoffset: -60;
                        }
                      }
                      .flow-path {
                        stroke-dasharray: 8, 12;
                        animation: dashflow 3s linear infinite;
                      }
                      @keyframes pulseNode {
                        0%, 100% { transform: scale(1); opacity: 0.8; }
                        50% { transform: scale(1.15); opacity: 1; }
                      }
                      .pulse-element {
                        transform-origin: center;
                        animation: pulseNode 2.5s infinite ease-in-out;
                      }
                    `}
                  </style>
                </defs>

                {/* Connection lines from Left Sources to Center Agent */}
                <path d="M70 70 C 150 70, 150 150, 240 150" stroke="#1e293b" strokeWidth="2" />
                <path d="M70 150 H 240" stroke="#1e293b" strokeWidth="2" />
                <path d="M70 230 C 150 230, 150 150, 240 150" stroke="#1e293b" strokeWidth="2" />

                {/* Active Animated flow overlays */}
                <path d="M70 70 C 150 70, 150 150, 240 150" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" />
                <path d="M70 150 H 240" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" style={{ animationDuration: '2s' }} />
                <path d="M70 230 C 150 230, 150 150, 240 150" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" style={{ animationDuration: '4s' }} />

                {/* Connection lines from Center Agent to Right Destinations */}
                <path d="M240 150 C 330 150, 330 70, 410 70" stroke="#1e293b" strokeWidth="2" />
                <path d="M240 150 H 410" stroke="#1e293b" strokeWidth="2" />
                <path d="M240 150 C 330 150, 330 230, 410 230" stroke="#1e293b" strokeWidth="2" />

                {/* Active Animated flow overlays to destinations */}
                <path d="M240 150 C 330 150, 330 70, 410 70" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" style={{ animationDuration: '2.5s' }} />
                <path d="M240 150 H 410" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" style={{ animationDuration: '3.5s' }} />
                <path d="M240 150 C 330 150, 330 230, 410 230" stroke="url(#glow-grad)" strokeWidth="2" className="flow-path" style={{ animationDuration: '1.8s' }} />

                {/* Left Source Nodes */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">CSV</text>
                  <circle cx="30" cy="22" r="6" fill="#06b6d4" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#06b6d4" />
                </g>

                <g transform="translate(40, 120)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">PostgreSQL</text>
                  <circle cx="30" cy="22" r="6" fill="#6366f1" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#6366f1" />
                </g>

                <g transform="translate(40, 200)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">REST API</text>
                  <circle cx="30" cy="22" r="6" fill="#14b8a6" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#14b8a6" />
                </g>

                {/* Center Processing Agent Node */}
                <g transform="translate(210, 120)">
                  <rect x="0" y="0" width="60" height="60" rx="30" fill="url(#glow-grad)" opacity="0.15" className="pulse-element" />
                  <rect x="0" y="0" width="60" height="60" rx="30" fill="#0f172a" stroke="url(#glow-grad)" strokeWidth="2.5" />
                  {/* Central Ring Icon */}
                  <circle cx="30" cy="30" r="12" stroke="url(#glow-grad)" strokeWidth="2" strokeDasharray="6, 4" className="flow-path" style={{ animationDuration: '8s' }} />
                  <circle cx="30" cy="30" r="4" fill="#06b6d4" />
                </g>
                <text x="240" y="195" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">AETHERA</text>
                <text x="240" y="207" fill="#06b6d4" fontSize="8" fontWeight="bold" tracking="1" textAnchor="middle">CORE NODE</text>

                {/* Right Target Nodes */}
                <g transform="translate(380, 40)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">Pinecone</text>
                  <circle cx="30" cy="22" r="6" fill="#ec4899" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#ec4899" />
                </g>

                <g transform="translate(380, 120)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">Qdrant</text>
                  <circle cx="30" cy="22" r="6" fill="#a855f7" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#a855f7" />
                </g>

                <g transform="translate(380, 200)">
                  <rect x="0" y="0" width="60" height="60" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="30" y="42" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">pgvector</text>
                  <circle cx="30" cy="22" r="6" fill="#3b82f6" opacity="0.3" />
                  <circle cx="30" cy="22" r="3" fill="#3b82f6" />
                </g>
              </svg>
            </div>

            {/* Visualizer Footer Stats */}
            <div className="flex items-center justify-between border-t border-slate-900 pt-4 mt-4 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                ETL Pipeline Healthy
              </span>
              <span>184.2 ms latency</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
