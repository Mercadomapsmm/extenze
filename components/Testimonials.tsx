'type client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  age: number;
  city: string;
  text: string;
  kit: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos M.',
    age: 42,
    city: 'Miami, FL',
    text: 'I was skeptical at first, but decided to try the 3-month kit. Within just a few weeks, I noticed a massive difference in my daily energy and confidence. Highly recommend!',
    kit: 'Recommended Kit (3 Months)',
    rating: 5,
  },
  {
    name: 'Robert S.',
    age: 51,
    city: 'Austin, TX',
    text: 'My partner and I noticed a complete game changer. More energy, physical stamina, and zero side effects. Fast and discreet shipping too.',
    kit: 'Peak Performance Kit',
    rating: 5,
  },
  {
    name: 'Marcus V.',
    age: 38,
    city: 'Chicago, IL',
    text: 'Exceptional product. Arrived right on schedule and the quality is outstanding. If you want to get your youthful vigor back, Extenze delivers.',
    kit: 'Starter Kit (1 Month)',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Real Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            What Our Customers Are Saying
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Thousands of men nationwide have transformed their routine and restored their self-confidence with Extenze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between relative shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Purchase &middot; {t.kit}</span>
                </div>
                <div className="font-bold text-white text-sm">
                  {t.name}, {t.age}
                </div>
                <div className="text-xs text-slate-500">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
