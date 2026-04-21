'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

      {/* Navy gradient overlay — heavy left, fades right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-accent inline-block" />
            Est. 2009 · Accra, Ghana
          </motion.p>

          {/* Serif headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            De-Masters
            <br />
            <span className="italic text-white/90">Academy</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white/60 text-base leading-relaxed mb-10 max-w-md"
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
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-dark transition-all duration-200"
            >
              Apply Now
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5 duration-200" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border border-white/35 text-white font-medium px-7 py-3 rounded-lg text-sm hover:border-white hover:bg-white/8 transition-all duration-200"
            >
              Explore School
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
