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
    <section className="py-16 px-6 bg-white">
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
            Building Excellence Since 2009
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            De-Masters Academy is a premier educational institution dedicated to
            academic excellence, character formation, and holistic development.
            We believe every child has the potential to achieve greatness.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our world-class faculty, modern facilities, and innovative curriculum
            create an environment where students thrive academically, socially,
            and creatively.
          </p>
          <Link
            href="/about"
            className="inline-block bg-brand-red text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-red-dark transition-colors duration-200"
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
              className="bg-brand-blue rounded-xl p-8 text-center text-white"
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
