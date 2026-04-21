'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Students in science lab' },
  { src: '/images/gallery-2.jpg', alt: 'School library' },
  { src: '/images/gallery-3.jpg', alt: 'Sports day competition' },
  { src: '/images/gallery-4.jpg', alt: 'Arts and culture festival' },
  { src: '/images/gallery-5.jpg', alt: 'Students in classroom' },
  { src: '/images/gallery-6.jpg', alt: 'School graduation ceremony' },
];

const tileHeights = ['h-64', 'h-80', 'h-72', 'h-60', 'h-84', 'h-68'];

export default function Gallery() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
            Campus Life
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            A glimpse into the vibrant life and learning environment at
            De-Masters Academy.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative mb-4 break-inside-avoid ${tileHeights[i % tileHeights.length]} rounded-3xl overflow-hidden group shadow-md`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/40 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
