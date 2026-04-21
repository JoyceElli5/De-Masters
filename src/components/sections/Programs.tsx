'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Program } from '@/src/types';

const programVisuals: Record<string, { gradient: string }> = {
  FlowerPot:   { gradient: 'linear-gradient(145deg,#064e3b,#10b981)' },
  BookOpen:    { gradient: 'linear-gradient(145deg,#1e3a8a,#3b82f6)' },
  Microscope:  { gradient: 'linear-gradient(145deg,#3b0764,#7c3aed)' },
  Mortarboard: { gradient: 'linear-gradient(145deg,#7f1d1d,#D6001C)' },
  Robot:       { gradient: 'linear-gradient(145deg,#0c4a6e,#0284c7)' },
  PaintBrush:  { gradient: 'linear-gradient(145deg,#78350f,#d97706)' },
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
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              Education Pathways
            </p>
            <h2 className="font-serif text-4xl font-bold text-navy">
              Our Programmes
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-navy text-sm font-medium hover:text-accent transition-colors group"
          >
            View All
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((program, i) => {
            const visual = programVisuals[program.icon] ?? programVisuals.BookOpen;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                {/* Image area */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: visual.gradient }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/80 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/85 text-sm leading-relaxed text-center">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-accent text-[10px] font-bold tracking-widest uppercase block mb-1.5">
                    {program.duration}
                  </span>
                  <h3 className="font-serif text-navy font-semibold text-lg leading-snug mb-3">
                    {program.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-navy/50 text-xs font-medium group-hover:text-accent transition-colors duration-200">
                    Learn more <ArrowRight size={11} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
