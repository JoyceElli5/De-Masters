'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import { Program } from '@/src/types';
import {
  FlowerPotIcon,
  BookOpen01Icon,
  MicroscopeIcon,
  Mortarboard01Icon,
  Robot01Icon,
  PaintBrush01Icon,
  ArrowRight01Icon,
} from 'hugeicons-react';
import type { FC } from 'react';

interface IconProps { size?: number; color?: string; className?: string }
const iconMap: Record<string, FC<IconProps>> = {
  FlowerPot: FlowerPotIcon as FC<IconProps>,
  BookOpen: BookOpen01Icon as FC<IconProps>,
  Microscope: MicroscopeIcon as FC<IconProps>,
  Mortarboard: Mortarboard01Icon as FC<IconProps>,
  Robot: Robot01Icon as FC<IconProps>,
  PaintBrush: PaintBrush01Icon as FC<IconProps>,
};
const iconColors: Record<string, string> = {
  FlowerPot: '#16a34a', BookOpen: '#2563eb', Microscope: '#7c3aed',
  Mortarboard: '#C1121F', Robot: '#0891b2', PaintBrush: '#d97706',
};
const iconBg: Record<string, string> = {
  FlowerPot: '#dcfce7', BookOpen: '#dbeafe', Microscope: '#ede9fe',
  Mortarboard: '#fee2e2', Robot: '#cffafe', PaintBrush: '#fef3c7',
};

interface ProgramsProps { programs: Program[]; preview?: boolean }

export default function Programs({ programs, preview = false }: ProgramsProps) {
  const displayed = preview ? programs.slice(0, 3) : programs;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Our Programmes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From early childhood to senior secondary, we offer comprehensive
            academic programmes tailored to every stage of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((program, i) => {
            const IconComponent = iconMap[program.icon] ?? BookOpen01Icon as FC<IconProps>;
            const iconColor = iconColors[program.icon] ?? '#2563eb';
            const bgColor = iconBg[program.icon] ?? '#dbeafe';
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full flex flex-col gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: bgColor }}
                  >
                    <IconComponent size={22} color={iconColor} />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-brand-blue leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {program.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="bg-brand-red/8 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-xl">
                      {program.duration}
                    </span>
                    <ArrowRight01Icon size={16} color="#C1121F" className="opacity-60" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-8 py-4 rounded-2xl hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-300"
              style={{ transition: 'all 0.3s var(--bounce)' }}
            >
              View All Programmes
              <ArrowRight01Icon size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
