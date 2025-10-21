// Terms of Service page - Static page describing terms and conditions
'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 bg-neutral">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold text-dark mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using GroundWale, you accept and agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">2. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You must notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">3. Bookings and Payments</h2>
              <p>
                All bookings are subject to availability. Payment must be made at the time of booking. Cancellation
                policies vary by facility and will be clearly stated before you complete your booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">4. User Conduct</h2>
              <p>
                You agree not to use our platform for any unlawful purpose or in any way that could damage, disable,
                or impair our services. You must respect the rules and regulations of each facility you book.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">5. Intellectual Property</h2>
              <p>
                All content on GroundWale, including text, graphics, logos, and software, is the property of
                GroundWale or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">6. Limitation of Liability</h2>
              <p>
                GroundWale is not liable for any damages arising from your use of our platform or services.
                We do not guarantee the availability, quality, or safety of any facilities listed on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any
                significant changes. Your continued use of the platform after such changes constitutes acceptance.
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
