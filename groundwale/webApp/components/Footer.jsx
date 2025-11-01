"use client"

import { Twitter, Youtube, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import PhoneImage from "../src/app/assets/footer/Phone.png"
import LogoImage from "../src/app/assets/footer/Logo.png"

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="newsletter-section">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Download the Groundwale App</h2>
            <p className="newsletter-description">
              Enjoy faster bookings, live updates, and special discounts available only on the app.
            </p>
          </div>
          <div className="app-buttons-wrapper">
            <div className="phone-image-container">
              <Image
                src={PhoneImage || "/placeholder.svg"}
                alt="Groundwale App on Phone"
                className="phone-image"
                priority
              />
            </div>
            <div className="app-download-section">
              {/* Your Logo */}
              <div className="logo-container">
                <Image src={LogoImage || "/placeholder.svg"} alt="Groundwale Logo" className="logo-image" priority />
              </div>
              <p className="tagline-text">Your Gateway to the Sports World</p>
              <div className="app-buttons-container">
                <span className="get-app-text">Download now</span>
                {/* Google Play Icon */}
                <a href="#" className="store-icon-link" aria-label="Get it on Google Play">
                  <svg
                    className="store-icon"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                </a>
                {/* Apple App Store Icon */}
                <a href="#" className="store-icon-link" aria-label="Download on the App Store">
                  <svg
                    className="store-icon"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-links-section">
          <div className="footer-column contact-column">
            <h3 className="column-title">
              Contact Us
              <span className="title-underline"></span>
            </h3>
            <a href="mailto:caliwines@email.com" className="contact-link">
              contact@groundwale.com
            </a>
            <a href="tel:+12345678900" className="contact-link">
              +91 0000000000
            </a>

            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">
              Company
              <span className="title-underline"></span>
            </h3>
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              FAQ
            </a>
            <a href="#" className="footer-link">
              Contact Us
            </a>
          </div>

          <div className="footer-column">
            <h3 className="column-title">
              Support & Legal
              <span className="title-underline"></span>
            </h3>
            <a href="#" className="footer-link">
              List Your Ground
            </a>
            <a href="#" className="footer-link">
              Cancellation Policy
            </a>
            <a href="/terms" className="footer-link">
              Terms & Conditions
            </a>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </div>
          <div className="footer-column instagram-column">
            <h3 className="column-title">
              Instagram
              <span className="title-underline"></span>
            </h3>
            <div className="instagram-grid">
              <div className="instagram-image" style={{ backgroundColor: "#8B6F47" }}></div>
              <div className="instagram-image" style={{ backgroundColor: "#2C2C2C" }}></div>
              <div className="instagram-image" style={{ backgroundColor: "#4A5F7F" }}></div>
              <div className="instagram-image" style={{ backgroundColor: "#6B8E7F" }}></div>
              <div className="instagram-image" style={{ backgroundColor: "#8B7F3F" }}></div>
              <div className="instagram-image" style={{ backgroundColor: "#6F3F3F" }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          background-color: #ffffff;
          color: #000000;
          padding: clamp(40px, 8vw, 80px) clamp(1.5rem, 5vw, 6cm) clamp(30px, 6vw, 60px);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .footer-content {
          max-width: 1600px;
          margin: 0 auto;
        }

        .newsletter-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
          gap: clamp(30px, 6vw, 80px);
          margin-bottom: clamp(30px, 5vw, 60px);
          align-items: center;
        }

        .newsletter-text {
          max-width: 600px;
        }

        .join-script {
          font-family: 'Brush Script MT', cursive;
          color: #ff9222;
          font-size: clamp(24px, 3vw, 32px);
          margin-bottom: 8px;
          font-weight: 400;
        }

        .newsletter-title {
          font-size: clamp(32px, 4.5vw, 42px);
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 clamp(12px, 2vw, 20px) 0;
          color: #000000;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .newsletter-description {
          color: #000000;
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.6;
          margin: 0;
        }
        
        .app-buttons-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: clamp(20px, 4vw, 40px);
          flex-wrap: wrap;
        }

        .phone-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: clamp(120px, 20vw, 220px);
          height: clamp(120px, 20vw, 220px);
          position: relative;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .phone-image-container:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .phone-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .app-download-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(12px, 2vw, 20px);
        }

        .logo-container {
          width: clamp(120px, 15vw, 160px);
          height: clamp(60px, 8vw, 80px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .tagline-text {
          font-size: clamp(14px, 1.6vw, 18px);
          color: #888888;
          margin: -10px 0 0 0;
          font-weight: 400;
          text-align: center;
        }

        .app-buttons-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: clamp(12px, 2vw, 20px);
          background-color: #0067bb;
          padding: clamp(10px, 1.5vw, 14px) clamp(12px, 1.8vw, 16px);
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .app-buttons-container:hover {
          background-color: #0052a3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 103, 187, 0.3);
        }

        .get-app-text {
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          white-space: nowrap;
        }

        .store-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
        }

        .store-icon-link:hover {
          transform: scale(1.15);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .store-icon {
          width: clamp(28px, 3.5vw, 36px);
          height: clamp(28px, 3.5vw, 36px);
          color: #ffffff;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e0e0e0 20%, #e0e0e0 80%, transparent);
          margin-bottom: clamp(30px, 5vw, 60px);
        }

        .footer-links-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
          gap: clamp(30px, 5vw, 60px);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .column-title {
          font-size: clamp(18px, 2vw, 20px);
          font-weight: 500;
          color: #000000;
          margin: 0 0 clamp(16px, 2.5vw, 24px) 0;
          position: relative;
          padding-bottom: 12px;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .title-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: #ff9222;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-column:hover .title-underline {
          width: 60px;
        }

        .footer-link, .contact-link {
          color: #000000;
          text-decoration: none;
          margin-bottom: clamp(10px, 1.5vw, 14px);
          font-size: clamp(13px, 1.4vw, 15px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          position: relative;
          width: fit-content;
        }
        
        .footer-link::before, .contact-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: #0088cc;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link:hover, .contact-link:hover {
          color: #0088cc;
          transform: translateX(4px);
        }
        
        .footer-link:hover::before, .contact-link:hover::before {
          width: 100%;
        }

        .contact-address {
          color: #000000;
          font-size: clamp(13px, 1.4vw, 15px);
          line-height: 1.6;
          margin: 0 0 clamp(20px, 3vw, 28px) 0;
        }

        .social-icons {
          display: flex;
          gap: clamp(10px, 1.5vw, 14px);
          flex-wrap: wrap;
        }

        .social-icon {
          width: clamp(36px, 4vw, 42px);
          height: clamp(36px, 4vw, 42px);
          border: 1.5px solid #ff9222;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff9222;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .social-icon:hover {
          background-color: #ff9222;
          color: #ffffff;
          transform: translateY(-3px) rotate(5deg);
          box-shadow: 0 6px 16px rgba(255, 146, 34, 0.3);
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 1.2vw, 12px);
          max-width: 320px;
        }

        .instagram-image {
          aspect-ratio: 1;
          width: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border-radius: 8px;
        }

        .instagram-image:hover {
          opacity: 0.8;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design - Fluid and Mobile Optimized */
        @media (max-width: 1400px) {
          .footer-links-section {
            gap: clamp(25px, 4vw, 50px);
          }
        }

        @media (max-width: 1200px) {
          .footer-container {
            padding: clamp(50px, 7vw, 70px) clamp(2rem, 4vw, 4cm) clamp(40px, 5vw, 50px);
          }
        }

        @media (max-width: 992px) {
          .newsletter-section {
            gap: clamp(30px, 5vw, 50px);
          }
          
          .app-buttons-wrapper {
            justify-content: center;
          }
          
          .footer-links-section {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
            gap: clamp(25px, 4vw, 40px);
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: clamp(40px, 6vw, 50px) clamp(1.5rem, 4vw, 2.5rem) clamp(30px, 4vw, 40px);
          }
          
          .newsletter-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .newsletter-text {
            text-align: center;
          }
          
          .app-buttons-wrapper {
            justify-content: center;
            flex-direction: column;
            gap: 25px;
          }
          
          .phone-image-container {
            width: clamp(140px, 25vw, 180px);
            height: clamp(140px, 25vw, 180px);
          }
          
          .footer-links-section {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 40px 1.5rem 30px;
          }
          
          .newsletter-title {
            font-size: clamp(28px, 6vw, 36px);
          }
          
          .app-download-section {
            width: 100%;
          }
          
          .app-buttons-container {
            flex-direction: row;
            gap: 12px;
            padding: 10px 12px;
          }
          
          .footer-links-section {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .instagram-grid {
            max-width: 100%;
            grid-template-columns: repeat(3, 1fr);
          }
          
          .social-icons {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 32px 1rem 24px;
          }
          
          .phone-image-container {
            width: clamp(100px, 30vw, 140px);
            height: clamp(100px, 30vw, 140px);
          }
          
          .app-buttons-wrapper {
            gap: 20px;
          }
          
          .get-app-text {
            font-size: 16px;
          }
          
          .store-icon {
            width: 24px;
            height: 24px;
          }
          
          .footer-links-section {
            gap: 28px;
          }
        }

        /* Smooth animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  )
}
