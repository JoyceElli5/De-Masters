'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '@/src/types';
import { getInitials } from '@/src/utils/helpers';

interface TestimonialsProps { testimonials: Testimonial[] }

const avatarColors = ['#C1121F', '#000033', '#0891b2', '#16a34a', '#d97706'];

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-2">
            What Our Community Says
          </p>
          <h2 className="text-4xl font-black text-brand-blue leading-tight">
            Voices of De-Masters
          </h2>
        </div>

        {/* Quote slide */}
        <div className="relative min-h-[200px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto mb-8 italic">
                &ldquo;{current.message}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base"
                  style={{ backgroundColor: avatarColors[active % avatarColors.length] }}
                >
                  {getInitials(current.name)}
                </div>
                <p className="font-bold text-brand-blue text-sm">{current.name}</p>
                <p className="text-gray-400 text-xs">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={[
                'rounded-full transition-all duration-300 cursor-pointer',
                i === active ? 'w-6 h-2 bg-brand-red' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
