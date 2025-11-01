"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  Trophy, 
  Clock, 
  Shield,
  ArrowRight,
  Sparkles
} from "lucide-react"

const bookingCategories = [
  {
    id: "grounds",
    title: "Book Grounds",
    description: "Premium sports grounds for cricket, football, and more",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:from-green-600 hover:to-emerald-700",
    image: "🏟️",
    features: ["Verified Venues", "Instant Booking", "Best Prices"]
  },
  {
    id: "turfs",
    title: "Book Turfs",
    description: "Artificial and natural turf facilities for all sports",
    icon: Trophy,
    color: "from-blue-500 to-cyan-600",
    hoverColor: "hover:from-blue-600 hover:to-cyan-700",
    image: "⚽",
    features: ["Quality Turf", "Night Lighting", "All Weather"]
  },
  {
    id: "academies",
    title: "Join Academies",
    description: "Professional sports academies and training centers",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600",
    hoverColor: "hover:from-purple-600 hover:to-pink-700",
    image: "🎓",
    features: ["Expert Training", "Certified Programs", "All Age Groups"]
  },
  {
    id: "coaches",
    title: "Hire Coaches",
    description: "Certified coaches for personalized training sessions",
    icon: Users,
    color: "from-orange-500 to-red-600",
    hoverColor: "hover:from-orange-600 hover:to-red-700",
    image: "🏆",
    features: ["Certified Coaches", "Flexible Schedule", "Custom Plans"]
  },
]

export default function BookingCategories() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Sports Experience
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our wide range of sports facilities and services
          </p>
        </div>

        {/* Booking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {bookingCategories.map((category) => {
            const Icon = category.icon
            return (
              <Link 
                href={`/${category.id}`} 
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-6 sm:p-8">
                    {/* Icon/Emoji */}
                    <div className="mb-4">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        {category.image}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className={`flex items-center gap-2 font-semibold text-sm bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                      <span>Explore Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{color: 'currentColor'}} />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient rounded-2xl pointer-events-none`}></div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Groundwale?
                </h3>
                <p className="text-blue-100 text-base sm:text-lg mb-6">
                  We make sports booking simple, reliable, and accessible for everyone.
                </p>
                <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  Start Booking Today
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Clock, title: "24/7 Support", desc: "Always here to help" },
                  { icon: Shield, title: "Secure Payments", desc: "100% safe & secure" },
                  { icon: MapPin, title: "500+ Venues", desc: "Across 50+ cities" },
                  { icon: Trophy, title: "Best Prices", desc: "Guaranteed lowest rates" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                      <ItemIcon className="w-8 h-8 mb-3 text-blue-200" />
                      <h4 className="font-bold mb-1 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-blue-100">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
