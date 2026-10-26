'use client';

import { useEffect } from 'react';
import { useForm } from '@/src/hooks/useForm';
import { AdmissionFormData } from '@/src/types';
import { isValidEmail } from '@/src/utils/helpers';
import { getSupabaseClient } from '@/src/lib/supabase';
import Input from '@/src/components/ui/Input';
import Select from '@/src/components/ui/Select';
import Button from '@/src/components/ui/Button';
import { programs } from '@/src/data/programs';

const initialValues: AdmissionFormData = {
  full_name: '',
  date_of_birth: '',
  parent_name: '',
  email: '',
  phone: '',
  program: '',
};

const programOptions = programs.map((p) => ({ value: p.title, label: p.title }));

function validate(values: AdmissionFormData): Partial<Record<keyof AdmissionFormData, string>> {
  const errors: Partial<Record<keyof AdmissionFormData, string>> = {};
  if (!values.full_name.trim()) errors.full_name = 'Full name is required.';
  if (!values.date_of_birth) errors.date_of_birth = 'Date of birth is required.';
  if (!values.parent_name.trim()) errors.parent_name = "Parent/guardian name is required.";
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  if (!values.program) errors.program = 'Please select a programme.';
  return errors;
}

export default function AdmissionForm() {
  const { values, errors, formState, handleChange, handleSubmit } = useForm(initialValues);

  /* Pre-select the programme when arriving from "Apply for this programme" */
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('program');
    if (wanted && programOptions.some((o) => o.value === wanted)) {
      handleChange({ target: { name: 'program', value: wanted } } as React.ChangeEvent<HTMLSelectElement>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data: AdmissionFormData) {
    let client;
    try {
      client = getSupabaseClient();
    } catch {
      throw new Error(
        'Online applications are not available right now. Please call or email the admissions office.'
      );
    }
    const { error } = await client.from('applications').insert([data]);
    if (error) throw new Error('We could not submit your application. Please try again in a moment.');
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, onSubmit, validate)}
      noValidate
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col gap-5"
    >
      <div>
        <h2 className="font-serif text-2xl font-bold text-navy mb-1">Application Form</h2>
        <p className="text-slate-500 text-sm">Fields marked * are required.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Student Full Name *"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          error={errors.full_name}
          placeholder="e.g. Kofi Mensah"
          autoComplete="name"
        />
        <Input
          label="Date of Birth *"
          name="date_of_birth"
          type="date"
          value={values.date_of_birth}
          onChange={handleChange}
          error={errors.date_of_birth}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <Input
        label="Parent / Guardian Name *"
        name="parent_name"
        value={values.parent_name}
        onChange={handleChange}
        error={errors.parent_name}
        placeholder="e.g. Mrs. Akosua Mensah"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Email Address *"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="parent@example.com"
          autoComplete="email"
        />
        <Input
          label="Phone Number *"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+233 00 000 0000"
          autoComplete="tel"
        />
      </div>

      <Select
        label="Programme Applying For *"
        name="program"
        value={values.program}
        onChange={handleChange}
        error={errors.program}
        options={programOptions}
        placeholder="Select a programme"
      />

      {/* Feedback */}
      {formState.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {formState.error}
        </div>
      )}
      {formState.isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
          Application submitted successfully! We will be in touch within 3–5 business days.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={formState.isLoading}
        disabled={formState.isSuccess}
        className="w-full mt-2"
      >
        Submit Application
      </Button>
    </form>
  );
}
