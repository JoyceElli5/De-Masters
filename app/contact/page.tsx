import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '@/src/components/layout/PageHeader';
import Reveal from '@/src/components/ui/Reveal';
import ContactForm from '@/src/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Address, phone, email, office hours and a map for De-Masters Academy.',
};

const contactDetails = [
  { Icon: MapPin, label: 'Address',      value: '123 Academy Road, Education District, Ghana' },
  { Icon: Phone,  label: 'Phone',        value: '+233 00 000 0000',                  href: 'tel:+233000000000' },
  { Icon: Mail,   label: 'Email',        value: 'info@demastersacademy.edu.gh',      href: 'mailto:info@demastersacademy.edu.gh' },
  { Icon: Clock,  label: 'Office Hours', value: 'Monday – Friday: 7:30 AM – 4:00 PM' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        italic="us"
        description="Call, email or send a message below. To visit, let us know when you'd like to come."
      />

      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: contact details */}
          <Reveal className="lg:col-span-2 flex flex-col gap-6" x={-24} y={0}>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-6">Contact Details</h2>
              <ul className="flex flex-col gap-5">
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-navy font-medium hover:text-accent transition-colors duration-200 text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-64">
              <iframe
                title="Map showing De-Masters Academy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127521.50143226867!2d-0.2661!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="lg:col-span-3" x={24} y={0}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
