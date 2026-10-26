'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* Scroll to just below the hero, leaving room for the fixed navbar
   (which loses 16px of padding once the page has scrolled) */
function scrollPastHero(e: React.MouseEvent<HTMLButtonElement>) {
  const hero = e.currentTarget.closest('section');
  if (!hero) return;
  const navHeight = Math.max(0, (document.querySelector('header')?.offsetHeight ?? 0) - 16);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: hero.offsetTop + hero.offsetHeight - navHeight, behavior: reduce ? 'auto' : 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        preload="metadata"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navy overlay, heavier on the left where the text sits */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/60 text-sm mb-5">Accra, Ghana · Since 2009</p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
            De-Masters
            <br />
            <span className="italic text-white/90">Academy</span>
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-md">
            Early Childhood to Senior Secondary. Trust and hard work, every day.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-dark transition-colors duration-200"
            >
              Apply Now
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5 duration-200" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border border-white/35 text-white font-medium px-7 py-3 rounded-lg text-sm hover:border-white hover:bg-white/10 transition-colors duration-200"
            >
              Our Programmes
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollPastHero}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-11 h-11 text-white/80 hover:text-white transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <ChevronDown size={28} strokeWidth={1.75} />
      </motion.button>
    </section>
  );
}
