import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/src/components/ui/Reveal';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-navy text-white">
      <Reveal className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.08] tracking-tight mb-4">
            Come and see the school.
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-md">
            We take new students in September and January. Book a visit or start
            an application online.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="/admissions"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-dark transition-colors duration-200"
          >
            Start Application
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/35 text-white font-medium px-7 py-3 rounded-lg text-sm hover:border-white hover:bg-white/10 transition-colors duration-200"
          >
            Book a Visit
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
