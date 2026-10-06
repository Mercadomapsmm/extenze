'type client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onBuyNow: () => void;
}

export default function Navbar({ onNavigate, onBuyNow }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const checkoutUrl = 'https://www.treejammer.com/H65CJ35/BZ4JX2/';

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 font-black text-slate-950 text-xl tracking-tighter">
            EX
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-none">EXTENZE®</span>
            <span className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">Official Store</span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button onClick={() => onNavigate('products')} className="hover:text-amber-400 transition-colors">
            Kits & Pricing
          </button>
          <button onClick={() => onNavigate('benefits')} className="hover:text-amber-400 transition-colors">
            Benefits
          </button>
          <button onClick={() => onNavigate('ingredients')} className="hover:text-amber-400 transition-colors">
            Natural Formula
          </button>
          <button onClick={() => onNavigate('calculator')} className="hover:text-amber-400 transition-colors">
            Calculator
          </button>
          <button onClick={() => onNavigate('testimonials')} className="hover:text-amber-400 transition-colors">
            Reviews
          </button>
          <button onClick={() => onNavigate('faq')} className="hover:text-amber-400 transition-colors">
            FAQ
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
          >
            Buy Now
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 font-medium text-slate-300">
            <button onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">Kits & Pricing</button>
            <button onClick={() => { onNavigate('benefits'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">Benefits</button>
            <button onClick={() => { onNavigate('ingredients'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">Natural Formula</button>
            <button onClick={() => { onNavigate('calculator'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">Calculator</button>
            <button onClick={() => { onNavigate('testimonials'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">Reviews</button>
            <button onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-amber-400">FAQ</button>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg text-center"
            >
              Buy Now with Discount
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
