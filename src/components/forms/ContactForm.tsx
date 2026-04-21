'use client';

import { ChangeEvent, useState } from 'react';
import Input from '@/src/components/ui/Input';
import Button from '@/src/components/ui/Button';
import { ContactFormData, FormState } from '@/src/types';
import { isValidEmail } from '@/src/utils/helpers';

const initialValues: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormState({ isLoading: true, isSuccess: false, error: null });
    // Simulate sending — replace with your email service or Supabase insert
    await new Promise((res) => setTimeout(res, 1200));
    setFormState({ isLoading: false, isSuccess: true, error: null });
    setValues(initialValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-5"
    >
      <h3 className="text-2xl font-bold text-brand-blue">Send Us a Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Your Name *"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="John Doe"
          autoComplete="name"
        />
        <Input
          label="Email Address *"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <Input
        label="Subject *"
        name="subject"
        value={values.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="How can we help?"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className={[
            'rounded-2xl border px-4 py-3 text-base outline-none transition-all resize-none',
            'focus:border-brand-red focus:ring-2 focus:ring-brand-red/20',
            errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300',
          ].join(' ')}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {formState.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-2xl">
          {formState.error}
        </div>
      )}
      {formState.isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-2xl">
          Message sent. We&apos;ll get back to you within 24 hours.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={formState.isLoading}
        disabled={formState.isSuccess}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
}
