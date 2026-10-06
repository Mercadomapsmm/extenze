'type client';

import React from 'react';
import { Check, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  months: number;
  bottles: number;
  originalPrice: number;
  price: number;
  installment: string;
  discount: string;
  popular?: boolean;
  benefits: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 'kit-1',
    name: 'Starter Kit',
    subtitle: '1 Month Supply',
    months: 1,
    bottles: 1,
    originalPrice: 59.00,
    price: 49.00,
    installment: 'Save $10.00',
    discount: '17% OFF',
    benefits: ['1 Bottle of Extenze (60 caps)', 'Standard Shipping', '67-Day Guarantee'],
  },
  {
    id: 'kit-3',
    name: 'Recommended Kit',
    subtitle: '3 Months Supply',
    months: 3,
    bottles: 3,
    originalPrice: 177.00,
    price: 135.00,
    installment: 'Save $42.00',
    discount: '24% OFF',
    popular: true,
    benefits: ['3 Bottles of Extenze', 'Free Express Shipping', 'Free Male Vitality E-book', '67-Day Guarantee'],
  },
  {
    id: 'kit-5',
    name: 'Peak Performance Kit',
    subtitle: '6 Bottles Supply',
    months: 6,
    bottles: 6,
    originalPrice: 354.00,
    price: 234.00,
    installment: 'Save $120.00',
    discount: '34% OFF',
    benefits: ['6 Bottles of Extenze', 'Free Express Shipping', 'Priority VIP Support', 'Ironclad 67-Day Guarantee'],
  },
];

export default function ProductStore() {
  const checkoutUrl = 'https://www.treejammer.com/H65CJ35/BZ4JX2/';

  return (
    <section id="products" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Choose Your Package</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Official Extenze Kits with Special Discount
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select the ideal treatment for your goals. Larger packages offer greater savings and optimal long-term results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`relative rounded-2xl bg-slate-950 border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
                prod.popular
                  ? 'border-amber-500 shadow-2xl shadow-amber-500/10 ring-2 ring-amber-500/30 lg:-translate-y-2'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {prod.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{prod.name}</h3>
                    <p className="text-xs text-amber-400 font-medium mt-0.5">{prod.subtitle}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/20">
                    {prod.discount}
                  </span>
                </div>

                <div className="my-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-center">
                  <span className="text-slate-500 text-xs line-through block">Regular: ${prod.originalPrice.toFixed(2)}</span>
                  <div className="text-3xl sm:text-4xl font-black text-white my-1">
                    ${prod.price.toFixed(2)}
                  </div>
                  <span className="text-xs text-amber-400 font-semibold">{prod.installment}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {prod.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 text-center text-sm"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">67-Day Money-Back Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                If you do not experience noticeable improvements in energy and performance within 67 days, we will refund 100% of your investment with zero hassle.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 shrink-0">
            <Truck className="w-4 h-4" />
            <span>Fast & Discreet Shipping</span>
          </div>
        </div>

      </div>
    </section>
  );
}
