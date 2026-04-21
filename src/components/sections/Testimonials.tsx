'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { Testimonial } from '@/src/types';
import { getInitials } from '@/src/utils/helpers';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  const current = testimonials[active];

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const interval = window.setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section
      className="py-16 px-6 bg-brand-blue text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
          Voices of Our Community
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What People Say
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="text-brand-red text-6xl leading-none mb-4">&ldquo;</div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-8">
              {current.message}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                {getInitials(current.name)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-white/60 text-sm">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === active ? 'bg-brand-red' : 'bg-white/30'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </button>
        </div>
        <p className="mt-5 text-xs text-white/45 tracking-wide">
          Auto-rotates every few seconds (pause on hover)
        </p>
      </div>
    </section>
  );
}
