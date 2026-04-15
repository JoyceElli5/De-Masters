'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Layered overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-blue/85 via-black/65 to-brand-blue/50" />
      {/* Red accent bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent z-20" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-6 bg-brand-red/12 px-4 py-2 rounded-full border border-brand-red/25"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 tracking-tight"
          >
            De-Masters{' '}
            <span className="text-brand-red">Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-4 tracking-[0.15em] font-light"
          >
            Excellence &bull; Discipline &bull; Innovation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A world-class learning institution committed to shaping the next
            generation of leaders, innovators, and changemakers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/35 w-full sm:w-auto justify-center"
              style={{ transition: 'all 0.3s var(--bounce)' }}
            >
              Apply Now
              <ArrowRight01Icon
                size={18}
                className="transition-transform group-hover:translate-x-1 duration-200"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1.5 text-white/40">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent rounded-full overflow-hidden relative">
            <motion.div
              className="w-full h-4 bg-brand-red rounded-full absolute top-0"
              animate={{ y: ['0%', '160%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
