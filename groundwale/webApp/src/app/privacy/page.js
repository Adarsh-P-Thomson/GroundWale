"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Shield, Calendar, ArrowLeft, Database, Lock, Eye, UserCheck, Bell, Trash2 } from "lucide-react"

const Header = dynamic(() => import("../../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../../components/Footer.jsx"), { ssr: false })

export default function PrivacyPolicy() {
  const lastUpdated = "November 09, 2025"

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
              Groundwale ("Company", "we", "us", "our") is committed to respecting the privacy of every person who shares personal information with us via our website www.groundwale.com ("Website") and our mobile application Groundwale ("App").
            </p>
            <p className="text-gray-600 mt-4">
              This Privacy Policy ("Policy") explains how we collect, use, store, disclose, process, and transfer your information. By using the Website/App, you consent to the practices described here. If you do not agree, please do not use the Website/App.
            </p>
            <p className="text-gray-600 mt-4 italic text-sm">
              <strong>Regulatory note:</strong> This Policy is published in accordance with the Information Technology Act, 2000 and applicable rules thereunder. We may update this Policy from time to time; the "Updated" date above will change accordingly. Your continued use signifies acceptance of the updated Policy.
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Scope & Consent */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope & Consent</h2>
                <p className="text-gray-700">
                  By providing information to us (including by accessing/using the Website/App), you consent to our collection, use, storage, disclosure, processing, and transfer of your information as described here. You may withhold or withdraw consent at any time by writing to us (see Contact), but if certain information is necessary to deliver the Services, we may be unable to provide those Services (in whole or part).
                </p>
              </section>

              {/* Personal Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  2. Personal Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on how you use Groundwale (as a player/user or as a venue/coach/academy partner), we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Identity & Contact:</strong> Name, phone number, email, age/date of birth, gender.</li>
                  <li><strong>Location:</strong> Approximate or precise location (when enabled by you).</li>
                  <li><strong>Payments & Payouts:</strong> For users—tokenized payment info via payment gateways (we don't store full card data). For partners—bank/UPI details (account holder name, account number, IFSC, UPI ID) to enable settlements.</li>
                  <li><strong>Device & Log Data:</strong> IP address, device identifiers, OS/app version, usage logs, crash logs, cookies and similar technologies.</li>
                  <li><strong>Phone Book (optional, with permission):</strong> To help you connect with contacts already on Groundwale.</li>
                  <li><strong>Communications:</strong> Messages to support, feedback, chat with venues/coaches, and preferences.</li>
                  <li><strong>Booking Data:</strong> Sports, venues/coaches selected, dates/times, and transaction details.</li>
                </ul>
                <p className="text-gray-700 italic text-sm">
                  We do not require phone-book access unless you explicitly opt in. You can revoke that permission anytime in your device settings.
                </p>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-purple-600" />
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We may collect, use, process, and share your Personal Information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Provide & operate the Website/App, process bookings, payments, and customer support.</li>
                  <li>Personalize & improve user experience; conduct analytics, A/B tests, and quality assurance.</li>
                  <li>Communicate transactional updates (OTP, confirmations, reminders), service messages, and—where permitted—marketing communications.</li>
                  <li>Enforce our Terms of Use, prevent fraud/abuse, and ensure platform safety and integrity.</li>
                  <li>Comply with law, respond to legal process, and protect our rights.</li>
                  <li><strong>Corporate actions:</strong> In case of merger, acquisition, reorganization, or asset sale, your data may be transferred to the successor entity, subject to this Policy.</li>
                  <li><strong>Anonymisation:</strong> We may remove personal identifiers and use the remaining data for statistical, research, or historical purposes.</li>
                </ul>
              </section>

              {/* Sharing & Disclosures */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing & Disclosures</h2>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Service Providers/Processors:</strong> Hosting, cloud, analytics, customer support, SMS/Email/WhatsApp gateways, payment processors, KYC/verification (where applicable).</li>
                  <li><strong>Venue/Coach/Academy Partners:</strong> To fulfil your bookings and related services.</li>
                  <li><strong>Affiliates/Group entities:</strong> For operations consistent with this Policy.</li>
                  <li><strong>Legal/Regulatory:</strong> Where required by law, court order, or to establish/exercise/defend legal claims.</li>
                  <li><strong>Business transfers:</strong> As part of merger/acquisition, subject to confidentiality and this Policy.</li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  We do not sell your Personal Information.
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. International (Cross-Border) Transfers</h2>
                <p className="text-gray-700">
                  You authorize us to transfer, store, and process your information in and outside India (including to countries that may have different data protection standards) with appropriate safeguards and only for purposes described in this Policy.
                </p>
              </section>

              {/* Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-green-600" />
                  6. Security
                </h2>
                <p className="text-gray-700">
                  We use reasonable technical and organizational measures to protect Personal Information (encryption in transit where appropriate, access controls, monitoring, audits, etc.). However, no electronic transmission or storage is 100% secure. We cannot guarantee absolute security and are not liable for breaches arising from factors beyond our reasonable control.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700">
                  We retain Personal Information for as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce agreements. We may retain anonymised data indefinitely.
                </p>
              </section>

              {/* Your Choices & Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                  8. Your Choices & Rights
                </h2>
                <p className="text-gray-700 mb-4">You may:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Access/Correct/Update</strong> your Personal Information via your account or by writing to us.</li>
                  <li><strong>Withdraw consent</strong> (prospectively) for specific processing, subject to service limitations.</li>
                  <li><strong>Delete/Deactivate account:</strong> Write to us; some data may be retained as required by law or legitimate interests (e.g., fraud prevention, accounting).</li>
                </ul>
                <p className="text-gray-700">
                  We will respond within a reasonable time frame.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Groundwale is intended for persons competent to contract. Minors may use the platform only through a parent/legal guardian who consents on their behalf. If you believe a minor has provided information without such consent, please contact us to delete it.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies & Similar Technologies</h2>
                <p className="text-gray-700">
                  We use cookies/SDKs and similar tools to enable core features (login, sessions), preferences, analytics, and fraud prevention. You can manage cookies in your browser/device settings, but some features may not function properly if disabled.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
                <p className="text-gray-700">
                  The Website/App may contain links to third-party sites/services. Their privacy practices are not governed by this Policy—please review their policies before use.
                </p>
              </section>

              {/* WhatsApp Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-green-600" />
                  12. WhatsApp Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  If you opt in, we may send OTPs, booking confirmations, reminders, and service updates via WhatsApp.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You can opt out anytime by replying "STOP" on WhatsApp or by changing communication preferences in the App.</li>
                  <li>Message frequency varies by your activity. Standard data/SMS charges may apply.</li>
                </ul>
              </section>

              {/* Grievance Redressal & Contact */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Grievance Redressal & Contact</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Grievance Officer (per applicable IT Rules):</h3>
                  <p className="text-gray-700 mb-2"><strong>Name:</strong> [Grievance Officer Name]</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> grievance@groundwale.com</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> [Registered/Corporate Address]</p>
                  <p className="text-gray-700"><strong>Working hours:</strong> Mon–Sat, 8:30 a.m. to 7:30 p.m. IST</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">General Privacy Queries / Data Requests:</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Email:</strong> privacy@groundwale.com / support@groundwale.com
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>To access/correct/update data or to know categories of third parties your data has been shared with (where applicable), write to privacy@groundwale.com from your registered email/phone.</li>
                    <li>We aim to respond within an appropriate timeframe.</li>
                  </ul>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to this Policy</h2>
                <p className="text-gray-700">
                  We may update this Policy from time to time. Material changes will be posted on this page with a revised Updated date. Please review periodically.
                </p>
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
