import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  hover = true,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        'bg-white rounded-3xl shadow-md p-6',
        hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
