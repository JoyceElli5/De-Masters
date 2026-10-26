'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Program } from '@/src/types';
import PhotoFill from '@/src/components/ui/PhotoFill';
import { slugify } from '@/src/utils/helpers';

const programVisuals: Record<string, { gradient: string }> = {
  FlowerPot:   { gradient: 'linear-gradient(145deg,#001a50,#0a3080)' },
  BookOpen:    { gradient: 'linear-gradient(145deg,#002366,#1e40af)' },
  Microscope:  { gradient: 'linear-gradient(145deg,#0a2a6b,#13398f)' },
  Mortarboard: { gradient: 'linear-gradient(145deg,#001a50,#002f8a)' },
  Robot:       { gradient: 'linear-gradient(145deg,#0b2559,#1d3f91)' },
  PaintBrush:  { gradient: 'linear-gradient(145deg,#00205e,#0a3080)' },
};

interface ProgramsProps { programs: Program[]; preview?: boolean }

export default function Programs({ programs, preview = false }: ProgramsProps) {
  const displayed = preview ? programs.slice(0, 6) : programs;

  return (
    <section id="programmes" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-navy">
              {preview ? 'Our programmes' : 'Choose a programme'}
            </h2>
          </div>
          {preview && (
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-navy text-sm font-medium hover:text-accent transition-colors group"
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          )}
        </div>

        {/* Cards — on the home page they lead to the programmes page;
            on the programmes page they start an application for that programme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((program, i) => {
            const visual = programVisuals[program.icon] ?? programVisuals.BookOpen;
            const href = preview
              ? '/programs'
              : `/admissions?program=${encodeURIComponent(program.title)}#apply`;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              >
                <Link
                  href={href}
                  className="group h-full flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {/* Image area */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: preview ? '16/9' : '21/9' }}>
                    {/* Photo from public/images/programs/<title-slug>.jpg */}
                    <PhotoFill
                      src={`/images/programs/${slugify(program.title)}.jpg`}
                      alt={program.title}
                      gradient={visual.gradient}
                      label={program.duration}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    {preview && (
                      <div className="absolute inset-0 bg-navy/80 hidden md:flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white/85 text-sm leading-relaxed text-center">
                          {program.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-accent text-[10px] font-bold tracking-widest uppercase block mb-1.5">
                      {program.duration}
                    </span>
                    <h3 className="font-serif text-navy font-semibold text-lg leading-snug mb-3">
                      {program.title}
                    </h3>
                    {!preview && (
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {program.description}
                      </p>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 text-navy/50 text-xs font-medium group-hover:text-accent transition-colors duration-200">
                      {preview ? 'Learn more' : 'Apply for this programme'} <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
