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
        'bg-white rounded-xl shadow-md p-6',
        hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-lg' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
