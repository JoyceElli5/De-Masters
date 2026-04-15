'use client';

import { motion } from 'framer-motion';
import { Award01Icon, StudentsIcon, TeacherIcon, Certificate01Icon } from 'hugeicons-react';

const stats = [
  { Icon: Award01Icon,      value: '15+',    label: 'Years of Excellence', color: '#C1121F' },
  { Icon: StudentsIcon,     value: '1,200+', label: 'Students Enrolled',   color: '#2563eb' },
  { Icon: TeacherIcon,      value: '80+',    label: 'Qualified Staff',     color: '#0891b2' },
  { Icon: Certificate01Icon, value: '95%',   label: 'Exam Pass Rate',      color: '#16a34a' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-100">
          {stats.map(({ Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-start gap-3 lg:px-10 first:pl-0 last:pr-0 text-center lg:text-left"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon size={20} color={color} />
              </div>
              <div>
                <p className="text-3xl font-black leading-none mb-1" style={{ color }}>{value}</p>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
