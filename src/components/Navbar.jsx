import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Sticky Glass Panel wrapper */}
      <div className="w-full bg-slate-950/65 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-primary flex items-center justify-center shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform duration-200 ease-out">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              AETHERA<span className="text-brand-accent">.AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 ease-out">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 ease-out">Pricing</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 ease-out">Documentation</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 ease-out">
              Sign In
            </a>
            <a href="#pricing" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-violet hover:from-brand-primary/90 hover:to-brand-violet/90 transition-all duration-200 ease-out shadow-lg shadow-brand-primary/10 active:scale-95 cursor-pointer">
              Launch Platform
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth template height transition) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-slate-950 border-b border-slate-900 will-change-height`}
        style={{ maxHeight: isOpen ? '240px' : '0px' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-white transition-colors duration-150"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-white transition-colors duration-150"
          >
            Pricing
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-white transition-colors duration-150"
          >
            Documentation
          </a>
          <div className="h-px bg-slate-800" />
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-slate-300">
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm font-semibold text-white bg-brand-primary rounded-full"
            >
              Launch Platform
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
