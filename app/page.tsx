import Hero from '@/src/components/sections/Hero';
import Programs from '@/src/components/sections/Programs';
import AboutPreview from '@/src/components/sections/AboutPreview';
import Testimonials from '@/src/components/sections/Testimonials';
import Gallery from '@/src/components/sections/Gallery';
import Events from '@/src/components/sections/Events';
import CTA from '@/src/components/sections/CTA';
import { programs } from '@/src/data/programs';
import { testimonials } from '@/src/data/testimonials';
import { events } from '@/src/data/events';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Programs programs={programs} preview />
      <Testimonials testimonials={testimonials} />
      <Gallery />
      <Events events={events} />
      <CTA />
    </>
  );
}
