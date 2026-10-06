'type client';

import React from 'react';
import { Zap, ShieldCheck, BatteryCharging, Target, TrendingUp } from 'lucide-react';

const BENEFITS = [
  {
    icon: BatteryCharging,
    title: 'Daily Energy & Stamina',
    description: 'Eliminate chronic fatigue and feel revitalized from the moment you wake up until the end of your day.',
  },
  {
    icon: Target,
    title: 'Unwavering Performance',
    description: 'Enhanced endurance and physical control, bringing unmatched confidence and intensity to every moment.',
  },
  {
    icon: Zap,
    title: 'Revitalized Drive',
    description: 'Naturally stimulates your body’s responsiveness and desire, bringing back peak vitality.',
  },
  {
    icon: ShieldCheck,
    title: '100% Safe & Side-Effect Free',
    description: 'Formulated with premium natural botanical extracts without harsh synthetic compounds or contraindications.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Extenze is the #1 Choice
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered to meet the highest quality standards, Extenze transforms your daily routine and restores your peak confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 hover:border-amber-500/40 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 from-amber-500/5 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
