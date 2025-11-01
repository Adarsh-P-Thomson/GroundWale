"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Cricket Enthusiast",
    avatar: "👨‍💼",
    rating: 5,
    comment: "Groundwale made booking our weekend cricket matches so easy! The turfs are well-maintained and the pricing is transparent.",
    location: "Mumbai"
  },
  {
    name: "Priya Sharma",
    role: "Football Coach",
    avatar: "👩‍🏫",
    rating: 5,
    comment: "As a coach, I've been using Groundwale to book training venues for my academy. The variety of options and instant confirmation are fantastic!",
    location: "Bangalore"
  },
  {
    name: "Arjun Patel",
    role: "Student",
    avatar: "👨‍🎓",
    rating: 5,
    comment: "Found an amazing badminton academy near my college through Groundwale. The booking process was seamless and the coaches are certified!",
    location: "Delhi"
  },
]

const features = [
  {
    title: "Instant Confirmation",
    description: "Book in seconds and get instant confirmation",
    emoji: "⚡"
  },
  {
    title: "Verified Venues",
    description: "All venues are verified and quality-checked",
    emoji: "✅"
  },
  {
    title: "Best Price Guarantee",
    description: "We guarantee the best prices in the market",
    emoji: "💰"
  },
  {
    title: "Flexible Cancellation",
    description: "Easy cancellation and refund policies",
    emoji: "🔄"
  },
]

export default function TestimonialsAndFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Sports Lovers Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a perfect sports experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="text-5xl sm:text-6xl mb-4">{feature.emoji}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of happy sports enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-0 right-0 text-blue-100 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <Quote className="w-32 h-32" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{testimonial.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-blue-600">📍 {testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
