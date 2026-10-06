'type client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How should I take Extenze?',
    answer: 'It is recommended to take 2 capsules daily, preferably before your main meal or as advised by a healthcare professional, with a full glass of water.',
  },
  {
    question: 'Does Extenze have any side effects?',
    answer: 'No. Formulated with 100% natural, rigorously tested ingredients, Extenze is completely safe for daily use with no known side effects.',
  },
  {
    question: 'How does shipping work and is it discreet?',
    answer: 'Yes, shipping is 100% discreet in plain packaging with no mention of the product on the outside. Orders typically arrive within 3 to 7 business days.',
  },
  {
    question: 'Is Extenze approved and certified?',
    answer: 'Yes, Extenze is manufactured in FDA-registered facilities under strict GMP (Good Manufacturing Practice) standards.',
  },
  {
    question: 'How does the 67-day guarantee work?',
    answer: 'If for any reason you are not 100% satisfied with your results within 67 days of purchase, simply contact customer support for a full refund.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Find answers to common questions about shipping, usage, safety, and our guarantee.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-amber-400 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
