export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
}

export interface AdmissionFormData extends Record<string, string> {
  full_name: string;
  date_of_birth: string;
  parent_name: string;
  email: string;
  phone: string;
  program: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}
