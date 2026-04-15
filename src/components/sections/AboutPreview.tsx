'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  StudentsIcon,
  TeacherIcon,
  Award01Icon,
  Calendar01Icon,
  ArrowRight01Icon,
} from 'hugeicons-react';

const stats = [
  { label: 'Years of Excellence', value: '15+', Icon: Calendar01Icon, color: '#C1121F' },
  { label: 'Students Enrolled', value: '1,200+', Icon: StudentsIcon, color: '#2563eb' },
  { label: 'Qualified Staff', value: '80+', Icon: TeacherIcon, color: '#16a34a' },
  { label: 'Award Wins', value: '50+', Icon: Award01Icon, color: '#d97706' },
];

const highlights = [
  {
    title: 'Academic Excellence',
    body: 'Consistently ranked among the top-performing schools in national examinations.',
  },
  {
    title: 'World-Class Facilities',
    body: 'Modern labs, a well-stocked library, ICT suites, sports grounds, and dedicated arts spaces.',
  },
  {
    title: 'Holistic Development',
    body: 'Beyond academics — we nurture leadership, creativity, sport, and community service.',
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Building Excellence Since 2009
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            De-Masters Academy is a premier educational institution dedicated to
            academic excellence, character formation, and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe every child has the potential to achieve greatness. Our
              world-class faculty, modern facilities, and innovative curriculum
              create an environment where students thrive academically, socially,
              and creatively.
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map(({ title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0 mt-2.5" />
                  <div>
                    <p className="font-semibold text-brand-blue mb-0.5">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all duration-200 group w-fit"
            >
              Discover Our Story
              <ArrowRight01Icon
                size={18}
                className="transition-transform group-hover:translate-x-1 duration-200"
              />
            </Link>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ label, value, Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, type: 'spring', stiffness: 260, damping: 20 }}
                className="bg-brand-blue rounded-2xl p-6 text-white flex flex-col gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}22` }}
                >
                  <Icon size={20} color={color} />
                </div>
                <p className="text-3xl font-bold" style={{ color }}>{value}</p>
                <p className="text-white/60 text-sm font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
