'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaffMember } from '@/src/types';
import { getInitials } from '@/src/utils/helpers';

interface StaffProps {
  staff: StaffMember[];
}

/* Photo if the file exists, otherwise a monogram — never a broken image */
function StaffPhoto({ member }: { member: StaffMember }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/3] bg-navy overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
          backgroundSize: '10px 10px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-white/90 text-5xl font-bold tracking-tight">
          {getInitials(member.name)}
        </span>
      </div>
      {!failed && (
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </div>
  );
}

export default function Staff({ staff }: StaffProps) {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-3">
            Our staff
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-lg">
            The people who lead the school and its departments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {staff.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <StaffPhoto member={member} />
              <div className="p-5">
                <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-1.5">
                  {member.role}
                </p>
                <h3 className="font-serif text-navy font-semibold text-lg leading-snug mb-2">
                  {member.name}
                </h3>
                {member.bio && (
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
