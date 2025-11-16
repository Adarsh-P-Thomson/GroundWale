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
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
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
          padding: 80px 6cm 60px 6cm;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .footer-content {
          max-width: 100%;
          margin: 0 auto;
        }

        .newsletter-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 60px;
          align-items: center;
        }

        .newsletter-text {
          max-width: 500px;
        }

        .join-script {
          font-family: 'Brush Script MT', cursive;
          color: #ff9222;
          font-size: 32px;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .newsletter-title {
          font-size: 42px;
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 20px 0;
          color: #000000;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .newsletter-description {
          color: #000000;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }
        
        .app-buttons-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 40px;
        }

        .phone-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 6cm;
          height: 6cm;
          position: relative;
          left: -1cm;
        }

        .phone-image {
          width: 6cm;
          height: 6cm;
          object-fit: cover;
        }

        .app-download-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-container {
          width: 160px;
          height: 80px;
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
          font-size: 18px;
          color: #888888;
          margin: -10px 0 0 0;
          font-weight: 400;
        }

        .app-buttons-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          background-color: #0067bb;
          padding: 12px 14px;
          border-radius: 8px;
        }

        .get-app-text {
          font-size: 22px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
        }

        .store-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .store-icon-link:hover {
          transform: scale(1.1);
        }

        .store-icon {
          width: 36px;
          height: 36px;
          color: #ffffff;
        }

        .divider {
          height: 1px;
          background-color: #e0e0e0;
          margin-bottom: 60px;
        }

        .footer-links-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
          gap: 60px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .column-title {
          font-size: 20px;
          font-weight: 400;
          color: #000000;
          margin: 0 0 24px 0;
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
        }

        .footer-link, .contact-link {
          color: #000000;
          text-decoration: none;
          margin-bottom: 14px;
          font-size: 15px;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover, .contact-link:hover {
          color: #0088CC;
        }

        .contact-address {
          color: #000000;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 28px 0;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border: 1px solid #ff9222;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff9222;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background-color: #ff9222;
          color: #ffffff;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .instagram-image {
          aspect-ratio: 1;
          width: 100%;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }

        .instagram-image:hover {
          opacity: 0.8;
        }

        @media (max-width: 1200px) {
          .footer-container {
            padding: 60px 3cm 50px 3cm;
          }
          .footer-links-section {
            gap: 40px;
          }
          .phone-image-container {
            width: 5cm;
            height: 5cm;
          }
          .phone-image {
            width: 5cm;
            height: 5cm;
          }
        }

        @media (max-width: 992px) {
          .footer-container {
            padding: 50px 40px 40px 40px;
          }
          .newsletter-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .app-buttons-wrapper {
            justify-content: flex-start;
          }
          .phone-image-container {
            width: 4.5cm;
            height: 4.5cm;
          }
          .phone-image {
            width: 4.5cm;
            height: 4.5cm;
          }
          .footer-links-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          .instagram-column {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 40px 24px 32px 24px;
          }
          .newsletter-title {
            font-size: 32px;
          }
          .app-buttons-wrapper {
            flex-direction: column;
            gap: 30px;
          }
          .phone-image-container {
            width: 4cm;
            height: 4cm;
          }
          .phone-image {
            width: 4cm;
            height: 4cm;
          }
          .footer-links-section {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .instagram-column {
            grid-column: span 1;
          }
          .instagram-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 320px;
          }
        }
      `}</style>
    </footer>
  )
}
