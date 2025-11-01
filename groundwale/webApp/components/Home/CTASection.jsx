"use client"

import { Smartphone, Download } from "lucide-react"
import Image from "next/image"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgMzZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Download className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Download Our App</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Book On-the-Go with Our Mobile App
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Get instant access to thousands of sports venues, exclusive app-only deals, and seamless booking experience right from your pocket.
            </p>

            <ul className="space-y-4 mb-8 sm:mb-10">
              {[
                "⚡ Lightning-fast bookings in seconds",
                "🔔 Real-time notifications for your bookings",
                "💳 Secure in-app payments",
                "🎁 Exclusive app-only discounts",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base sm:text-lg text-gray-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl">
                <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>

              <button className="group bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl">
                <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-b-2xl w-40 h-6 z-10"></div>
                  
                  {/* App Content Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📱</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">Groundwale</div>
                      <div className="text-sm text-gray-600">Sports Booking Platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
