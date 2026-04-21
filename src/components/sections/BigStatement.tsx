'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BigStatement() {
  return (
    <section className="relative py-32 px-6 bg-[#F8F9FA] overflow-hidden">
      {/* Very faint watermark — legible on light background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[18vw] font-serif font-bold text-slate-200 leading-none select-none pointer-events-none whitespace-nowrap"
      >
        NURTURE
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-10 h-px bg-accent mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5"
        >
          Our Promise to Every Student
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-[1.08] tracking-tight mb-6"
        >
          We Nurture
          <br />
          <span className="italic">Future Leaders.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 text-base leading-relaxed mb-10 max-w-lg mx-auto"
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
            className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-lg text-sm hover:bg-accent-dark transition-all duration-200"
          >
            Begin the Journey
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
