// FAQ page - Frequently Asked Questions with answers
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a sports ground?',
      answer: 'Simply create an account, search for grounds in your area, select your preferred time slot, and complete the booking with payment.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellation policies vary by facility. Most facilities allow free cancellation up to 24 hours before your booking. Check the specific policy on the booking page.'
    },
    {
      question: 'Are there any membership fees?',
      answer: 'No, creating an account and browsing grounds is completely free. You only pay for the bookings you make.'
    },
    {
      question: 'How do I pay for my booking?',
      answer: 'We accept all major credit/debit cards, UPI, and digital wallets. Payment is processed securely at the time of booking.'
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking up to 12 hours before the scheduled time, subject to availability and the facility\'s policy.'
    },
    {
      question: 'What if the ground is not available when I arrive?',
      answer: 'In the rare case of any issues, please contact our support team immediately. We will work with the facility to resolve the issue or provide a full refund.'
    },
    {
      question: 'Do you offer corporate or bulk bookings?',
      answer: 'Yes! Please contact our corporate team at corporate@groundwale.com for special rates and packages for regular or bulk bookings.'
    },
    {
      question: 'How can I become a facility partner?',
      answer: 'If you own or manage a sports facility and want to list it on GroundWale, please reach out to us at partners@groundwale.com.'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about GroundWale
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral transition-colors"
              >
                <span className="font-semibold text-dark">{faq.question}</span>
                <span className="text-2xl text-primary">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-dark mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you!
          </p>
          <a
            href="mailto:support@groundwale.com"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
