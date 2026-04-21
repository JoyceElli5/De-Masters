'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '15+',    label: 'Years of Excellence' },
  { value: '1,200+', label: 'Students Enrolled'   },
  { value: '95%',    label: 'Exam Pass Rate'       },
  { value: '50+',    label: 'Awards Won'           },
];

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Begin Your Journey
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-5">
            Join De-Masters
            <br />
            <span className="italic">Academy Today.</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Give your child the best start in life. Apply today and become part
            of our thriving community of learners, thinkers, and achievers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-lg text-sm hover:bg-accent-dark transition-all duration-200"
            >
              Start Application
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-navy/20 text-navy font-medium px-8 py-3 rounded-lg text-sm hover:border-navy hover:bg-navy hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 border border-slate-100 rounded-xl overflow-hidden"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="py-7 px-4 text-center bg-[#F8F9FA]">
              <p className="font-serif text-2xl font-bold text-navy mb-1">{value}</p>
              <p className="text-slate-400 text-xs font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
