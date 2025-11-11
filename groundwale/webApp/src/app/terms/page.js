"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { FileText, Calendar, ArrowLeft } from "lucide-react"

const Header = dynamic(() => import("../../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../../components/Footer.jsx"), { ssr: false })

export default function TermsAndConditions() {
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction & Acceptance</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to the Groundwale mobile application ("App") and website (www.groundwale.com, the "Website"). The domain name groundwale.com and the App are owned and operated by [Company Name], a company incorporated under the Companies Act, 2013, bearing CIN [CIN] and having its registered office at [Registered Address] ("Groundwale", "we", "us", "our").
                </p>
                <p className="text-gray-700 mb-4">
                  These Terms of Use ("Terms") govern your access to and use of the Website, App and services offered through them. By accessing or using the Website/App or any services, you agree to be bound by these Terms and all policies referenced here (including our Privacy Policy, Cancellation & Refund Policy, and any product-specific policies). If you do not agree, please do not use the Website/App.
                </p>
                <p className="text-gray-700 italic text-sm">
                  <strong>Regulatory note:</strong> These Terms are published in accordance with the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (as amended), and constitute an electronic record. No physical or digital signatures are required.
                </p>
              </section>

              {/* Amendment */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Amendment</h2>
                <p className="text-gray-700">
                  We may modify these Terms at any time at our sole discretion. Updated Terms will be posted on the Website/App with a new "Last updated" date. Your continued use after changes are posted constitutes acceptance of the updated Terms. New features/tools will also be subject to these Terms.
                </p>
              </section>

              {/* Eligibility */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
                <p className="text-gray-700">
                  Use of the Website/App is permitted only to persons competent to contract under the Indian Contract Act, 1872. Minors (under 18) may use the services only through a parent/legal guardian who accepts these Terms on the minor's behalf and assumes all risk/liability. We may suspend or terminate access if we believe you are not competent to contract.
                </p>
              </section>

              {/* Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services</h2>
                <p className="text-gray-700 mb-4">
                  Groundwale is an online platform that helps users discover and book sports venues (grounds/turfs/courts), coaches, academies, and related amenities/services listed by independent third-party providers ("Service Providers"). Our services include browsing listings, checking availability, making bookings/registrations, and facilitating payments (collectively, the "Services").
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Booking Process:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>You can select the sport, venue/coach/academy, date, time, location, and other required details ("Original Booking").</li>
                  <li>You must pay the applicable Fees displayed at checkout using the payment options provided in the App/Website.</li>
                  <li>Upon successful payment, you will receive a system-generated Provisional Confirmation.</li>
                  <li>Within 48 working hours, we will either issue a Final Confirmation (subject to Service Provider availability) or contact you with alternate options (time/day/area/Service Provider).</li>
                  <li>If you accept an alternate option, you must confirm a Revised Booking; any fee difference must be settled (extra payable by you or refundable by us as per the Refund section).</li>
                  <li>If suitable alternates are not accepted by you, you may cancel the Provisional Confirmation for a refund as per the Refund section below.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                  <p className="text-gray-700 font-semibold mb-2">Clarification:</p>
                  <p className="text-gray-700">
                    Groundwale is a facilitator/marketplace. The actual services (venue access, coaching sessions, etc.) are rendered by the Service Providers, not by Groundwale. We do not guarantee outcomes or service quality and are not responsible for performance/non-performance by Service Providers.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">For Service Providers:</h3>
                <p className="text-gray-700 mb-2">If you list with Groundwale, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Honour bookings/registrations per your engagement terms with us;</li>
                  <li>Not cancel/reschedule accepted bookings except as permitted in your engagement terms or with our prior written approval;</li>
                  <li>Preferentially honour booking requests received via Groundwale;</li>
                  <li>Keep your schedules, prices, and listing data accurate and up-to-date.</li>
                </ul>
              </section>

              {/* Pricing, Payments & Refunds */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pricing, Payments & Refunds</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Prices are shown in Indian Rupees and may be inclusive/exclusive of taxes as indicated at checkout (e.g., GST). Prices may change without notice until a Provisional Confirmation is issued.</li>
                  <li>Payments are accepted only via the payment gateways/modes provided (e.g., cards, UPI, net-banking, wallets). By providing a payment method, you represent you are authorized to use it and authorize us/our processor to charge the total amount shown (including taxes/fees).</li>
                  <li>If the payment method is invalid or cannot be verified, your booking may be suspended or cancelled until the issue is resolved.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fee differences for Revised Booking:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>If Revised Booking fee {">"} Original Booking fee, you must pay the difference to receive Final Confirmation.</li>
                  <li>If Revised Booking fee {"<"} Original Booking fee, we will refund the difference as per this section.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Refunds:</h3>
                <p className="text-gray-700 mb-2">You are eligible for a refund only when:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Groundwale is unable to secure Final Confirmation for your Original Booking; or</li>
                  <li>You decline the alternates offered by us (before Final Confirmation); or</li>
                  <li>A differential refund is due because the Revised Booking costs less.</li>
                </ol>

                <p className="text-gray-700 mb-4">
                  <strong>Refund timelines:</strong> Refunds (full or differential) will be initiated within 7 working days from (i) your decline of alternates; or (ii) confirmation of Revised Booking (for differential); or (iii) our inability to confirm the Original Booking. Your bank/issuer may take additional time to credit funds.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-gray-700 font-semibold">
                    Except as explicitly provided above, payments are non-refundable. Any goodwill credits/adjustments are at our sole discretion.
                  </p>
                </div>
              </section>

              {/* Interruptions & Availability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Interruptions & Availability</h2>
                <p className="text-gray-700">
                  We aim for 24×7 availability but the Website/App may be unavailable due to maintenance, upgrades, outages, or events beyond our control. We may change, suspend, or discontinue any feature/content or limit Services to any person/region at our discretion.
                </p>
              </section>

              {/* User Account */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Account</h2>
                <p className="text-gray-700 mb-4">
                  To book, you must create an account ("Account") using an email/phone login or approved social sign-in. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Provide true, accurate, current and complete information and keep it updated;</li>
                  <li>Maintain the confidentiality of your credentials;</li>
                  <li>Be responsible for all activity under your Account;</li>
                  <li>Notify us promptly of any unauthorized use/security breach;</li>
                  <li>Log out after each session.</li>
                </ul>
                <p className="text-gray-700">
                  We may refuse, suspend, or terminate Accounts at our discretion (e.g., false information, multiple/fraudulent accounts). You can request deactivation via the App/Website or by contacting [support email].
                </p>
              </section>

              {/* Acceptable Use */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Acceptable Use & User Content</h2>
                <p className="text-gray-700 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Use the Services for unlawful purposes or in violation of these Terms;</li>
                  <li>Post/upload content that is illegal, obscene, defamatory, infringing, invasive of privacy, hateful, or otherwise objectionable;</li>
                  <li>Impersonate, misrepresent affiliation, or create multiple/false accounts;</li>
                  <li>Infringe third-party IPR; upload viruses/malicious code; scrape, crawl, data-mine, or attempt unauthorized access;</li>
                  <li>Copy, mirror, frame, or create derivative works from the Website/App or its content;</li>
                  <li>Overload or interfere with the platform's operation;</li>
                  <li>Download other users' content without written consent.</li>
                </ul>
                <p className="text-gray-700">
                  We may remove content or suspend/terminate access for violations. You are solely responsible for any content you submit and its consequences.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All rights in and to the Website/App, software, design, compilation, text, graphics, logos, icons, images, audio/video, data, and other materials are owned by or licensed to Groundwale and protected by Indian and international IPR laws. Except for a limited, personal, non-transferable, non-exclusive license to access and use the Website/App for personal non-commercial purposes, no rights are granted.
                </p>
                <p className="text-gray-700 mb-4">
                  You will not copy, reproduce, distribute, publish, display, perform, modify, create derivative works from, reverse engineer, or exploit any content, materials, or software without our prior written consent.
                </p>
                <p className="text-gray-700">
                  If you submit content to Groundwale (e.g., reviews, photos), you grant us a worldwide, perpetual, irrevocable, royalty-free, transferable, sublicensable license to use, reproduce, adapt, publish, display, distribute, and create derivative works from such content for any purpose connected to our Services and business.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links & Services</h2>
                <p className="text-gray-700">
                  Listings and links may lead to third-party sites/services not controlled by Groundwale. We are not responsible for their content, policies, or practices. Please review their terms and privacy policies before use.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy</h2>
                <p className="text-gray-700 mb-4">
                  We care about your privacy. Please read our Privacy Policy (incorporated by reference) to understand how we collect, use, share, and protect your information, including any sensitive personal data and financial information, in line with the IT Act, 2000 and applicable rules.
                </p>
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read our Privacy Policy →
                </Link>
              </section>

              {/* WhatsApp Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. WhatsApp Policy</h2>
                <p className="text-gray-700 mb-4">
                  If you opt in, we may contact you via WhatsApp for OTPs, booking confirmations, reminders, service updates, and support messages. Message frequency varies by activity. You can opt out any time by replying "STOP" or managing preferences in the App. Standard carrier/data charges may apply.
                </p>
              </section>

              {/* Warranties & Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Warranties & Disclaimers</h2>
                <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mb-4">
                  <p className="text-gray-700 uppercase font-semibold mb-2">
                    THE WEBSITE/APP AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING (WITHOUT LIMITATION) WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Groundwale is a facilitator and does not (a) employ, recommend, or endorse users or Service Providers; (b) control or guarantee the acts/omissions or quality of services of Service Providers; or (c) guarantee availability, safety, condition, or suitability of venues/services. Any use of Services is at your sole risk.
                </p>
                <p className="text-gray-700">
                  Groundwale is not responsible for personal injury, property damage, or any loss arising during venue use, play, training, travel to/from venues, or interactions with Service Providers or other users.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Limitation of Liability</h2>
                <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mb-4">
                  <p className="text-gray-700 uppercase font-semibold">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, GROUNDWALE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY IN ANY CASE IS LIMITED TO THE TOTAL FEES RECEIVED FROM YOU FOR THE BOOKING GIVING RISE TO THE CLAIM.
                  </p>
                </div>
                <p className="text-gray-700 text-sm italic">
                  Nothing limits liability for gross negligence, fraud, or willful misconduct.
                </p>
              </section>

              {/* Indemnity */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Indemnity</h2>
                <p className="text-gray-700">
                  You agree to defend, indemnify, and hold harmless Groundwale, its affiliates, directors, officers, employees, and agents from and against all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to: (i) your use of the Services; (ii) your breach of these Terms or applicable laws; (iii) your content; (iv) any interaction/dispute with Service Providers or other users; or (v) infringement of third-party rights.
                </p>
              </section>

              {/* Suspension & Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Suspension & Termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate your Account or access to the Services immediately (with or without notice) if you breach these Terms, applicable law, engage in fraud/abuse, or if your use disrupts our operations or risks harm to others. Upon termination, your right to use the Services ceases immediately, without liability to you or third parties. Obligations that by their nature should survive (e.g., IP, indemnity, limitation of liability, governing law) will survive.
                </p>
              </section>

              {/* Compliance with Laws */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Compliance with Laws</h2>
                <p className="text-gray-700">
                  You are solely responsible for complying with all applicable laws, regulations, and codes (including local authority permissions, where applicable) in connection with your use of the Services, your content, and any activity at booked venues.
                </p>
              </section>

              {/* Communications */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Emails, Newsletters & Notifications</h2>
                <p className="text-gray-700">
                  By registering, you consent to receive transactional emails/SMS/WhatsApp and, where you opt in, marketing communications. You can unsubscribe from marketing communications via the provided links or App settings. Transactional communications (e.g., OTPs, confirmations) are necessary for service delivery.
                </p>
              </section>

              {/* Reporting & Grievances */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Reporting Abuse & Grievances</h2>
                <p className="text-gray-700 mb-4">
                  To report abuse, infringement, or policy violations, contact [legal/compliance email]. We review reports and may remove content or take action at our discretion.
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Grievance Officer (per IT Rules, 2021):</h3>
                  <p className="text-gray-700 mb-2"><strong>Name:</strong> [Grievance Officer Name]</p>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> grievance@groundwale.com</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> [Office Address]</p>
                  <p className="text-gray-700"><strong>Working hours:</strong> Monday–Saturday, 8:30 a.m. to 7:30 p.m. IST</p>
                </div>
              </section>

              {/* Notices */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Notices</h2>
                <p className="text-gray-700">
                  Unless specified otherwise, we may send notices to the email/phone in your Account. You may send notices to us at [official notice email] or [postal address]. Email notices are deemed delivered upon transmission; postal/courier notices upon receipt.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Disputes, Governing Law & Jurisdiction</h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of India. Subject to applicable law, courts at [City, State—e.g., Mumbai, Maharashtra] shall have exclusive jurisdiction over all disputes arising out of or relating to the Services/Terms. We may also bring proceedings where you reside, do business, or have assets.
                </p>
              </section>

              {/* Miscellaneous */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">22. Miscellaneous</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>No waiver of any breach shall be deemed a waiver of any other breach.</li>
                  <li>Rights and remedies are cumulative and in addition to those at law/equity.</li>
                  <li>If any provision is found invalid/unenforceable, the remainder will continue in full force and effect.</li>
                  <li>These Terms constitute the entire agreement between you and Groundwale regarding the Services and supersede all prior communications.</li>
                  <li>You may not assign these Terms without our prior written consent. We may assign/transfer our rights and obligations without restriction.</li>
                </ul>
              </section>

              {/* Annexure - Cancellations */}
              <section className="mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Annexure A — Cancellations, Rescheduling & Venue Rules</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. User-initiated cancellations (after Final Confirmation):</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>≥48 hours before slot:</strong> Credit to Groundwale wallet (valid 6 months) or [x%] refund to original payment method.</li>
                  <li><strong>{"<"}48 hours and ≥24 hours:</strong> [y%] credit; no cash refund.</li>
                  <li><strong>{"<"}24 hours:</strong> No refund/credit.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Rescheduling:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Allowed once per booking up to 24 hours before the slot, subject to availability; price differences apply.</li>
                  <li>Multiple reschedules may attract a reschedule fee of [₹ amount / %].</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Rain/Weather & Force Majeure:</h3>
                <p className="text-gray-700 mb-4">
                  If a venue becomes unplayable due to weather or force majeure, we will offer reschedule or full credit; cash refunds only where reschedule/credit is not feasible.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. No-show & Late Arrival:</h3>
                <p className="text-gray-700 mb-4">
                  No-shows or arrival 15+ minutes late may result in denial of entry with no refund.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Venue rules:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Follow venue footwear/equipment rules; damaging property may lead to penalties recoverable from the user.</li>
                  <li>Alcohol, drugs, smoking, and abusive behaviour are prohibited. Venues may deny entry for safety reasons.</li>
                </ul>
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
