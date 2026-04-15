'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-brand-red">
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase mb-5">
            Begin Your Journey
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Join De-Masters
            <br />
            Academy Today.
          </h2>

          <p className="text-white/65 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Give your child the best start in life. Apply today and become part
            of our thriving community of learners, thinkers, and achievers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 bg-white text-brand-red font-bold px-9 py-3.5 rounded-xl text-sm hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
            >
              Start Application
              <ArrowRight01Icon size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" color="#C1121F" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-bold px-9 py-3.5 rounded-xl text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/20 rounded-2xl overflow-hidden"
        >
          {[
            { value: '15+',    label: 'Years of Excellence' },
            { value: '1,200+', label: 'Students Enrolled'   },
            { value: '95%',    label: 'Exam Pass Rate'       },
            { value: '50+',    label: 'Awards Won'           },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/[0.12] py-6 px-4 text-center">
              <p className="text-2xl font-black text-white mb-1">{value}</p>
              <p className="text-white/65 text-xs font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
