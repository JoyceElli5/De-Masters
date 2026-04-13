'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import { Program } from '@/src/types';

interface ProgramsProps {
  programs: Program[];
  preview?: boolean;
}

export default function Programs({ programs, preview = false }: ProgramsProps) {
  const displayed = preview ? programs.slice(0, 3) : programs;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Our Programmes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From early childhood to senior secondary, we offer comprehensive
            academic programmes tailored to every stage of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-1">{program.description}</p>
                <span className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full self-start">
                  {program.duration}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-block bg-brand-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-blue-light transition-colors duration-200"
            >
              View All Programmes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
