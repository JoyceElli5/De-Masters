'use client';

import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-dark shadow-sm hover:shadow-brand-red/30 hover:shadow-md focus-visible:ring-brand-red',
  secondary:
    'bg-brand-blue text-white hover:bg-brand-blue-light shadow-sm hover:shadow-brand-blue/30 hover:shadow-md focus-visible:ring-brand-blue',
  outline:
    'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white focus-visible:ring-brand-red',
  ghost:
    'text-brand-blue hover:bg-brand-blue/8 focus-visible:ring-brand-blue',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled || isLoading ? {} : { scale: 1.03 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      disabled={disabled || isLoading}
      className={[
        'inline-flex items-center justify-center gap-2 font-semibold',
        'transition-colors duration-200 cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading…
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
