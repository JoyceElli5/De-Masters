'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Single clean overlay — dark left, transparent right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent" />

      {/* Content — left aligned, max half the screen */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-5 h-px bg-brand-red inline-block" />
            Est. 2009 · Accra, Ghana
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
          >
            De-Masters
            <br />
            <span className="text-brand-red">Academy</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-md"
          >
            Shaping Africa&apos;s brightest minds through world-class academics,
            strong values, and boundless opportunity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30 transition-all duration-300"
            >
              Apply Now
              <ArrowRight01Icon size={16} className="transition-transform group-hover:translate-x-1 duration-200" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Explore School
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll dot */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-brand-red"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
