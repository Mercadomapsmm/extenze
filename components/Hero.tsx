'type client';

import React from 'react';
import { ShieldCheck, Award, Truck, CheckCircle, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
}

export default function Hero({ onExploreProducts }: HeroProps) {
  const checkoutUrl = 'https://www.treejammer.com/H65CJ35/BZ4JX2/';

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>#1 Rated Male Performance & Vitality Supplement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] max-w-2xl mx-auto lg:mx-0">
              Peak Performance, Stamina & <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Ultimate Confidence</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced 100% natural formula engineered with state-of-the-art botanical extracts to boost your daily energy, physical vigor, and unwavering performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group text-center"
              >
                <span>Claim Your Discount Kit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View All Pricing Kits</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-slate-300 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>100% Natural Formula</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-xs font-medium">
                <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Fast Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-xs font-medium">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>67-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-xs font-medium">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Clinically Tested</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-amber-300/10 blur-xl opacity-75" />
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-center">
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-extrabold text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase">
                  Best Seller
                </div>

                <div className="my-6 relative flex justify-center">
                  <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 border border-amber-500/40 p-4 shadow-2xl flex flex-col items-center justify-between relative overflow-hidden group">
                    {/* Bottle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-50" />
                    <div className="w-full flex justify-between items-center z-10 text-[10px] text-amber-400 font-mono tracking-widest">
                      <span>EXTENZE</span>
                      <span>60 CAPS</span>
                    </div>
                    
                    <div className="z-10 py-4">
                      <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 shadow-xl flex items-center justify-center text-slate-950 font-black text-sm tracking-tighter border border-amber-200 px-2 text-center">
                        Extenze
                      </div>
                      <span className="block text-xs font-bold text-white mt-3 tracking-wide">PREMIUM FORMULA</span>
                    </div>

                    <div className="w-full z-10 text-[10px] text-slate-400 border-t border-slate-800 pt-2 flex justify-between">
                      <span>Rapid Absorption</span>
                      <span className="text-amber-400 font-bold">100% Safe</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Extenze Original - 60 Capsules</h3>
                <p className="text-xs text-slate-400 mb-6">Advanced dietary supplement for peak performance and vitality support.</p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-slate-500 line-through text-sm">$59.00</span>
                  <span className="text-2xl font-black text-amber-400">$49.00</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">Save $10.00</span>
                </div>

                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 text-center text-sm"
                >
                  Select This Kit
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
