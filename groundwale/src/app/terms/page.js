"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { FileText, Calendar, ArrowLeft } from "lucide-react"

const Header = dynamic(() => import("../../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../../components/Footer.jsx"), { ssr: false })

export default function TermsAndConditions() {
  const lastUpdated = "October 28, 2025"

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Terms and Conditions
              </h1>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Groundwale ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700">
                  Please read these Terms carefully before using our services. If you do not agree to these Terms, you must not access or use our Platform.
                </p>
              </section>

              {/* Definitions */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>"User"</strong> refers to any individual or entity accessing or using the Platform.</li>
                  <li><strong>"Partner"</strong> refers to sports facility owners, coaches, or academies listed on our Platform.</li>
                  <li><strong>"Booking"</strong> means a reservation made through our Platform for sports facilities or services.</li>
                  <li><strong>"Services"</strong> include all features, content, and services provided through the Platform.</li>
                </ul>
              </section>

              {/* Eligibility */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility and Account Registration</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Age Requirement</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years old to use our Platform. By using our services, you represent and warrant that you meet this age requirement.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Account Registration</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>You must provide accurate, current, and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must notify us immediately of any unauthorized access to your account</li>
                  <li>You are solely responsible for all activities occurring under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Account Termination</h3>
                <p className="text-gray-700">
                  We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
                </p>
              </section>

              {/* Use of Platform */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Platform</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Permitted Use</h3>
                <p className="text-gray-700 mb-4">
                  You may use our Platform only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Use the Platform in any way that violates any applicable law or regulation</li>
                  <li>Impersonate or attempt to impersonate Groundwale, our employees, or other users</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the Platform</li>
                  <li>Use any automated system to access the Platform without our prior written permission</li>
                  <li>Introduce viruses, malware, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Prohibited Activities</h3>
                <p className="text-gray-700">
                  You shall not use the Platform to transmit, distribute, or store material that is unlawful, defamatory, obscene, threatening, or otherwise objectionable.
                </p>
              </section>

              {/* Bookings and Payments */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Bookings and Payments</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Booking Process</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>Prices displayed are in Indian Rupees (INR) unless otherwise stated</li>
                  <li>We reserve the right to refuse or cancel any booking at our discretion</li>
                  <li>Booking confirmations will be sent to your registered email and phone number</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Payment must be made in full at the time of booking unless otherwise specified</li>
                  <li>We accept various payment methods including credit/debit cards, UPI, and net banking</li>
                  <li>All payments are processed securely through our payment gateway partners</li>
                  <li>You are responsible for any applicable taxes, fees, or charges</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Cancellation and Refund Policy</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Cancellations made 24+ hours before booking: 100% refund</li>
                  <li>Cancellations made 12-24 hours before booking: 50% refund</li>
                  <li>Cancellations made less than 12 hours before booking: No refund</li>
                  <li>Refunds will be processed within 7-10 business days</li>
                  <li>Partner-specific cancellation policies may apply and will be displayed at booking</li>
                </ul>
              </section>

              {/* User Content */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Content and Reviews</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Content Submission</h3>
                <p className="text-gray-700 mb-4">
                  You may submit reviews, ratings, photos, and other content ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Content Standards</h3>
                <p className="text-gray-700 mb-4">
                  User Content must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contain false, misleading, or defamatory information</li>
                  <li>Violate any third-party rights, including intellectual property rights</li>
                  <li>Contain offensive, discriminatory, or inappropriate material</li>
                  <li>Include personal information of others without consent</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  All content, features, and functionality on the Platform, including but not limited to text, graphics, logos, icons, images, software, and their selection and arrangement, are owned by Groundwale or our licensors and are protected by Indian and international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the Platform without our express written permission.
                </p>
              </section>

              {/* Partner Relationships */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Partner Relationships</h2>
                <p className="text-gray-700 mb-4">
                  Groundwale acts as an intermediary platform connecting users with facility owners, coaches, and academies. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The quality, safety, or legality of services provided by Partners</li>
                  <li>The accuracy of Partner listings or descriptions</li>
                  <li>The ability of Partners to fulfill bookings</li>
                  <li>Any disputes between Users and Partners</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Disclaimer of Warranties</h3>
                <p className="text-gray-700 mb-4">
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Limitation of Damages</h3>
                <p className="text-gray-700">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, GROUNDWALE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify, defend, and hold harmless Groundwale, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Platform or your violation of these Terms.
                </p>
              </section>

              {/* Data Protection */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Protection and Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using the Platform, you consent to our collection, use, and disclosure of your information as described in our Privacy Policy.
                </p>
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read our Privacy Policy →
                </Link>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Governing Law</h3>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Dispute Resolution</h3>
                <p className="text-gray-700 mb-4">
                  Any dispute arising out of or relating to these Terms shall be resolved through:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation, if negotiations fail</li>
                  <li>Arbitration in accordance with the Arbitration and Conciliation Act, 1996</li>
                  <li>The courts of [Your City], India shall have exclusive jurisdiction</li>
                </ol>
              </section>

              {/* Modifications */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Platform after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@groundwale.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 0000000000</p>
                  <p className="text-gray-700"><strong>Address:</strong> Groundwale Technologies Pvt. Ltd., [Your Address], India</p>
                </div>
              </section>

            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>By using Groundwale, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
