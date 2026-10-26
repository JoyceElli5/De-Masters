'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Event } from '@/src/types';

interface EventsProps { events: Event[] }

function parseDateParts(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return {
    day:   d.getDate().toString().padStart(2, '0'),
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
  };
}

/* Upcoming events soonest first; once all have passed, show the latest ones */
function pickEvents(events: Event[]) {
  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.filter((e) => e.date >= today);
  if (upcoming.length) return { list: upcoming, upcoming: true };
  return { list: sorted.reverse().slice(0, 4), upcoming: false };
}

export default function Events({ events }: EventsProps) {
  const { list, upcoming } = useMemo(() => pickEvents(events), [events]);

  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy">
            {upcoming ? 'Upcoming Events' : 'Recent Events'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((event, i) => {
            const { day, month } = parseDateParts(event.date);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group bg-white rounded-xl p-5 flex items-center gap-5 border border-slate-100 border-l-[3px] border-l-navy shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Date tile */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-bold text-navy leading-none">{day}</span>
                  <span className="text-[9px] font-semibold tracking-wider text-slate-400">{month}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-slate-400 mb-1">
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
