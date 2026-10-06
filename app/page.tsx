'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductStore from '@/components/ProductStore';
import BenefitsSection from '@/components/BenefitsSection';
import IngredientsSection from '@/components/IngredientsSection';
import RoiCalculator from '@/components/RoiCalculator';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Page() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyNow = () => {
    window.open('https://www.treejammer.com/H65CJ35/BZ4JX2/', '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar
        onNavigate={handleNavigate}
        onBuyNow={handleBuyNow}
      />

      <Hero
        onExploreProducts={() => handleNavigate('products')}
      />

      <ProductStore />

      <BenefitsSection />

      <IngredientsSection />

      <RoiCalculator />

      <Testimonials />

      <FaqSection />

      <Footer />
    </main>
  );
}
