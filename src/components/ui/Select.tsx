import { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

export default function Select({
  label,
  options,
  error,
  placeholder = 'Select an option',
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        id={selectId}
        className={[
          'rounded-2xl border px-4 py-3 text-base outline-none bg-white',
          'transition-all duration-200 cursor-pointer',
          'focus:border-brand-red focus:ring-3 focus:ring-brand-red/15',
          error
            ? 'border-red-400 bg-red-50/50 ring-2 ring-red-200'
            : 'border-gray-200 hover:border-gray-300',
          className,
        ].join(' ')}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );
}
