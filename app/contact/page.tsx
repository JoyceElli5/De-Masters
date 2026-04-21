'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Location01Icon,
  Call02Icon,
  Mail01Icon,
  Clock01Icon,
} from '@hugeicons/core-free-icons';
import ContactForm from '@/src/components/forms/ContactForm';

const contactDetails = [
  {
    icon: Location01Icon,
    label: 'Address',
    value: '123 Academy Road, Education District, Ghana',
  },
  {
    icon: Call02Icon,
    label: 'Phone',
    value: '+233 00 000 0000',
    href: 'tel:+233000000000',
  },
  {
    icon: Mail01Icon,
    label: 'Email',
    value: 'info@demastersacademy.edu.gh',
    href: 'mailto:info@demastersacademy.edu.gh',
  },
  {
    icon: Clock01Icon,
    label: 'Office Hours',
    value: 'Monday – Friday: 7:30 AM – 4:00 PM',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative text-white py-28 px-6 pt-32 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-brand-blue/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
              We&apos;re Here to Help
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or want to visit our campus? Reach out and our
              team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="w-11 h-11 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={icon} size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-700 hover:text-brand-red transition-colors font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map embed */}
            <div className="rounded-3xl overflow-hidden shadow-md h-56">
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

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
