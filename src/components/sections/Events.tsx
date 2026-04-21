'use client';

import { motion } from 'framer-motion';
import { Event } from '@/src/types';

interface EventsProps { events: Event[] }

const categoryAccent: Record<string, string> = {
  Academic:    '#2563eb',
  Sports:      '#16a34a',
  Arts:        '#7c3aed',
  Celebration: '#d97706',
  Admissions:  '#D6001C',
  Community:   '#ea580c',
};

function parseDateParts(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day:   d.getDate().toString().padStart(2, '0'),
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
  };
}

export default function Events({ events }: EventsProps) {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Stay Informed
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy">
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, i) => {
            const accent = categoryAccent[event.category] ?? '#64748b';
            const { day, month } = parseDateParts(event.date);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group bg-white rounded-xl p-5 flex items-center gap-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderLeft: `3px solid ${accent}` }}
              >
                {/* Date tile */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-bold text-navy leading-none">{day}</span>
                  <span className="text-[9px] font-semibold tracking-wider text-slate-400">{month}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded mb-1.5"
                    style={{ color: accent, backgroundColor: `${accent}12` }}
                  >
                    {event.category}
                  </span>
                  <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-accent transition-colors duration-200 mb-0.5">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
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
