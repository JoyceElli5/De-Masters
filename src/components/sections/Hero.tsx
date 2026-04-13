'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            De-Masters Academy
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-8 tracking-wide">
            Excellence • Discipline • Innovation
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A world-class learning institution committed to shaping the next
            generation of leaders, innovators, and changemakers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-brand-red text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-brand-red-dark transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white hover:text-brand-blue transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-white/70 rounded-full"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
