'type client';

import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [goal, setGoal] = useState<'energy' | 'stamina' | 'complete'>('complete');
  const [duration, setDuration] = useState<number>(3);
  const checkoutUrl = 'https://www.treejammer.com/H65CJ35/BZ4JX2/';

  const getRecommendation = () => {
    if (duration === 1) return { name: 'Starter Kit (1 Month)', price: '$49.00' };
    if (duration >= 5) return { name: 'Peak Performance Kit (6 Bottles)', price: '$234.00' };
    return { name: 'Recommended Kit (3 Months)', price: '$135.00' };
  };

  const rec = getRecommendation();

  return (
    <section id="calculator" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Treatment Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Is the Ideal Kit For Your Goals?
            </h2>
            <p className="text-slate-400 text-sm">
              Answer quickly and discover the treatment plan with the highest satisfaction rate for your profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  1. What is your primary objective?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setGoal('energy')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      goal === 'energy'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Daily Energy
                  </button>
                  <button
                    onClick={() => setGoal('stamina')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      goal === 'stamina'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Endurance
                  </button>
                  <button
                    onClick={() => setGoal('complete')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      goal === 'complete'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Complete
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  2. Desired treatment duration:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setDuration(1)}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      duration === 1
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    1 Month
                  </button>
                  <button
                    onClick={() => setDuration(3)}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      duration === 3
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    3 Months (Ideal)
                  </button>
                  <button
                    onClick={() => setDuration(5)}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      duration === 5
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    6 Months (Max)
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="rounded-2xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-center space-y-4 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Personalized Recommendation</span>
                <h3 className="text-xl font-black text-white mt-1">{rec.name}</h3>
                <p className="text-xs text-slate-400 mt-2">
                  Ideal for stabilizing hormonal levels, maximizing benefits, and ensuring long-lasting results.
                </p>
                <div className="text-2xl font-black text-amber-400 my-4">{rec.price}</div>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 text-center text-sm"
              >
                <span>Claim This Recommendation</span>
                <ArrowRight className="w-4 h-4 inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
