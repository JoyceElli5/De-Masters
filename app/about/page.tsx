import type { Metadata } from 'next';
import PageHeader from '@/src/components/layout/PageHeader';
import Reveal from '@/src/components/ui/Reveal';
import Staff from '@/src/components/sections/Staff';
import CTA from '@/src/components/sections/CTA';
import { staff } from '@/src/data/staff';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The history, mission, values and staff of De-Masters Academy in Accra, Ghana.',
};

const values = [
  {
    num: '01',
    title: 'Excellence',
    description:
      'High standards in every class, and help for every student to meet them.',
  },
  {
    num: '02',
    title: 'Discipline',
    description:
      'Self-control, responsibility and respect for others.',
  },
  {
    num: '03',
    title: 'Innovation',
    description:
      'New teaching methods and technology where they help children learn.',
  },
  {
    num: '04',
    title: 'Inclusivity',
    description:
      'Every child belongs here, whatever their background.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        italic="De-Masters"
        description="A school in Accra teaching children from Early Childhood to Senior Secondary since 2009."
      />

      {/* School intro + mission & vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal x={-24} y={0}>
            <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-6">
              Our story
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                De-Masters Academy opened in 2009 as a small community school.
                Today we teach over 1,200 students, from Early Childhood through
                Senior Secondary.
              </p>
              <p>
                The campus has science labs, a library, computer rooms, sports
                grounds and rooms for art and music.
              </p>
              <p>
                We are accredited by the Ghana Education Service.
              </p>
            </div>
          </Reveal>

          <Reveal x={24} y={0} className="flex flex-col gap-5">
            <div className="relative bg-navy rounded-2xl p-8 text-white overflow-hidden">
              <p className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                Our Mission
              </p>
              <p className="font-serif text-xl leading-relaxed text-white/90">
                To give every student the knowledge, skills and character to lead
                and to serve.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
            </div>

            <div className="relative bg-[#F8F9FA] border border-slate-100 rounded-2xl p-8 overflow-hidden">
              <p className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                Our Vision
              </p>
              <p className="font-serif text-xl leading-relaxed text-navy">
                Graduates who do well in their studies, live with integrity and
                can compete anywhere.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 px-6 bg-[#F8F9FA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy">What we value</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ num, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 0.07}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <span className="font-serif text-accent text-2xl font-bold block mb-4">{num}</span>
                <h3 className="font-serif text-navy font-semibold text-xl mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Staff staff={staff} />
      <CTA />
    </>
  );
}
