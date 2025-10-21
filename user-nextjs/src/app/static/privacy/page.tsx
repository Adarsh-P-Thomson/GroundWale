// Privacy Policy page - Static page describing data privacy practices
'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold text-dark mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you create an account, make a booking,
                or contact us for support. This includes your name, email address, phone number, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process your bookings,
                send you updates and promotional materials, and respond to your inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with service providers who
                help us operate our platform, comply with legal obligations, or protect our rights and property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. You can also
                opt out of marketing communications by following the unsubscribe instructions in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@groundwale.com
              </p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
