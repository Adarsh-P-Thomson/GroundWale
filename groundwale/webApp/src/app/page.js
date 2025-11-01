"use client"
import dynamic from "next/dynamic"

// ✅ Dynamically import client-only components to prevent hydration mismatches
const Header = dynamic(() => import("../../components/Header.jsx"), { ssr: false })
const Footer = dynamic(() => import("../../components/Footer.jsx"), { ssr: false })

// Home Section Components
const HeroSection = dynamic(() => import("../../components/Home/HeroSection.jsx"), { ssr: false })
const BookingCategories = dynamic(() => import("../../components/Home/BookingCategories.jsx"), { ssr: false })
const SportsShowcase = dynamic(() => import("../../components/Home/SportsShowcase.jsx"), { ssr: false })
const TestimonialsAndFeatures = dynamic(() => import("../../components/Home/TestimonialsAndFeatures.jsx"), { ssr: false })

// Other Components
const TurfBooking = dynamic(() => import("./Home/Turf.js"), { ssr: false })
const Faq = dynamic(() => import("./Home/Faq.js"), { ssr: false })

export default function Home() {
  return (
    <div suppressHydrationWarning className="min-h-screen">
      <Header />

      {/* Main Content with proper spacing */}
      <main>
        {/* Hero Section - Full viewport height */}
        <HeroSection />

        {/* Booking Categories Section */}
        <BookingCategories />

        {/* Sports Showcase */}
        <SportsShowcase />

        {/* Testimonials and Features */}
        <TestimonialsAndFeatures />

        {/* Turf Booking Section (if needed) */}
        {/* <TurfBooking /> */}

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
