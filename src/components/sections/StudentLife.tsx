'use client';

import { motion } from 'framer-motion';
import PhotoFill from '@/src/components/ui/PhotoFill';
import { slugify } from '@/src/utils/helpers';

const tiles = [
  { label: 'Sports & Athletics',  gradient: 'linear-gradient(145deg,#001a50,#0a3080)',  tall: true  },
  { label: 'Science Labs',        gradient: 'linear-gradient(145deg,#002366,#1e40af)',  tall: false },
  { label: 'Arts & Creativity',   gradient: 'linear-gradient(145deg,#0a2a6b,#13398f)',  tall: false },
  { label: 'Classroom Learning',  gradient: 'linear-gradient(145deg,#001a50,#002f8a)',  tall: true  },
  { label: 'Cultural Events',     gradient: 'linear-gradient(145deg,#0b2559,#1d3f91)',  tall: false },
  { label: 'Leadership & Clubs',  gradient: 'linear-gradient(145deg,#00205e,#0a3080)',  tall: false },
  { label: 'Community Service',   gradient: 'linear-gradient(145deg,#001640,#1a3a8a)',  tall: true  },
];

export default function StudentLife() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-3">
            Life at De-Masters
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-lg">
            Sport, science, the arts, clubs and service.
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
                className="group relative rounded-xl overflow-hidden"
                style={{ aspectRatio: tall ? '3/4' : '1/1' }}
              >
                {/* Photo from public/images/life/<label-slug>.jpg */}
                <PhotoFill
                  src={`/images/life/${slugify(label)}.jpg`}
                  alt={label}
                  gradient={gradient}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">
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
