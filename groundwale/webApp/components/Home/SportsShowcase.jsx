"use client"

import { Trophy, Target, Zap } from "lucide-react"

const sports = [
  { name: "Cricket", emoji: "🏏", color: "from-green-400 to-emerald-600" },
  { name: "Football", emoji: "⚽", color: "from-blue-400 to-cyan-600" },
  { name: "Pickleball", emoji: "�", color: "from-purple-400 to-pink-600" },
]

const stats = [
  {
    icon: Trophy,
    number: "3",
    label: "Sports Available",
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    icon: Target,
    number: "95%",
    label: "Booking Success Rate",
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    icon: Zap,
    number: "2 Min",
    label: "Average Booking Time",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
]

export default function SportsShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Play Your Favorite Sport
          </h2>
          <p className="text-lg text-gray-600">
            From cricket to football and pickleball, find the perfect venue for your game
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 max-w-4xl mx-auto">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className={`text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform`}>
                {sport.emoji}
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                {sport.name}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`${stat.bg} rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all transform hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${stat.color} bg-white rounded-full mb-4 shadow-md`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
