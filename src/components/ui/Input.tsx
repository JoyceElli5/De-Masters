import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        className={[
          'rounded-2xl border px-4 py-3 text-base outline-none',
          'transition-all duration-200',
          'focus:border-brand-red focus:ring-3 focus:ring-brand-red/15',
          'placeholder:text-gray-400',
          error
            ? 'border-red-400 bg-red-50/50 ring-2 ring-red-200'
            : 'border-gray-200 bg-white hover:border-gray-300',
          className,
        ].join(' ')}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );
}
