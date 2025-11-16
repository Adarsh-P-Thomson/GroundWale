"use client"
import dynamic from "next/dynamic"

// ✅ Dynamically import client-only components to prevent hydration mismatches
const Header = dynamic(() => import("../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../components/Footer.jsx"), { ssr: false })
const Navbar = dynamic(() => import("../../components/Navbar.jsx"), { ssr: false })
const TurfBooking = dynamic(() => import("./Home/Turf.jsx"), { ssr: false })
const Faq = dynamic(() => import("./Home/Faq.jsx"), { ssr: false })
const Top = dynamic(() => import("./Home/Top.jsx"), { ssr: false }) // ✅ Imported Top section

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        {/* ✅ Added Top Section */}
        <Top />

        {/* Other sections */}
        <Faq />
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}
