import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/src/components/layout/PageHeader';
import Reveal from '@/src/components/ui/Reveal';
import Programs from '@/src/components/sections/Programs';
import CTA from '@/src/components/sections/CTA';
import { programs } from '@/src/data/programs';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'Early Childhood, Primary, Junior and Senior Secondary, plus STEM & Robotics and Arts & Culture at De-Masters Academy.',
};

const enrolmentSteps = [
  'Complete the online application form.',
  'Submit academic records and birth certificate.',
  'Attend an entrance assessment (Grade 7 and above).',
  'Receive your offer letter within 3–5 business days.',
  'Accept and pay the enrolment fee to secure your place.',
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our"
        italic="Programmes"
        description="Classes from age 3 to Grade 12, plus clubs in science, technology and the arts."
      />

      <Programs programs={programs} />

      {/* Enrolment steps */}
      <section className="py-24 px-6 bg-[#F8F9FA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-4">
              How to enrol
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
              Five steps. The admissions office can help with any of them.
            </p>
            <Link
              href="/admissions#apply"
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-dark transition-all duration-200"
            >
              Start Application
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </Reveal>

          <Reveal x={24} y={0}>
            <ol className="flex flex-col gap-3">
              {enrolmentSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-5 bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <span className="font-serif text-accent text-lg font-bold leading-none flex-shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-navy font-medium text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
