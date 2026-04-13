'use client';

import { motion } from 'framer-motion';
import Programs from '@/src/components/sections/Programs';
import CTA from '@/src/components/sections/CTA';
import { programs } from '@/src/data/programs';

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-blue text-white py-28 px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
              Education Pathways
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Programmes
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive academic programmes designed to nurture every
              student from early childhood through to senior secondary level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All programs grid */}
      <Programs programs={programs} preview={false} />

      {/* How to apply banner */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">
            How to Enrol
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Joining De-Masters Academy is straightforward. Complete our online
            application, submit the required documents, and our admissions team
            will guide you through the rest.
          </p>
          <ol className="text-left inline-flex flex-col gap-4 mb-8">
            {[
              'Complete the online application form.',
              'Submit academic records and birth certificate.',
              'Attend an entrance assessment (Grade 7 and above).',
              'Receive your offer letter within 5 business days.',
              'Accept and pay the enrolment fee to secure your place.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-brand-red text-white text-sm font-bold flex-shrink-0 flex items-center justify-center">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
