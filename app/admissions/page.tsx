'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import AdmissionForm from '@/src/components/forms/AdmissionForm';

const requirements = [
  'Original birth certificate of the student',
  'Certified copy of most recent school report',
  'Two recent passport-sized photographs',
  'Completed application form (below)',
  'Parent/guardian national ID copy',
  'Proof of address (utility bill or equivalent)',
];

const faqs = [
  {
    q: 'When does the application period open?',
    a: 'Applications are accepted year-round, with our main intake in September and a mid-year intake in January.',
  },
  {
    q: 'Is there an entrance examination?',
    a: 'Students applying for Grades 7 and above will take a placement assessment. All other grades are assessed through an interview.',
  },
  {
    q: 'How long does the process take?',
    a: 'You will receive a decision within 3–5 business days of submitting a complete application.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes. We offer merit-based scholarships for academically exceptional students. Contact our admissions office for details.',
  },
];

export default function AdmissionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Header */}
      <section
        className="relative text-white py-28 px-6 pt-32 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-brand-blue/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
              Join Our Community
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              We welcome applications from students who are eager to learn, grow,
              and contribute to our vibrant school community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: instructions */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-brand-blue mb-4">
                Required Documents
              </h2>
              <ul className="flex flex-col gap-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm bg-white p-4 rounded-2xl shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white text-xs flex-shrink-0 flex items-center justify-center mt-0.5">
                      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-brand-blue mb-2">FAQs</h2>
              <div className="flex flex-col divide-y divide-gray-300">
                {faqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  const panelId = `faq-panel-${i}`;
                  return (
                    <div key={faq.q}>
                      <button
                        type="button"
                        id={`faq-trigger-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-3 py-4 text-left cursor-pointer"
                      >
                        <span className="font-semibold text-brand-blue text-sm leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className={[
                            'mt-0.5 shrink-0 text-brand-blue transition-transform duration-200',
                            isOpen ? '-rotate-180' : '',
                          ].join(' ')}
                          aria-hidden
                        >
                          <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={`faq-trigger-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 pr-2 text-gray-600 text-sm leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AdmissionForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
