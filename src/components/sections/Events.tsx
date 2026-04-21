'use client';

import { motion } from 'framer-motion';
import { Event } from '@/src/types';
import { formatDate } from '@/src/utils/helpers';

interface EventsProps {
  events: Event[];
}

const categoryColors: Record<string, string> = {
  Academic: 'bg-blue-100 text-blue-700',
  Sports: 'bg-green-100 text-green-700',
  Arts: 'bg-purple-100 text-purple-700',
  Celebration: 'bg-yellow-100 text-yellow-700',
  Admissions: 'bg-brand-red/10 text-brand-red',
  Community: 'bg-orange-100 text-orange-700',
};

export default function Events({ events }: EventsProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
            Stay Informed
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Join us for exciting events that celebrate learning, talent, and
            community.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid mb-5 bg-white border border-gray-100 rounded-3xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[event.category] ?? 'bg-gray-100 text-gray-600'}`}
                >
                  {event.category}
                </span>
                <time
                  dateTime={event.date}
                  className="text-xs font-medium text-gray-400 whitespace-nowrap"
                >
                  {formatDate(event.date)}
                </time>
              </div>
              <h3 className="text-base md:text-lg font-bold text-brand-blue">{event.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
