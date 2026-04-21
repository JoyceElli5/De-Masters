'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: 'Accredited Curriculum',
    desc: 'GES-accredited, nationally recognised programmes from Early Childhood to Senior Secondary.',
  },
  {
    num: '02',
    title: 'STEM-Forward Learning',
    desc: 'State-of-the-art labs, robotics suites, and digital tools woven into every subject.',
  },
  {
    num: '03',
    title: 'Experienced Educators',
    desc: 'Faculty averaging 12 years of experience, mentoring students to their full potential.',
  },
  {
    num: '04',
    title: 'Safe, Inclusive Campus',
    desc: '24/7 security, a welcoming culture, and a community where every child belongs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — image block */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(145deg,#002366 0%,#003080 50%,#001a50 100%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/8 text-[7rem] font-serif font-bold tracking-tight select-none">DMA</span>
          </div>

          {/* Stats badge */}
          <div className="absolute bottom-6 left-5 right-5 bg-white rounded-xl px-5 py-4 shadow-lg flex items-center gap-0 divide-x divide-slate-100">
            {[
              { value: '15+', label: 'Years'     },
              { value: '95%', label: 'Pass Rate'  },
              { value: '80+', label: 'Staff'      },
            ].map(({ value, label }) => (
              <div key={label} className="flex-1 text-center px-3">
                <p className="font-serif text-xl font-bold text-navy leading-none">{value}</p>
                <p className="text-slate-400 text-[10px] font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Red bottom strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        </motion.div>

        {/* RIGHT — text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Why We Stand Apart
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-4">
            An Education That
            <br />
            <span className="italic">Actually Matters</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            At De-Masters Academy, we don&apos;t just teach — we inspire, challenge,
            and equip every student with the tools they need to thrive in an
            ever-changing world.
          </p>

          <div className="flex flex-col gap-6 mb-10">
            {reasons.map(({ num, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="font-serif text-accent text-lg font-bold leading-none flex-shrink-0 pt-0.5">
                  {num}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">{title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-navy-light transition-all duration-200"
          >
            Discover Our Story
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
