'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhotoFillProps {
  src: string;
  alt: string;
  gradient: string;
  sizes: string;
  label?: string;
  className?: string;
}

/* Fills its parent with a photo — or with the colour gradient until the photo file exists */
export default function PhotoFill({ src, alt, gradient, sizes, label, className = '' }: PhotoFillProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ background: gradient }}>
      {label && (
        <span className="absolute inset-0 flex items-center justify-center font-serif text-white/25 text-4xl">
          {label}
        </span>
      )}
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
