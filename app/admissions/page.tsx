import type { Metadata } from 'next';
import { Check, ChevronDown } from 'lucide-react';
import PageHeader from '@/src/components/layout/PageHeader';
import Reveal from '@/src/components/ui/Reveal';
import AdmissionForm from '@/src/components/forms/AdmissionForm';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'How to apply to De-Masters Academy: steps, required documents, common questions and the application form.',
};

const requirements = [
  'Original birth certificate of the student',
  'Certified copy of most recent school report',
  'Two recent passport-sized photographs',
  'Completed application form',
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
      <PageHeader
        title="Admissions"
        description="We take new students in September and January. Here is how to apply."
      />

      {/* Process steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy">
              How it works
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ step, title, body }) => (
              <li key={step} className="relative bg-[#F8F9FA] rounded-2xl p-6 border border-slate-100 overflow-hidden">
                <span className="font-serif text-accent text-3xl font-bold block mb-4">{step}</span>
                <h3 className="font-serif text-navy font-semibold text-lg mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements + Form */}
      <section id="apply" className="py-24 px-6 bg-[#F8F9FA] border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form first on small screens — it's what most visitors came for */}
          <Reveal className="lg:col-span-3 lg:order-2" x={24} y={0}>
            <AdmissionForm />
          </Reveal>

          <div className="lg:col-span-2 lg:order-1 flex flex-col gap-6">
            <Reveal className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-5">Required Documents</h2>
              <ul className="flex flex-col gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-slate-600 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-3">Common Questions</h2>
              <div className="flex flex-col divide-y divide-slate-100">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-3">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-semibold text-navy text-sm [&::-webkit-details-marker]:hidden">
                      {q}
                      <ChevronDown size={16} className="text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="text-slate-500 text-sm leading-relaxed mt-2">{a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
