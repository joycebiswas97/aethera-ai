import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoAccordion from './components/BentoAccordion';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-brand-accent/30 selection:text-brand-accent">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <BentoAccordion />
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
