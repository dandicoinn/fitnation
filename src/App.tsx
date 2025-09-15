import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useScrollEffect } from './hooks/useScrollEffect';

function App() {
  useScrollEffect();

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;