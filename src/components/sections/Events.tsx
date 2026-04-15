'use client';

import { motion } from 'framer-motion';
import { Event } from '@/src/types';
import { formatDate } from '@/src/utils/helpers';
import { Calendar01Icon } from 'hugeicons-react';

interface EventsProps {
  events: Event[];
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Academic:    { bg: '#dbeafe', text: '#1d4ed8' },
  Sports:      { bg: '#dcfce7', text: '#15803d' },
  Arts:        { bg: '#ede9fe', text: '#6d28d9' },
  Celebration: { bg: '#fef9c3', text: '#92400e' },
  Admissions:  { bg: '#fee2e2', text: '#b91c1c' },
  Community:   { bg: '#ffedd5', text: '#c2410c' },
};

export default function Events({ events }: EventsProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Stay Informed
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Upcoming Events
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Join us for exciting events that celebrate learning, talent, and
            community.
          </p>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {events.map((event, i) => {
            const cat = categoryColors[event.category] ?? { bg: '#f3f4f6', text: '#374151' };
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid mb-5"
              >
                <div className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  {/* Date row */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-xl bg-brand-blue/8 flex items-center justify-center flex-shrink-0">
                      <Calendar01Icon size={14} color="#000033" />
                    </div>
                    <time
                      dateTime={event.date}
                      className="text-xs font-semibold text-gray-400 tracking-wide"
                    >
                      {formatDate(event.date)}
                    </time>
                  </div>

                  {/* Category badge */}
                  <span
                    className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-xl mb-3"
                    style={{ backgroundColor: cat.bg, color: cat.text }}
                  >
                    {event.category}
                  </span>

                  <h3 className="text-base font-bold text-brand-blue mb-2 leading-snug group-hover:text-brand-red transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
