'use client';

import { motion } from 'framer-motion';

const tiles = [
  { label: 'Sports & Athletics',  gradient: 'linear-gradient(145deg,#14532d,#16a34a)',  tall: true  },
  { label: 'Science Labs',        gradient: 'linear-gradient(145deg,#1e1b4b,#4f46e5)',  tall: false },
  { label: 'Arts & Creativity',   gradient: 'linear-gradient(145deg,#7c2d12,#ea580c)',  tall: false },
  { label: 'Classroom Learning',  gradient: 'linear-gradient(145deg,#0c4a6e,#0284c7)',  tall: true  },
  { label: 'Cultural Events',     gradient: 'linear-gradient(145deg,#4c0519,#e11d48)',  tall: false },
  { label: 'Leadership & Clubs',  gradient: 'linear-gradient(145deg,#1c1917,#b45309)',  tall: false },
  { label: 'Community Service',   gradient: 'linear-gradient(145deg,#022c22,#059669)',  tall: true  },
];

export default function StudentLife() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Campus Experience
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-3">
            Life at De-Masters
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-lg">
            Vibrant, diverse, and full of opportunity — beyond the classroom.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {tiles.map(({ label, gradient, tall }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="break-inside-avoid mb-3"
            >
              <div
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: tall ? '3/4' : '1/1' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: gradient }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
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
