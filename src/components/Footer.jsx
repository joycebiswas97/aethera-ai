import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Information */}
        <div className="md:col-span-5 flex flex-col items-start">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display">
              AETHERA<span className="text-brand-accent">.AI</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-brand-textMuted font-light max-w-sm leading-relaxed">
            The next-generation data automation orchestrator. Powering sub-second ETL flows, structural repairs, and automatic vector database synchronization.
          </p>
          <span className="mt-6 text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Aethera Technologies, Inc. All rights reserved.
          </span>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-display">Platform</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Capabilities</a></li>
            <li><a href="#pricing" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Pricing Tiers</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Agent Console</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Releases</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-display">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Documentation</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">API Reference</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">System Status</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Support Desk</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-display">Legal & Trust</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">SOC-2 Attestation</a></li>
            <li><a href="#" className="text-sm text-brand-textMuted hover:text-white transition-colors duration-150">Data Processing (DPA)</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
