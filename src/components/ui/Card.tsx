'use client';

import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  as?: 'div' | 'article' | 'li';
}

export default function Card({
  hover = true,
  className = '',
  children,
  ...props
}: CardProps) {
  if (!hover) {
    return (
      <div
        className={['bg-white rounded-2xl shadow-sm border border-gray-100 p-6', className].join(' ')}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,51,0.14)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={[
        'bg-white rounded-2xl shadow-sm border border-gray-100 p-6',
        className,
      ].join(' ')}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}
