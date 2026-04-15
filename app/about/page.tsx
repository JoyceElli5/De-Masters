'use client';

import { motion } from 'framer-motion';
import Staff from '@/src/components/sections/Staff';
import CTA from '@/src/components/sections/CTA';
import { staff } from '@/src/data/staff';
import {
  Award01Icon,
  Shield01Icon,
  BulbIcon,
  UserGroupIcon,
} from 'hugeicons-react';

const values = [
  {
    Icon: Award01Icon,
    title: 'Excellence',
    description:
      'We set the highest academic standards and inspire every student to reach their full potential.',
    color: '#C1121F',
    bg: '#fee2e2',
  },
  {
    Icon: Shield01Icon,
    title: 'Discipline',
    description:
      'We cultivate self-discipline, responsibility, and respect as cornerstones of character.',
    color: '#000033',
    bg: '#e0e7ff',
  },
  {
    Icon: BulbIcon,
    title: 'Innovation',
    description:
      'We embrace modern teaching methods and technology to prepare students for a rapidly changing world.',
    color: '#d97706',
    bg: '#fef3c7',
  },
  {
    Icon: UserGroupIcon,
    title: 'Inclusivity',
    description:
      'We celebrate diversity and ensure every child feels seen, valued, and empowered to succeed.',
    color: '#16a34a',
    bg: '#dcfce7',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-brand-blue text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-light opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              About Us
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              De-Masters Academy — a beacon of academic excellence and holistic
              education since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-brand-blue mb-6 leading-tight">
              Shaping Leaders Since 2009
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 text-[17px] leading-relaxed">
              <p>
                Founded in 2009, De-Masters Academy has grown from a small
                community school into one of the region&apos;s most respected
                educational institutions, serving over 1,200 students from
                Early Childhood through Senior Secondary.
              </p>
              <p>
                Our modern campus features science laboratories, a well-stocked
                library, sports facilities, ICT suites, and dedicated arts
                spaces — all designed to support every dimension of a student&apos;s
                development.
              </p>
              <p>
                We are accredited by the Ghana Education Service and consistently
                rank among the top-performing schools in national examinations.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision — premium split card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Mission */}
            <div className="relative bg-brand-blue rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red text-xs font-bold px-3 py-1.5 rounded-xl mb-4 tracking-wider uppercase">
                  Mission
                </div>
                <p className="text-white/85 leading-relaxed text-[17px]">
                  To provide a world-class education that equips students with
                  the knowledge, skills, values, and character needed to lead
                  and serve in a global community.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-brand-red rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-8 -translate-x-8" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-xl mb-4 tracking-wider uppercase">
                  Vision
                </div>
                <p className="text-white/85 leading-relaxed text-[17px]">
                  To be the leading centre of excellence in education —
                  producing graduates who are academically outstanding, morally
                  grounded, and globally competitive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, description, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 border border-gray-100"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={22} color={color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Staff staff={staff} />
      <CTA />
    </>
  );
}
