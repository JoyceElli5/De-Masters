'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function BigStatement() {
  return (
    <section className="relative py-32 px-6 bg-brand-blue overflow-hidden">
      {/* Faded background word */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none whitespace-nowrap"
      >
        NURTURE
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-12 h-0.5 bg-brand-red mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5"
        >
          Our Promise to Every Student
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          We Nurture
          <br />
          <span className="text-brand-red">Future Leaders.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Every child who walks through our gates leaves with more than a
          certificate — they leave with character, confidence, and the capacity
          to change the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/admissions"
            className="group inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30 transition-all duration-300"
          >
            Begin the Journey
            <ArrowRight01Icon size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
