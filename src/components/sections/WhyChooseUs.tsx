'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight01Icon } from 'hugeicons-react';

const reasons = [
  { title: 'Accredited Curriculum',   desc: 'GES-accredited, nationally recognised programmes from Early Childhood to Senior Secondary.' },
  { title: 'STEM-Forward Learning',   desc: 'State-of-the-art labs, robotics suites, and digital tools woven into every subject.' },
  { title: 'Experienced Educators',   desc: 'Faculty averaging 12 years of classroom experience, mentoring students to their full potential.' },
  { title: 'Safe, Inclusive Campus',  desc: '24/7 security, a welcoming culture, and a community where every child belongs.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
        >
          {/* Gradient image placeholder */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(145deg,#000033 0%,#001850 50%,#C1121F 100%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-[7rem] font-black tracking-tighter select-none">DMA</span>
          </div>

          {/* Red bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />

          {/* Floating stats badge */}
          <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-6">
            {[
              { value: '15+', label: 'Years' },
              { value: '95%', label: 'Pass Rate' },
              { value: '80+', label: 'Staff' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center flex-1">
                <p className="text-xl font-black text-brand-blue leading-none">{value}</p>
                <p className="text-gray-500 text-xs font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Why We Stand Apart
          </p>
          <h2 className="text-4xl font-black text-brand-blue leading-tight mb-4">
            An Education That
            <br />
            <span className="text-brand-red">Actually Matters</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            At De-Masters Academy, we don&apos;t just teach — we inspire,
            challenge, and equip every student with the tools they need to
            thrive in an ever-changing world.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-5 mb-10">
            {reasons.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-red text-[11px] font-black">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-brand-blue text-sm mb-0.5">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
          >
            Discover Our Story
            <ArrowRight01Icon size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
