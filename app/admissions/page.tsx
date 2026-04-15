'use client';

import { motion } from 'framer-motion';
import AdmissionForm from '@/src/components/forms/AdmissionForm';
import { CheckmarkCircle01Icon } from 'hugeicons-react';

const requirements = [
  'Original birth certificate of the student',
  'Certified copy of most recent school report',
  'Two recent passport-sized photographs',
  'Completed application form (below)',
  'Parent/guardian national ID copy',
  'Proof of address (utility bill or equivalent)',
];

const steps = [
  { step: '01', title: 'Submit Application', body: 'Complete and submit the online form below with all required documents.' },
  { step: '02', title: 'Assessment', body: 'Grades 7+ take a placement test. All other grades attend a brief interview.' },
  { step: '03', title: 'Offer Letter', body: 'Receive your admissions decision within 3–5 business days.' },
  { step: '04', title: 'Enrolment', body: 'Accept the offer and pay the enrolment fee to secure your place.' },
];

const faqs = [
  {
    q: 'When does the application period open?',
    a: 'Applications are accepted year-round, with main intakes in September and January.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes. We offer merit-based scholarships for academically exceptional students. Contact our admissions office for details.',
  },
  {
    q: 'How long does the process take?',
    a: 'You will receive a decision within 3–5 business days of a complete submission.',
  },
];

export default function AdmissionsPage() {
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
              Join Our Community
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Admissions
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              We welcome students who are eager to learn, grow, and contribute
              to our vibrant school community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-10">
            How It Works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, body }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Required documents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <h2 className="text-xl font-bold text-brand-blue mb-5">
                Required Documents
              </h2>
              <ul className="flex flex-col gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckmarkCircle01Icon
                      size={18}
                      color="#C1121F"
                      className="flex-shrink-0 mt-0.5"
                    />
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
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <h2 className="text-xl font-bold text-brand-blue mb-5">FAQs</h2>
              <div className="flex flex-col gap-5">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <p className="font-semibold text-brand-blue text-sm mb-1.5">{q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <AdmissionForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
