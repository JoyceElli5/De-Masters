import type { Metadata } from 'next';
import PageHeader from '@/src/components/layout/PageHeader';
import StudentLife from '@/src/components/sections/StudentLife';
import BigStatement from '@/src/components/sections/BigStatement';
import Testimonials from '@/src/components/sections/Testimonials';
import Events from '@/src/components/sections/Events';
import CTA from '@/src/components/sections/CTA';
import { testimonials } from '@/src/data/testimonials';
import { events } from '@/src/data/events';

export const metadata: Metadata = {
  title: 'Student Life',
  description:
    'Sport, science, the arts, clubs, cultural events and community service at De-Masters Academy.',
};

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        title="Student"
        italic="Life"
        description="Sport, science, the arts, clubs and service outside the classroom."
      />
      <StudentLife />
      <Events events={events} />
      <Testimonials testimonials={testimonials} />
      <BigStatement />
      <CTA />
    </>
  );
}
