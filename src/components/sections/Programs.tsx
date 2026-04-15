'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight01Icon } from 'hugeicons-react';
import { Program } from '@/src/types';

const programVisuals: Record<string, { gradient: string }> = {
  FlowerPot:   { gradient: 'linear-gradient(145deg,#065f46,#10b981)' },
  BookOpen:    { gradient: 'linear-gradient(145deg,#1e3a8a,#3b82f6)' },
  Microscope:  { gradient: 'linear-gradient(145deg,#4c1d95,#8b5cf6)' },
  Mortarboard: { gradient: 'linear-gradient(145deg,#7f1d1d,#C1121F)' },
  Robot:       { gradient: 'linear-gradient(145deg,#0c4a6e,#0ea5e9)' },
  PaintBrush:  { gradient: 'linear-gradient(145deg,#78350f,#f59e0b)' },
};

interface ProgramsProps { programs: Program[]; preview?: boolean }

export default function Programs({ programs, preview = false }: ProgramsProps) {
  const displayed = preview ? programs.slice(0, 6) : programs;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Education Pathways
            </p>
            <h2 className="text-4xl font-black text-brand-blue leading-tight">
              Our Programmes
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:text-brand-red transition-colors group"
          >
            View All
            <ArrowRight01Icon size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Uniform 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((program, i) => {
            const visual = programVisuals[program.icon] ?? programVisuals.BookOpen;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/3' }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: visual.gradient }}
                />

                {/* Bottom gradient for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                {/* Hover reveal: description */}
                <div className="absolute inset-0 bg-brand-blue/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-3">
                    {program.duration}
                  </p>
                  <p className="text-white text-sm leading-relaxed text-center">
                    {program.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-brand-red text-xs font-bold">
                    Learn more <ArrowRight01Icon size={13} color="#C1121F" />
                  </span>
                </div>

                {/* Always visible: title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase block mb-1">
                    {program.duration}
                  </span>
                  <h3 className="text-white font-black text-lg leading-tight">{program.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
