'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Students Enrolled', value: '1,200+' },
  { label: 'Qualified Staff', value: '80+' },
  { label: 'Award Wins', value: '50+' },
];

export default function AboutPreview() {
  return (
    <section className="py-18 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 leading-tight">
            A Purposeful School, Built Around Every Child
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            De-Masters Academy combines academic rigor, values-based mentoring,
            and modern learning tools so students grow in confidence, creativity,
            and character.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From classroom learning to leadership opportunities and co-curricular
            experiences, we nurture well-rounded learners prepared for global
            opportunities.
          </p>
          <Link
            href="/about"
            className="inline-block bg-brand-red text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-red-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            Discover Our Story
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-brand-blue rounded-3xl p-7 text-center text-white shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-4xl font-bold text-brand-red mb-2">{value}</p>
              <p className="text-sm text-white/80 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
