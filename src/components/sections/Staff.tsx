'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaffMember } from '@/src/types';
import { getInitials } from '@/src/utils/helpers';

interface StaffProps {
  staff: StaffMember[];
}

export default function Staff({ staff }: StaffProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
            Our People
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Our dedicated faculty and staff are the heart of De-Masters
            Academy — committed to every student&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-56 bg-brand-blue/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  onError={undefined}
                  loading="lazy"
                />
                {/* Fallback avatar overlay (shown when image not loaded) */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/20">
                  <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                    {getInitials(member.name)}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-blue text-lg">{member.name}</h3>
                <p className="text-brand-red text-sm font-semibold mb-2">{member.role}</p>
                {member.bio && (
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
