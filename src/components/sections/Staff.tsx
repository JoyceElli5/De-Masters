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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Our People
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Meet the Team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
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
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px -8px rgba(0,0,51,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Photo area */}
                <div className="relative h-52 bg-brand-blue/8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  {/* Fallback initials shown behind image — visible when image fails */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                      {getInitials(member.name)}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold text-brand-red tracking-wider uppercase mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-bold text-brand-blue text-lg leading-snug mb-2">
                    {member.name}
                  </h3>
                  {member.bio && (
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
