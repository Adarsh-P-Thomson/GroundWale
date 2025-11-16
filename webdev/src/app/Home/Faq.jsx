"use client"

import { useState } from "react"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  const faqs = [
    {
      question: "How can I book a ground on Groundwale?",
      answer:
        "You can easily search for nearby grounds by sport or location, check real-time slot availability, and book instantly. Simply select your preferred slot, pay securely through Razorpay or your Groundwale Wallet, and your booking will be confirmed immediately.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can manage all your bookings from the My Bookings section on our website or app. Refunds are processed as per the Groundwale Cancellation Policy: 100% refund if cancelled 24 hours before your slot, 50% refund within 6–24 hours, No refund within 6 hours of playtime.",
    },
    {
      question: "How does the Groundwale Wallet work?",
      answer:
        "All refunds and cashback amounts are credited to your Groundwale Wallet. You can use your wallet balance for your next booking or combine it with an online payment during checkout for convenience.",
    },
    {
      question: "How do ground owners list their venues on Groundwale?",
      answer:
        "Ground owners can register through the Groundwale Partner Dashboard. After verification, they can add their listings, manage slot timings, set pricing, view bookings, and track settlements — all from a single dashboard.",
    },
    {
      question: "How can I contact Groundwale support?",
      answer:
        "For any help, visit our Help & Support page or email us at support@groundwale.com. Our support team is available 7 days a week to assist you with bookings, payments, refunds, and general inquiries.",
    },
  ]

  const toggleFq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-left">
            <div className="faq-header">
              <h3 className="faq-subtitle">FAQ</h3>
              <div className="faq-underline"></div>
              <h1 className="faq-title">Have a Question?</h1>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${openIndex === index ? "active" : ""}`}
                    onClick={() => toggleFq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`faq-answer-wrapper ${openIndex === index ? "open" : ""}`}>
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-right">
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto-format&fit=crop"
              alt="Various sports balls"
              className="faq-image"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-wrapper {
          background: #ffffff;
          min-height: 100vh;
          padding: 0 6cm 5rem; /* Changed: Top padding is now 0 */
          font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .faq-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .faq-left {
          padding-right: 1.5rem;
        }

        .faq-header {
          margin-bottom: 3rem;
        }
        
        .faq-underline {
            width: 50px;
            height: 4px;
            background-color: #ff9222;
            border-radius: 2px;
        }

        .faq-subtitle {
          font-size: 3.5rem;
          font-weight: 400;
          color: #ff9222;
          margin-bottom: 0.25rem;
          letter-spacing: 0.05em;
        }

        .faq-title {
          font-size: 3.5rem;
          font-weight: 400;
          color: #000000;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.4rem 0;
          background: none;
          border: none;
          color: #000000;
          font-size: 1.4rem;
          font-weight: 400;
          text-align: left;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          letter-spacing: -0.01em;
          position: relative;
        }

        .faq-question:hover {
          color: #ff9222;
          transform: translateX(5px);
        }

        .faq-question.active {
          color: #ff9222;
        }

        .faq-question:active {
          transform: scale(0.98);
        }

        .faq-icon {
          font-size: 2rem;
          font-weight: 300;
          color: #ff9222;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 30px;
          text-align: center;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer-wrapper.open {
          max-height: 500px;
        }

        .faq-answer {
          padding: 0 0 1.5rem 0;
          color: rgba(0, 0, 0, 0.7);
          font-size: 1.05rem;
          line-height: 1.8;
          letter-spacing: 0.01em;
          opacity: 0;
          transform: translateY(-15px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer-wrapper.open .faq-answer {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }

        .faq-right {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 550px;
          margin-top: 2.5cm;
        }

        .faq-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        @media (max-width: 1200px) {
          .faq-wrapper {
            padding: 4rem 3cm;
          }

          .faq-content {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }

          .faq-left {
            padding-right: 0;
          }

          .faq-right {
            height: 450px;
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          .faq-wrapper {
            padding: 3rem 2cm;
          }

          .faq-title, .faq-subtitle {
            font-size: 2.5rem;
          }

          .faq-question {
            font-size: 1.15rem;
            padding: 1.2rem 0;
          }

          .faq-answer {
            font-size: 1rem;
            line-height: 1.7;
            padding: 0 0 1.2rem 0;
          }

          .faq-right {
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .faq-wrapper {
            padding: 2rem 1.5cm;
          }

          .faq-container {
            width: 100%;
            padding: 0;
          }

          .faq-content {
            gap: 2.5rem;
          }

          .faq-header {
            margin-bottom: 2rem;
          }

          .faq-title, .faq-subtitle {
            font-size: 2rem;
          }
          
          .faq-question {
            font-size: 1rem;
            padding: 1.1rem 0;
          }

          .faq-question span:first-child {
            padding-right: 1rem;
          }

          .faq-icon {
            font-size: 1.5rem;
            min-width: 25px;
          }

          .faq-answer {
            font-size: 0.9rem;
            padding: 0 0 1.2rem 0;
            line-height: 1.7;
          }
          
          .faq-right {
            height: 350px;
          }
        }
      `}</style>
    </div>
  )
}