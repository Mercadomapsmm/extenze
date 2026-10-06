'type client';

import React from 'react';
import { Leaf, Flame, Check } from 'lucide-react';

interface Ingredient {
  name: string;
  role: string;
  description: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    name: 'Tribulus Terrestris',
    role: 'Natural Testosterone & Vigor Booster',
    description: 'Traditional herb known for naturally supporting testosterone levels, enhancing libido, energy, and daily stamina.',
  },
  {
    name: 'Maca Root',
    role: 'Andean Root - Endurance & Energy',
    description: 'Ancient superfood rich in essential minerals and vitamins that combat physical and mental fatigue while promoting lasting endurance.',
  },
  {
    name: 'L-Arginine',
    role: 'High-Potency Vasodilator',
    description: 'Essential amino acid that improves blood circulation, optimizing nutrient delivery and peak physical performance.',
  },
  {
    name: 'Ginseng Extract',
    role: 'Adaptogen for Focus & Stamina',
    description: 'Supports oxidative stress reduction, boosts physical output, and revitalizes immune function and vitality.',
  },
  {
    name: 'Zinc & B-Vitamins',
    role: 'Essential Metabolic Cofactors',
    description: 'Key nutrients fundamental for protein synthesis, healthy hormonal balance, and optimal energy metabolism.',
  },
  {
    name: 'Natural Yohimbe',
    role: 'Circulation & Vigor Enhancer',
    description: 'Bioactive compound supporting peripheral circulation and boosting intensity during crucial moments.',
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <Leaf className="w-3.5 h-3.5 text-amber-400" />
            <span>Science & Nature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            100% Natural Formula with Handpicked Ingredients
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Extenze combines maximum purity botanical extracts with amino acids in scientifically tested ratios to guarantee efficacy without unwanted side effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <span className="text-xs font-semibold text-amber-400 block mb-3">{item.role}</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Standardized & Laboratory Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
