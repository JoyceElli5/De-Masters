'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/src/components/forms/ContactForm';
import {
  Location01Icon,
  SmartPhone01Icon,
  Mail01Icon,
  Clock01Icon,
} from 'hugeicons-react';

const contactDetails = [
  {
    Icon: Location01Icon,
    label: 'Address',
    value: '123 Academy Road, Education District, Ghana',
    color: '#C1121F',
    bg: '#fee2e2',
  },
  {
    Icon: SmartPhone01Icon,
    label: 'Phone',
    value: '+233 00 000 0000',
    href: 'tel:+233000000000',
    color: '#2563eb',
    bg: '#dbeafe',
  },
  {
    Icon: Mail01Icon,
    label: 'Email',
    value: 'info@demastersacademy.edu.gh',
    href: 'mailto:info@demastersacademy.edu.gh',
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    Icon: Clock01Icon,
    label: 'Office Hours',
    value: 'Monday – Friday: 7:30 AM – 4:00 PM',
    color: '#d97706',
    bg: '#fef3c7',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-blue text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />
        <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-white/4 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              We&apos;re Here to Help
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Contact Us
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or want to visit our campus? Reach out and our
              team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact details */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-brand-blue mb-6">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ Icon, label, value, href, color, bg }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={18} color={color} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-700 font-medium hover:text-brand-red transition-colors duration-200 text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-56">
              <iframe
                title="De-Masters Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127521.50143226867!2d-0.2661!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
