'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section
      className="relative py-20 px-6 bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-brand-red/85" />
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Join De-Masters?
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Give your child the best start in life. Apply today and become part
            of our thriving community of learners and achievers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-white text-brand-red font-bold px-10 py-4 rounded-full text-base hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Start Application
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
