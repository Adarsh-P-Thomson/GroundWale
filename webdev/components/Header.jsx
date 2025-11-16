"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { X, User, CheckCircle, AlertCircle, Search } from "lucide-react"
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball"
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import "./Header.css"

import LogoImage from "../src/app/assets/footer/Logo.png"
function SearchBar() {
  const games = ["Cricket", "Football", "Pickleball"]
  const [currentGameIndex, setCurrentGameIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentGame = games[currentGameIndex]
    const typingSpeed = isDeleting ? 100 : 150

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentGame.length) {
          setDisplayText(currentGame.substring(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentGame.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentGameIndex((prevIndex) => (prevIndex + 1) % games.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentGameIndex, games])

  return (
    <div className="search-bar-container">
      <Search size={20} className="search-icon" />
      <div className="search-text">
        Search For <span className="animated-game">{displayText}</span>
        <span className="cursor-blink">|</span>
      </div>
    </div>
  )
}

function Toast({ message, type = "success", onClose, autoClose = 3000 }) {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, autoClose)
      return () => clearTimeout(timer)
    }
  }, [autoClose, onClose])

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {type === "success" ? (
          <CheckCircle size={20} className="toast-icon" />
        ) : (
          <AlertCircle size={20} className="toast-icon" />
        )}
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  )
}

function LoginModal({ isOpen, onClose, onLoginSuccess, onInvalidOtp }) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [otpSent, setOtpSent] = useState(false)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    let interval
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timer])

  if (!isOpen) return null

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      setPhoneNumber(value)
    }
  }

  const handleSendOtp = (e) => {
    e.preventDefault()
    if (phoneNumber.length === 10) {
      console.log("Send OTP to: +91" + phoneNumber)
      setOtpSent(true)
      setTimer(60)
    }
  }

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1)
    }

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handleOtpPaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newOtp = [...otp]

    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i]
    }

    setOtp(newOtp)

    if (pastedData.length > 0) {
      const lastIndex = Math.min(pastedData.length - 1, 5)
      const lastInput = document.getElementById(`otp-${lastIndex}`)
      if (lastInput) lastInput.focus()
    }
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault()
    const otpValue = otp.join("")
    if (otpValue === "123456") {
      console.log("OTP verified successfully for phone: +91" + phoneNumber)
      onLoginSuccess()
      onClose()
    } else {
      onInvalidOtp()
      setOtp(["", "", "", "", "", ""])
    }
  }

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google")
  }

  const handleResendOtp = () => {
    setOtp(["", "", "", "", "", ""])
    setTimer(60)
    console.log("Resend OTP to: +91" + phoneNumber)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="left-panel">
            <div className="quote-label">SPORTS TURF BOOKINGS</div>
            <div className="gradient-background"></div>
            <div className="content-text">
              <h1 className="main-heading">
                Book Your
                <br />
                Perfect
                <br />
                Turf
              </h1>
              <p className="sub-text">
                Premium sports turf facilities with professional maintenance,
                <br />
                perfect lighting, and all amenities for your game.
              </p>
              <div
                className="turf-features"
                style={{ marginTop: "24px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
              >
                <div style={{ marginBottom: "12px" }}>✓ Professional Grade Turf</div>
                <div style={{ marginBottom: "12px" }}>✓ 24/7 Availability</div>
                <div>✓ Expert Maintenance</div>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="form-container">
              <h2 className="welcome-title">Welcome Back</h2>
              <p className="welcome-subtitle">
                {!otpSent ? "Enter your phone number to receive OTP" : "Enter the 6-digit OTP sent to your phone"}
              </p>

              {!otpSent ? (
                <form onSubmit={handleSendOtp}>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <div className="phone-input-wrapper">
                      <span className="country-code">+91</span>
                      <input
                        type="tel"
                        placeholder="Enter 10-digit number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="form-input phone-input"
                        required
                        maxLength="10"
                        pattern="\d{10}"
                      />
                    </div>
                  </div>

                  <button type="submit" className="sign-in-button" disabled={phoneNumber.length !== 10}>
                    Send OTP
                  </button>

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  <button type="button" className="google-button" onClick={handleGoogleSignIn}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.336z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                        fill="#EA4335"
                      />
                    </svg>
                    Sign In with Google
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp}>
                  <div className="form-group">
                    <label className="form-label">Enter OTP</label>
                    <div className="otp-container">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          onPaste={index === 0 ? handleOtpPaste : undefined}
                          className="otp-input"
                          required
                        />
                      ))}
                    </div>
                    <div className="phone-display">Sent to +91 {phoneNumber}</div>
                  </div>

                  <button type="submit" className="sign-in-button" disabled={otp.join("").length !== 6}>
                    Verify OTP
                  </button>

                  <div className="resend-section">
                    {timer > 0 ? (
                      <span className="timer-text">Resend OTP in {timer}s</span>
                    ) : (
                      <>
                        <button type="button" className="resend-link" onClick={handleResendOtp}>
                          Resend OTP
                        </button>
                        <span className="separator">|</span>
                        <button type="button" className="resend-link" onClick={() => setOtpSent(false)}>
                          Change Number
                        </button>
                      </>
                    )}
                  </div>

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  <button type="button" className="google-button" onClick={handleGoogleSignIn}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.336z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                        fill="#EA4335"
                      />
                    </svg>
                    Sign In with Google
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [notification, setNotification] = useState(null)
  const router = useRouter()

  const handleLoginSuccess = () => {
    setNotification({
      type: "success",
      message: "Login successful! Redirecting to your profile...",
    })
    setIsLoggedIn(true)
    setModalOpen(false)

    setTimeout(() => {
      router.push("/userprofile")
    }, 3000)
  }

  const handleInvalidOtp = () => {
    setNotification({
      type: "error",
      message: "Invalid OTP. Demo OTP is: 123456",
    })
  }

  const closeNotification = () => {
    setNotification(null)
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Image
              src={LogoImage || "/placeholder.svg"}
              alt="Company Logo"
              height={48}
              width={48}
              style={{
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
          </div>

          <SearchBar />

          <nav className="nav flex items-center gap-10">
            <Link href="/Grounds" className="nav-link flex items-center gap-2">
              <SportsBaseballIcon style={{ fontSize: 30 }} /> {/* Slightly bigger than medium */}
              <span>Book</span>
            </Link>

            <Link href="#" className="nav-link flex items-center gap-2">
              <DirectionsRunIcon style={{ fontSize: 30 }} /> {/* Slightly bigger than medium */}
              <span>Train</span>
            </Link>
          </nav>

          <div className="buttons">
            {isLoggedIn ? (
              <Link href="/userprofile" className="btn btn-user-icon" title="Go to Profile">
                <User size={20} />
              </Link>
            ) : (
              <button className="btn btn-solid" onClick={() => setModalOpen(true)}>
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onInvalidOtp={handleInvalidOtp}
      />

      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
          autoClose={notification.type === "success" ? 3000 : 4000}
        />
      )}
    </>
  )
}
