import Hero from '@/src/components/sections/Hero';
import TrustStrip from '@/src/components/sections/TrustStrip';
import Programs from '@/src/components/sections/Programs';
import WhyChooseUs from '@/src/components/sections/WhyChooseUs';
import StudentLife from '@/src/components/sections/StudentLife';
import BigStatement from '@/src/components/sections/BigStatement';
import Testimonials from '@/src/components/sections/Testimonials';
import Events from '@/src/components/sections/Events';
import CTA from '@/src/components/sections/CTA';
import { programs } from '@/src/data/programs';
import { testimonials } from '@/src/data/testimonials';
import { events } from '@/src/data/events';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Programs programs={programs} preview />
      <WhyChooseUs />
      <StudentLife />
      <BigStatement />
      <Testimonials testimonials={testimonials} />
      <Events events={events} />
      <CTA />
    </>
  );
}
