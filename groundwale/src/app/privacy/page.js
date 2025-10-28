"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Shield, Calendar, ArrowLeft, Database, Lock, Eye, UserCheck, Bell, Trash2 } from "lucide-react"

const Header = dynamic(() => import("../../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../../components/Footer.jsx"), { ssr: false })

export default function PrivacyPolicy() {
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
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last Updated: {lastUpdated}</span>
            </div>
            <p className="text-gray-600 mt-4">
              At Groundwale, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Groundwale Technologies Pvt. Ltd. ("we," "our," or "us") operates the Groundwale platform, including our website and mobile applications (collectively, the "Platform"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Platform.
                </p>
                <p className="text-gray-700">
                  By accessing or using our Platform, you agree to the terms of this Privacy Policy. If you do not agree with this policy, please do not use our Platform.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Register an account:</strong> Name, email address, phone number, date of birth, gender</li>
                  <li><strong>Make a booking:</strong> Payment information, billing address, transaction details</li>
                  <li><strong>Complete your profile:</strong> Profile photo, sports preferences, skill level, location</li>
                  <li><strong>Contact us:</strong> Communication preferences, customer support inquiries</li>
                  <li><strong>Participate in surveys:</strong> Feedback, ratings, and reviews</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you access our Platform, we automatically collect certain information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, links clicked, search queries</li>
                  <li><strong>Location Data:</strong> GPS coordinates, approximate location based on IP address</li>
                  <li><strong>Cookies and Tracking:</strong> Session data, preferences, analytics information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Information from Third Parties</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Social media login data (Google, Facebook, etc.)</li>
                  <li>Payment gateway information</li>
                  <li>Analytics and advertising partners</li>
                  <li>Public databases and data aggregators</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-purple-600" />
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information for the following purposes:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Service Provision</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Create and manage your account</li>
                  <li>Process bookings and payments</li>
                  <li>Send booking confirmations and updates</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Facilitate communication between users and partners</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Platform Improvement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Analyze usage patterns and trends</li>
                  <li>Conduct research and development</li>
                  <li>Improve user experience and Platform functionality</li>
                  <li>Develop new features and services</li>
                  <li>Detect and prevent fraud, abuse, and security threats</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Marketing and Communications</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Send promotional emails and notifications (with your consent)</li>
                  <li>Provide personalized recommendations</li>
                  <li>Conduct marketing campaigns and surveys</li>
                  <li>Display targeted advertisements</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Legal and Compliance</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comply with legal obligations and regulations</li>
                  <li>Enforce our Terms and Conditions</li>
                  <li>Respond to legal requests and prevent illegal activities</li>
                  <li>Protect our rights, property, and safety</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We share information with third-party service providers who perform services on our behalf:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Payment processors (Razorpay, Stripe, PayU, etc.)</li>
                  <li>Cloud hosting providers (AWS, Google Cloud, Azure)</li>
                  <li>Analytics services (Google Analytics, Mixpanel, Firebase)</li>
                  <li>Email and SMS service providers</li>
                  <li>Customer support tools</li>
                  <li>Marketing and advertising platforms</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Partners and Facilities</h3>
                <p className="text-gray-700 mb-4">
                  We share necessary booking information with facility owners, coaches, and academies to fulfill your reservations.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information when required by law or in response to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Court orders, subpoenas, or legal processes</li>
                  <li>Government or regulatory requests</li>
                  <li>Protection of our legal rights</li>
                  <li>Investigation of fraud or security issues</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Business Transfers</h3>
                <p className="text-gray-700">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-green-600" />
                  5. Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement robust security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Encryption:</strong> SSL/TLS encryption for data in transit, AES-256 encryption for data at rest</li>
                  <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Employee Training:</strong> Data protection and privacy training programs</li>
                  <li><strong>Secure Infrastructure:</strong> Firewalls, intrusion detection, and monitoring systems</li>
                  <li><strong>Backup and Recovery:</strong> Regular data backups and disaster recovery plans</li>
                </ul>
                <p className="text-gray-700 italic">
                  Note: While we take reasonable measures to protect your data, no security system is completely secure. We cannot guarantee absolute security of your information.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Provide our services and maintain your account</li>
                  <li>Comply with legal, tax, and accounting obligations</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain business records and analytics</li>
                </ul>
                <p className="text-gray-700">
                  Typically, we retain data for 7 years after account closure for legal and compliance purposes. You may request earlier deletion subject to our legal obligations.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                  7. Your Privacy Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding your personal information:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Access and Portability</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Request a copy of your personal data</li>
                  <li>Download your data in a machine-readable format</li>
                  <li>Request information about how we process your data</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Correction and Update</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Update inaccurate or incomplete information</li>
                  <li>Correct errors in your personal data</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Deletion</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Request deletion of your account and data</li>
                  <li>Right to be forgotten (subject to legal requirements)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.4 Opt-Out</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Unsubscribe from marketing communications</li>
                  <li>Disable cookies through browser settings</li>
                  <li>Opt-out of targeted advertising</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.5 Object and Restrict</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Object to certain data processing activities</li>
                  <li>Request restriction of processing</li>
                  <li>Withdraw consent for specific uses</li>
                </ul>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700 font-semibold mb-2">To exercise your rights:</p>
                  <p className="text-gray-700">Email us at <a href="mailto:privacy@groundwale.com" className="text-blue-600 hover:text-blue-700">privacy@groundwale.com</a> or access your account settings.</p>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Types of Cookies</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for Platform functionality</li>
                  <li><strong>Performance Cookies:</strong> Collect analytics and usage data</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                  <li><strong>Advertising Cookies:</strong> Deliver targeted advertisements</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Managing Cookies</h3>
                <p className="text-gray-700">
                  You can control cookies through your browser settings. Note that disabling cookies may affect Platform functionality.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links and Services</h2>
                <p className="text-gray-700">
                  Our Platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately for deletion.
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions by Indian data protection authorities</li>
                  <li>Compliance with international data protection standards</li>
                </ul>
              </section>

              {/* Updates to Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-orange-600" />
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Posting the updated policy on this page</li>
                  <li>Sending an email notification</li>
                  <li>Displaying a prominent notice on our Platform</li>
                  <li>Updating the "Last Updated" date</li>
                </ul>
              </section>

              {/* Data Protection Officer */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Data Protection Officer</h2>
                <p className="text-gray-700 mb-4">
                  We have appointed a Data Protection Officer (DPO) to oversee our data protection practices. You may contact our DPO with any privacy-related concerns.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>Data Protection Officer</strong></p>
                  <p className="text-gray-700 mb-2">Email: dpo@groundwale.com</p>
                  <p className="text-gray-700">Phone: +91 0000000000</p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>Groundwale Technologies Pvt. Ltd.</strong></p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@groundwale.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 0000000000</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> [Your Complete Address], India</p>
                  <p className="text-gray-700"><strong>Website:</strong> www.groundwale.com</p>
                </div>
              </section>

            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-4">Your privacy and data security are our top priorities. We are committed to protecting your information and being transparent about our practices.</p>
            <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
              Read our Terms and Conditions →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
