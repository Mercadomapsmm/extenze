'type client';

import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-black text-slate-950 text-xl tracking-tighter">
                EX
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block leading-none">EXTENZE®</span>
                <span className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">Official Store</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              The leading supplement for male performance, energy, and vitality. Engineered with rigorous quality standards and 100% natural botanical extracts.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Kits & Pricing</a></li>
              <li><a href="#benefits" className="hover:text-amber-400 transition-colors">Benefits</a></li>
              <li><a href="#ingredients" className="hover:text-amber-400 transition-colors">Natural Formula</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Security & Privacy</h5>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Secure & Encrypted Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Discreet Packaging Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 Extenze Official Store. All rights reserved.</p>
          <p className="max-w-2xl mx-auto text-[11px] text-slate-600">
            * Results may vary from person to person. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
