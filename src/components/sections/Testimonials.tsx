'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '@/src/types';
import { getInitials } from '@/src/utils/helpers';

interface TestimonialsProps { testimonials: Testimonial[] }

const avatarColors = ['#002366', '#D6001C', '#0891b2', '#16a34a', '#d97706'];

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 30 : -30 }),
  center: { opacity: 1, x: 0 },
  exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -30 : 30 }),
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDirection(1);
      setActive((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearTimeout(t);
  }, [active, testimonials.length]);

  function goTo(i: number) {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }

  const current = testimonials[active];

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            What Our Community Says
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy">
            Voices of De-Masters
          </h2>
        </div>

        {/* Slide */}
        <div className="relative min-h-[180px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>

              {/* Quote — serif italic */}
              <blockquote className="font-serif text-xl md:text-2xl italic text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8">
                &ldquo;{current.message}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: avatarColors[active % avatarColors.length] }}
                >
                  {getInitials(current.name)}
                </div>
                <p className="font-semibold text-navy text-sm">{current.name}</p>
                <p className="text-slate-400 text-xs">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={[
                'rounded-full transition-all duration-300 cursor-pointer',
                i === active ? 'w-5 h-2 bg-accent' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
