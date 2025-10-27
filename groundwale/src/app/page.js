"use client"
import dynamic from "next/dynamic"

// ✅ Dynamically import client-only components to prevent hydration mismatches
const Header = dynamic(() => import("../../components/Header.js"), { ssr: false })
const Footer = dynamic(() => import("../../components/Footer.js"), { ssr: false })
const TurfBooking = dynamic(() => import("./Home/Turf.js"), { ssr: false })
const Faq = dynamic(() => import("./Home/Faq.js"), { ssr: false })

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Header />

      <div style={{ paddingTop: "80px" }}>
        <Faq />
        <Footer />
      </div>
    </div>
  )
}
