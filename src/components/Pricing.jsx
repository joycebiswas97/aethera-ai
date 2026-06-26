import React, { useEffect, useRef } from 'react';
import { pricingMatrix } from '../data/pricingMatrix';

export default function Pricing() {
  const billingToggleRef = useRef(null);
  const currencySelectRef = useRef(null);

  // Individual DOM element refs for price, symbol, and billing details
  const priceRefs = useRef({
    starter: null,
    professional: null,
    enterprise: null,
  });

  const symbolRefs = useRef({
    starter: null,
    professional: null,
    enterprise: null,
  });

  const billingTextRefs = useRef({
    starter: null,
    professional: null,
    enterprise: null,
  });

  useEffect(() => {
    const updatePrices = () => {
      const isAnnual = billingToggleRef.current?.checked ?? false;
      const currencyKey = currencySelectRef.current?.value ?? 'USD';
      const currency = pricingMatrix.currencies[currencyKey];
      const discount = isAnnual
        ? pricingMatrix.billing.annual.discount
        : pricingMatrix.billing.monthly.discount;

      Object.keys(pricingMatrix.tiers).forEach((tierKey) => {
        const tier = pricingMatrix.tiers[tierKey];
        const monthlyRate = Math.round(tier.base * currency.rate * discount);

        // Update Price Numeric Value
        if (priceRefs.current[tierKey]) {
          priceRefs.current[tierKey].textContent = monthlyRate.toLocaleString();
        }
        // Update Currency Symbol
        if (symbolRefs.current[tierKey]) {
          symbolRefs.current[tierKey].textContent = currency.symbol;
        }
        // Update Sub-text for billing period
        if (billingTextRefs.current[tierKey]) {
          if (isAnnual) {
            const annualTotal = Math.round(tier.base * currency.rate * 12 * discount);
            billingTextRefs.current[tierKey].textContent = `Billed annually (${currency.symbol}${annualTotal.toLocaleString()}/yr)`;
          } else {
            billingTextRefs.current[tierKey].textContent = 'Billed monthly';
          }
        }
      });
    };

    // Run immediately on mount to initialize UI values
    updatePrices();

    const toggleNode = billingToggleRef.current;
    const selectNode = currencySelectRef.current;

    if (toggleNode) toggleNode.addEventListener('change', updatePrices);
    if (selectNode) selectNode.addEventListener('change', updatePrices);

    return () => {
      if (toggleNode) toggleNode.removeEventListener('change', updatePrices);
      if (selectNode) selectNode.removeEventListener('change', updatePrices);
    };
  }, []);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-radial-gradient">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
            Fair & Flexible Pricing
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Scale Operations. Lower Costs.
          </h2>
          <p className="mt-4 text-lg text-brand-textMuted font-light">
            Choose a plan tailored to your data throughput. All plans include state-of-the-art vector mapping engines and pipeline isolation.
          </p>
        </div>

        {/* Localized Switcher Controls (Isolated from component re-renders) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in">
          
          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-4 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
            <span className="text-sm font-medium text-slate-300 pl-3">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                ref={billingToggleRef}
                type="checkbox"
                className="sr-only peer custom-checkbox"
                id="billing-period-toggle"
              />
              <div className="w-11 h-6 bg-slate-800 rounded-full transition-colors duration-200 ease-out peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-accent/30 peer-checked:bg-brand-primary" />
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-out transform peer-checked:translate-x-5" />
            </label>
            <span className="text-sm font-medium text-slate-300 pr-3 flex items-center gap-1.5">
              Annual 
              <span className="text-[10px] font-bold text-brand-accent bg-brand-accent/10 px-1.5 py-0.5 rounded border border-brand-accent/20">
                -20%
              </span>
            </span>
          </div>

          {/* Currency Dropdown Selector */}
          <div className="relative">
            <select
              ref={currencySelectRef}
              id="currency-selector"
              className="appearance-none bg-slate-900/80 text-sm text-slate-200 font-medium px-4 py-2.5 pr-10 rounded-full border border-slate-800 hover:border-slate-700 transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-brand-accent/40 cursor-pointer"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Starter */}
          <article className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ease-in-out relative group">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-150">
                  {pricingMatrix.tiers.starter.name}
                </h3>
                <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">
                  {pricingMatrix.tiers.starter.description}
                </p>
              </div>

              {/* Dynamic Price Display */}
              <div className="flex items-baseline gap-1 my-6 font-display">
                <span
                  ref={(el) => (symbolRefs.current.starter = el)}
                  className="text-2xl font-semibold text-slate-300"
                />
                <span
                  ref={(el) => (priceRefs.current.starter = el)}
                  className="text-5xl font-bold tracking-tight text-white"
                />
                <span className="text-sm font-medium text-brand-textMuted ml-1">/mo</span>
              </div>
              <p
                ref={(el) => (billingTextRefs.current.starter = el)}
                className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6"
              />

              <div className="h-px bg-slate-800/80 my-6" />

              <ul className="space-y-4">
                {pricingMatrix.tiers.starter.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 ease-out cursor-pointer active:scale-98">
                Deploy Agent
              </button>
            </div>
          </article>

          {/* Card 2: Professional (Popular) */}
          <article className="glass-panel rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ease-in-out relative border-brand-primary/40 bg-slate-900/60 shadow-[0_0_40px_rgba(99,102,241,0.15)] group animate-glow-pulse">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-brand-primary to-brand-violet rounded-full shadow-lg border border-brand-primary/30">
              Popular Choice
            </span>
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-150">
                  {pricingMatrix.tiers.professional.name}
                </h3>
                <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">
                  {pricingMatrix.tiers.professional.description}
                </p>
              </div>

              {/* Dynamic Price Display */}
              <div className="flex items-baseline gap-1 my-6 font-display">
                <span
                  ref={(el) => (symbolRefs.current.professional = el)}
                  className="text-2xl font-semibold text-slate-300"
                />
                <span
                  ref={(el) => (priceRefs.current.professional = el)}
                  className="text-5xl font-bold tracking-tight text-white"
                />
                <span className="text-sm font-medium text-brand-textMuted ml-1">/mo</span>
              </div>
              <p
                ref={(el) => (billingTextRefs.current.professional = el)}
                className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6"
              />

              <div className="h-px bg-slate-800/80 my-6" />

              <ul className="space-y-4">
                {pricingMatrix.tiers.professional.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-primary to-brand-violet hover:from-brand-primary/90 hover:to-brand-violet/90 transition-all duration-200 ease-out shadow-md shadow-brand-primary/20 cursor-pointer active:scale-98">
                Instantiate Architect
              </button>
            </div>
          </article>

          {/* Card 3: Enterprise */}
          <article className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ease-in-out relative group">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-150">
                  {pricingMatrix.tiers.enterprise.name}
                </h3>
                <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">
                  {pricingMatrix.tiers.enterprise.description}
                </p>
              </div>

              {/* Dynamic Price Display */}
              <div className="flex items-baseline gap-1 my-6 font-display">
                <span
                  ref={(el) => (symbolRefs.current.enterprise = el)}
                  className="text-2xl font-semibold text-slate-300"
                />
                <span
                  ref={(el) => (priceRefs.current.enterprise = el)}
                  className="text-5xl font-bold tracking-tight text-white"
                />
                <span className="text-sm font-medium text-brand-textMuted ml-1">/mo</span>
              </div>
              <p
                ref={(el) => (billingTextRefs.current.enterprise = el)}
                className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6"
              />

              <div className="h-px bg-slate-800/80 my-6" />

              <ul className="space-y-4">
                {pricingMatrix.tiers.enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 ease-out cursor-pointer active:scale-98">
                Initiate Core Provision
              </button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
