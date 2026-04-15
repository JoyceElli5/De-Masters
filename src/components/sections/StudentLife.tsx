'use client';

import { motion } from 'framer-motion';

const tiles = [
  { label: 'Sports & Athletics',  gradient: 'linear-gradient(145deg,#14532d,#22c55e)',  tall: true  },
  { label: 'Science Labs',        gradient: 'linear-gradient(145deg,#1e1b4b,#6366f1)',  tall: false },
  { label: 'Arts & Creativity',   gradient: 'linear-gradient(145deg,#7c2d12,#f97316)',  tall: false },
  { label: 'Classroom Learning',  gradient: 'linear-gradient(145deg,#0c4a6e,#38bdf8)',  tall: true  },
  { label: 'Cultural Events',     gradient: 'linear-gradient(145deg,#500724,#f43f5e)',  tall: false },
  { label: 'Leadership & Clubs',  gradient: 'linear-gradient(145deg,#1c1917,#d97706)',  tall: false },
  { label: 'Community Service',   gradient: 'linear-gradient(145deg,#042f2e,#2dd4bf)',  tall: true  },
];

export default function StudentLife() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Campus Experience
          </p>
          <h2 className="text-4xl font-black text-brand-blue leading-tight mb-3">
            Life at De-Masters
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Vibrant, diverse, and full of opportunity — see what happens beyond the classroom.
          </p>
        </div>

        {/* Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {tiles.map(({ label, gradient, tall }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid mb-3"
            >
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: tall ? '3/4' : '1/1' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: gradient }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    {label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
