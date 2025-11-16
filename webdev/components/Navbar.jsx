"use client"

import { useState } from "react"
import { Home, Zap, Dumbbell, Trophy, User } from "lucide-react"
import "./Navbar.css"

// The 'onLoginClick' prop is no longer needed, so it has been removed.
export default function Navbar({ isLoggedIn }) {
  const [activeTab, setActiveTab] = useState("home")

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      href: "/",
    },

    {
      id: "train",
      label: "Train",
      icon: Dumbbell,
      href: "/train",
    },
    {
      id: "book",
      label: "Book",
      icon: Trophy,
      href: "/Grounds",
    },
    {
      id: "login",
      label: "Login",
      icon: User,
      href: isLoggedIn ? "/userprofile" : null,
    },
  ]

  const handleNavClick = (item) => {
    setActiveTab(item.id)
    if (item.id === "login" && !isLoggedIn) {
      // --- MODIFICATION START ---
      // Find the "Login / Signup" button in Header.js by its unique classes
      const headerLoginButton = document.querySelector("button.btn.btn-solid")

      if (headerLoginButton) {
        // Programmatically click the header's button to trigger the modal
        headerLoginButton.click()
      } else {
        // Fallback in case the button isn't found
        console.error("Could not find the header login button to trigger.")
      }
      // --- MODIFICATION END ---
    } else if (item.href) {
      window.location.href = item.href
    }
  }

  return (
    <nav className="bottom-navbar">
      <div className="navbar-content">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              <Icon size={24} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}