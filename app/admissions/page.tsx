'use client';

import { motion } from 'framer-motion';
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
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-red text-white text-xs flex-shrink-0 flex items-center justify-center mt-0.5">
                      ✓
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
              <h2 className="text-2xl font-bold text-brand-blue mb-4">FAQs</h2>
              <div className="flex flex-col gap-5">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <p className="font-semibold text-brand-blue text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
            transition={{ duration: 0.5 }}
          >
            <AdmissionForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
