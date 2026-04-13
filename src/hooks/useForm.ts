'use client';

import { useState } from 'react';
import { FormState } from '@/src/types';

type StringRecord = Record<string, string>;

export function useForm<T extends StringRecord>(initialValues: T) {
  const [values, setValues] = useState<T>({ ...initialValues });
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof T]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function resetForm() {
    setValues({ ...initialValues });
    setErrors({});
    setFormState({ isLoading: false, isSuccess: false, error: null });
  }

  async function handleSubmit(
    e: React.SyntheticEvent<HTMLFormElement>,
    onSubmit: (values: T) => Promise<void>,
    validate?: (values: T) => Partial<Record<keyof T, string>>
  ) {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setFormState({ isLoading: true, isSuccess: false, error: null });
    try {
      await onSubmit(values);
      setFormState({ isLoading: false, isSuccess: true, error: null });
      resetForm();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong.';
      setFormState({ isLoading: false, isSuccess: false, error: message });
    }
  }

  return { values, errors, formState, handleChange, handleSubmit, resetForm };
}
