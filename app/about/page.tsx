'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Award01Icon,
  HandHelpingIcon,
  AiIdeaIcon,
  Globe02Icon,
} from '@hugeicons/core-free-icons';
import Staff from '@/src/components/sections/Staff';
import CTA from '@/src/components/sections/CTA';
import { staff } from '@/src/data/staff';

const values = [
  {
    icon: Award01Icon,
    title: 'Excellence',
    description:
      'We set the highest academic standards and inspire every student to reach their full potential.',
  },
  {
    icon: HandHelpingIcon,
    title: 'Discipline',
    description:
      'We cultivate self-discipline, responsibility, and respect as cornerstones of character.',
  },
  {
    icon: AiIdeaIcon,
    title: 'Innovation',
    description:
      'We embrace modern teaching methods and technology to prepare students for a rapidly changing world.',
  },
  {
    icon: Globe02Icon,
    title: 'Inclusivity',
    description:
      'We celebrate diversity and ensure every child feels seen, valued, and empowered to succeed.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative text-white py-28 px-6 mt-0 pt-32 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-brand-blue/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              De-Masters Academy — a beacon of academic excellence and holistic
              education since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-brand-blue mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded in 2009, De-Masters Academy has grown from a small community
              school into one of the region&apos;s most respected educational institutions.
              We serve over 1,200 students from Early Childhood through Senior
              Secondary.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our modern campus is equipped with science laboratories, a
              well-stocked library, sports facilities, ICT suites, and dedicated
              arts spaces — all designed to support every dimension of a student&apos;s
              development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are accredited by the Ghana Education Service and consistently
              rank among the top performing schools in national examinations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-blue via-[#10104a] to-brand-blue-light rounded-4xl p-8 md:p-10 space-y-6 text-white shadow-2xl"
          >
            <div className="rounded-3xl bg-white/10 border border-white/20 p-6">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To provide a world-class education that equips students with the
                knowledge, skills, values, and character needed to lead and serve
                in a global community.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-red/20 border border-white/20 p-6">
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-white/85 leading-relaxed">
                To be the leading centre of excellence in education — producing
                graduates who are academically outstanding, morally grounded, and
                globally competitive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold text-brand-blue">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red">
                  <HugeiconsIcon icon={val.icon} size={30} />
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <Staff staff={staff} />

      <CTA />
    </>
  );
}
