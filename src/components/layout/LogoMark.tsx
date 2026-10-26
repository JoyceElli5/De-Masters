'use client';

import { useState } from 'react';
import Image from 'next/image';

/* School crest, with a "DM" monogram until /images/logo.png is added */
export default function LogoMark({ size = 36, priority = false }: { size?: number; priority?: boolean }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="rounded-lg bg-white ring-1 ring-navy/10 flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <span className="font-serif text-navy font-bold text-sm tracking-tight">DM</span>
      </div>
    );
  }

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <Image
        src="/images/logo.png"
        alt="De-Masters Academy crest"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority={priority}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
