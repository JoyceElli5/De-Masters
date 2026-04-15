'use client';

import { motion } from 'framer-motion';
import { Event } from '@/src/types';

interface EventsProps { events: Event[] }

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Academic:    { bg: '#eff6ff', text: '#1d4ed8', border: '#3b82f6' },
  Sports:      { bg: '#f0fdf4', text: '#15803d', border: '#22c55e' },
  Arts:        { bg: '#f5f3ff', text: '#6d28d9', border: '#8b5cf6' },
  Celebration: { bg: '#fefce8', text: '#854d0e', border: '#eab308' },
  Admissions:  { bg: '#fff1f2', text: '#be123c', border: '#C1121F'  },
  Community:   { bg: '#fff7ed', text: '#c2410c', border: '#f97316' },
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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Stay Informed
          </p>
          <h2 className="text-4xl font-black text-brand-blue leading-tight">
            Upcoming Events
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, i) => {
            const cat = categoryColors[event.category] ?? {
              bg: '#f9fafb', text: '#374151', border: '#9ca3af',
            };
            const { day, month } = parseDateParts(event.date);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl p-5 flex items-center gap-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderLeft: `3px solid ${cat.border}` }}
              >
                {/* Date tile */}
                <div
                  className="w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cat.bg }}
                >
                  <span className="text-xl font-black leading-none" style={{ color: cat.text }}>{day}</span>
                  <span className="text-[9px] font-bold tracking-wider" style={{ color: cat.text }}>{month}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md mb-1"
                    style={{ backgroundColor: cat.bg, color: cat.text }}
                  >
                    {event.category}
                  </span>
                  <h3 className="font-bold text-brand-blue text-sm leading-snug group-hover:text-brand-red transition-colors duration-200 mb-0.5">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
