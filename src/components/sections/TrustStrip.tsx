'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '15+',    label: 'Years of Excellence'  },
  { value: '1,200+', label: 'Students Enrolled'    },
  { value: '80+',    label: 'Qualified Staff'       },
  { value: '95%',    label: 'Exam Pass Rate'        },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center py-10 px-6 gap-2 text-center"
            >
              <span className="font-serif text-4xl font-bold text-navy leading-none">
                {value}
              </span>
              {/* Thin red accent line */}
              <span className="w-6 h-px bg-accent block" />
              <span className="text-slate-500 text-xs font-medium tracking-wide">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
