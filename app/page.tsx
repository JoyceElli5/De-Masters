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
      {/* 1. Fullscreen video hero */}
      <Hero />

      {/* 2. Stats trust strip */}
      <TrustStrip />

      {/* 3. Interactive programme cards */}
      <Programs programs={programs} preview />

      {/* 4. Why choose us — split layout */}
      <WhyChooseUs />

      {/* 5. Student life masonry */}
      <StudentLife />

      {/* 6. Big statement with NURTURE */}
      <BigStatement />

      {/* 7. Testimonials carousel */}
      <Testimonials testimonials={testimonials} />

      {/* 8. Events */}
      <Events events={events} />

      {/* 9. Final CTA */}
      <CTA />
    </>
  );
}
