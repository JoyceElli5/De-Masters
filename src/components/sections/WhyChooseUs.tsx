import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/src/components/ui/Reveal';

const reasons = [
  {
    title: 'GES-accredited curriculum',
    desc: 'Recognised programmes from Early Childhood through Senior Secondary.',
  },
  {
    title: 'Science and technology',
    desc: 'Labs, a robotics club and computers used across subjects.',
  },
  {
    title: 'Experienced teachers',
    desc: 'Our staff average 12 years in the classroom.',
  },
  {
    title: 'A safe campus',
    desc: 'Security on site around the clock, and staff who know every child.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* A frame from the school's own video */}
        <Reveal x={-24} y={0} className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
          <Image
            src="/video/hero-poster.jpg"
            alt="De-Masters students in uniform on parade"
            fill
            sizes="(max-width: 1024px) 100vw, 448px"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        </Reveal>

        <Reveal x={24} y={0}>
          <h2 className="font-serif text-4xl text-navy leading-tight mb-4">
            Why parents choose De-Masters
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-lg">
            Good teaching, firm discipline and a school that knows your child by name.
          </p>

          <ul className="flex flex-col gap-6 mb-10">
            {reasons.map(({ title, desc }) => (
              <li key={title} className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-navy text-sm mb-0.5">{title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-navy-light transition-colors duration-200"
          >
            About the school
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
