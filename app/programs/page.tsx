'use client';

import { motion } from 'framer-motion';
import Programs from '@/src/components/sections/Programs';
import CTA from '@/src/components/sections/CTA';
import { programs } from '@/src/data/programs';
import { CheckmarkCircle01Icon } from 'hugeicons-react';

const enrolmentSteps = [
  'Complete the online application form.',
  'Submit academic records and birth certificate.',
  'Attend an entrance assessment (Grade 7 and above).',
  'Receive your offer letter within 5 business days.',
  'Accept and pay the enrolment fee to secure your place.',
];

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-blue text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/4 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Education Pathways
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Our Programmes
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive academic programmes designed to nurture every
              student from early childhood through to senior secondary level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All programs grid */}
      <Programs programs={programs} preview={false} />

      {/* Enrolment steps */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Get Started
            </p>
            <h2 className="text-3xl font-bold text-brand-blue mb-4 leading-tight">
              How to Enrol
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Joining De-Masters Academy is straightforward. Follow these
              simple steps and our admissions team will guide you through the
              rest.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {enrolmentSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-red flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <p className="text-gray-700 font-medium text-[15px]">{step}</p>
                </div>
                <CheckmarkCircle01Icon size={18} color="#C1121F" className="flex-shrink-0 opacity-50 mt-0.5" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
