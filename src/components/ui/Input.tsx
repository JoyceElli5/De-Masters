import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        className={[
          'rounded-2xl border px-4 py-3 text-base outline-none transition-all',
          'focus:border-brand-red focus:ring-2 focus:ring-brand-red/20',
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white',
          className,
        ].join(' ')}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
