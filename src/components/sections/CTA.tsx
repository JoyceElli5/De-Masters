'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-brand-red" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px, 50px 50px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute -left-12 -bottom-12 w-72 h-72 rounded-full bg-brand-blue/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
          >
            <p className="text-white/70 font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Begin Your Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ready to Join{' '}
              <span className="underline decoration-white/40 underline-offset-4">
                De-Masters?
              </span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Give your child the best start in life. Apply today and become part
              of our thriving community of learners, thinkers, and achievers.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-4 rounded-2xl text-base hover:bg-gray-50 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
                style={{ transition: 'all 0.3s var(--bounce)' }}
              >
                Start Application
                <ArrowRight01Icon
                  size={18}
                  className="transition-transform group-hover:translate-x-1 duration-200"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-2xl text-base hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '1,200+', label: 'Students Enrolled' },
              { value: '95%', label: 'Exam Pass Rate' },
              { value: '50+', label: 'Awards Won' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white text-center hover:bg-white/20 transition-colors duration-200"
              >
                <p className="text-3xl font-bold mb-1">{value}</p>
                <p className="text-white/70 text-sm font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
