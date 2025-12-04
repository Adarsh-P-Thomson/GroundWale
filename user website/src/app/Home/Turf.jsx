"use client"

import { useState, useRef, useEffect } from "react"
import {
  MapPin,
  Star,
  Layers,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  X,
  User,
  Phone,
  Mail,
  FileText,
  CreditCard,
  CheckCircle2,
} from "lucide-react"

const MOCK_TURFS = [
  {
    id: "1",
    name: "Champions Arena",
    description:
      "Premium artificial turf with floodlights and modern amenities. Perfect for professional matches and training sessions.",
    image_url: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "Downtown Sports Complex, Block A",
    price_per_hour: 1500,
    surface_type: "artificial",
    size: "100x60 meters",
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Cafeteria", "Scoreboard"],
    rating: 4.8,
  },
  {
    id: "2",
    name: "Green Field Pro",
    description:
      "Natural grass turf maintained to perfection. Ideal for tournaments and competitive matches with professional standards.",
    image_url: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "Riverside Sports Park, Zone 2",
    price_per_hour: 1800,
    surface_type: "natural",
    size: "105x68 meters",
    amenities: ["Floodlights", "VIP Seating", "Medical Room", "Parking"],
    rating: 4.9,
  },
  {
    id: "3",
    name: "Urban Kick Turf",
    description:
      "Compact 5-a-side artificial turf in the heart of the city. Great for quick games and casual bookings.",
    image_url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "City Center Plaza, Level 3",
    price_per_hour: 1000,
    surface_type: "artificial",
    size: "40x20 meters",
    amenities: ["Floodlights", "Changing Rooms", "Water Dispenser"],
    rating: 4.6,
  },
  {
    id: "4",
    name: "Elite Sports Ground",
    description:
      "Hybrid turf combining natural and artificial grass. Premium facility with state-of-the-art amenities.",
    image_url: "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "Westside Athletic Center",
    price_per_hour: 2000,
    surface_type: "hybrid",
    size: "100x64 meters",
    amenities: ["Floodlights", "Changing Rooms", "Gym Access", "Parking", "Cafeteria", "Physiotherapy"],
    rating: 5.0,
  },
  {
    id: "5",
    name: "Sunset Turf Arena",
    description: "Beautiful outdoor artificial turf with panoramic views. Popular for evening matches and events.",
    image_url:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "Hillside Sports Village",
    price_per_hour: 1400,
    surface_type: "artificial",
    size: "90x55 meters",
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Seating"],
    rating: 4.7,
  },
  {
    id: "6",
    name: "Metro Football Hub",
    description:
      "Multi-purpose artificial turf suitable for football, cricket, and events. Centrally located with easy access.",
    image_url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200",
    location: "Central Station Sports Complex",
    price_per_hour: 1200,
    surface_type: "artificial",
    size: "80x50 meters",
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Equipment Rental"],
    rating: 4.5,
  },
]

const generateTimeSlots = (turfId, pricePerHour) => {
  const slots = []
  const dates = []

  for (let d = 0; d < 7; d++) {
    const date = new Date()
    date.setDate(date.getDate() + d)
    dates.push(date.toISOString().split("T")[0])
  }

  dates.forEach((date) => {
    for (let hour = 6; hour <= 21; hour++) {
      const status = Math.random() < 0.3 ? "booked" : "available"
      slots.push({
        id: `${turfId}-${date}-${hour}`,
        turf_id: turfId,
        date: date,
        start_time: `${hour.toString().padStart(2, "0")}:00:00`,
        end_time: `${(hour + 1).toString().padStart(2, "0")}:00:00`,
        status: status,
        price: pricePerHour,
      })
    }
  })

  return slots
}

const ALL_TIME_SLOTS = MOCK_TURFS.flatMap((turf) => generateTimeSlots(turf.id, turf.price_per_hour))

function TurfCard({ turf, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer
        transform transition-all duration-500 ease-out
        ${
          isSelected
            ? "scale-105 shadow-2xl ring-4 ring-emerald-500"
            : "scale-100 shadow-lg hover:scale-102 hover:shadow-xl"
        }
      `}
    >
      <div className="absolute inset-0">
        <img src={turf.image_url || "/placeholder.svg"} alt={turf.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
            {turf.surface_type}
          </span>
          <div className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-semibold">{turf.rating}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{turf.name}</h3>

        <div className="flex items-center gap-2 text-white/90 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{turf.location}</span>
        </div>

        <div className="flex items-center gap-2 text-white/80 mb-3">
          <Layers className="w-4 h-4" />
          <span className="text-sm">{turf.size}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {turf.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-lg">
              {amenity}
            </span>
          ))}
          {turf.amenities.length > 3 && (
            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-lg">
              +{turf.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-white/80 text-sm">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">₹{turf.price_per_hour}</span>
              <span className="text-white/60 text-sm">/hour</span>
            </div>
          </div>
          <button
            className={`
              px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                isSelected
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/50"
                  : "bg-white text-gray-900 hover:bg-emerald-500 hover:text-white"
              }
            `}
          >
            {isSelected ? "Selected" : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  )
}

function TimeSlotSelector({ slots, selectedSlot, onSelectSlot, selectedDate, onDateChange, availableDates }) {
  const formatTime = (time) => {
    const [hours] = time.split(":")
    const hour = Number.parseInt(hours)
    if (hour === 0) return "12 AM"
    if (hour === 12) return "12 PM"
    if (hour > 12) return `${hour - 12} PM`
    return `${hour} AM`
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) return "Today"
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow"
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const availableSlots = slots.filter((slot) => slot.status === "available")
  const bookedSlots = slots.filter((slot) => slot.status === "booked")

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-gray-900">Select Date</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {availableDates.map((date) => (
            <button
              key={date}
              onClick={() => onDateChange(date)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm
                ${
                  selectedDate === date
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900">Available Time Slots</h3>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-600">Available ({availableSlots.length})</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <span className="text-gray-600">Booked ({bookedSlots.length})</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {slots.map((slot) => {
            const isSelected = selectedSlot?.id === slot.id
            const isAvailable = slot.status === "available"

            return (
              <button
                key={slot.id}
                onClick={() => isAvailable && onSelectSlot(slot)}
                disabled={!isAvailable}
                className={`
                  relative px-3 py-3 rounded-lg font-medium transition-all duration-300 text-sm
                  ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                      : isAvailable
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:scale-102"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                <div className="font-semibold">{formatTime(slot.start_time)}</div>
                <div className="text-xs mt-0.5 opacity-80">{isAvailable ? `₹${slot.price}` : "Booked"}</div>
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {availableSlots.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Clock className="w-10 h-10 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 font-medium text-sm">No available slots for this date</p>
            <p className="text-gray-500 text-xs mt-1">Please select a different date</p>
          </div>
        )}
      </div>
    </div>
  )
}

function BookingModal({ isOpen, onClose, turf, timeSlot, onConfirmBooking, isLoading }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    notes: "",
  })

  if (!isOpen) return null

  const formatTime = (time) => {
    const [hours] = time.split(":")
    const hour = Number.parseInt(hours)
    if (hour === 0) return "12:00 AM"
    if (hour === 12) return "12:00 PM"
    if (hour > 12) return `${hour - 12}:00 PM`
    return `${hour}:00 AM`
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onConfirmBooking(formData)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Complete Your Booking</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Turf Ground</span>
                <span className="font-semibold text-gray-900">{turf.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">{formatDate(timeSlot.date)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Slot</span>
                <span className="font-semibold text-gray-900">
                  {formatTime(timeSlot.start_time)} - {formatTime(timeSlot.end_time)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span className="font-semibold text-gray-900">{turf.location}</span>
              </div>
              <div className="pt-2 border-t border-emerald-200 flex justify-between items-center">
                <span className="text-gray-900 font-semibold">Total Amount</span>
                <span className="text-xl font-bold text-emerald-600">₹{timeSlot.price}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.customer_name}
                onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.customer_phone}
                onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4" />
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.customer_email}
                onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                <FileText className="w-4 h-4" />
                Special Requests (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm"
                placeholder="Any special requirements or notes..."
              />
            </div>

            <div className="flex gap-2 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    Confirm Booking
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function TurfBooking() {
  const [selectedTurf, setSelectedTurf] = useState(MOCK_TURFS[0])
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [availableDates, setAvailableDates] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBooking, setIsBooking] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push(date.toISOString().split("T")[0])
    }
    setAvailableDates(dates)
    setSelectedDate(dates[0])
  }, [])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        container.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const timeSlots = ALL_TIME_SLOTS.filter((slot) => slot.turf_id === selectedTurf.id && slot.date === selectedDate)

  const handleTurfSelect = (turf) => {
    setSelectedTurf(turf)
    setSelectedSlot(null)
  }

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot)
    setIsModalOpen(true)
  }

  const handleConfirmBooking = (bookingData) => {
    setIsBooking(true)

    setTimeout(() => {
      setIsBooking(false)
      setBookingSuccess(true)

      const slotIndex = ALL_TIME_SLOTS.findIndex((s) => s.id === selectedSlot.id)
      if (slotIndex !== -1) {
        ALL_TIME_SLOTS[slotIndex].status = "booked"
      }

      setTimeout(() => {
        setIsModalOpen(false)
        setBookingSuccess(false)
        setSelectedSlot(null)
      }, 2000)
    }, 1500)
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      }}
    >
      <div className="absolute inset-0 bg-black/40 min-h-full"></div>

      <div className="relative min-h-screen flex flex-col px-4 md:px-6 lg:px-[6cm] py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Book Your Perfect Turf</h1>
          <p className="text-lg text-white/90">Premium grounds for memorable matches and events</p>
        </div>

        <div className="relative mb-10 h-[400px]">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all -translate-x-4 ${
              canScrollLeft
                ? "bg-white shadow-xl hover:bg-gray-50 cursor-pointer"
                : "bg-gray-300 shadow-lg cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className={`w-6 h-6 ${canScrollLeft ? "text-gray-700" : "text-gray-500"}`} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-4 h-full items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {MOCK_TURFS.map((turf) => (
              <TurfCard
                key={turf.id}
                turf={turf}
                isSelected={selectedTurf?.id === turf.id}
                onClick={() => handleTurfSelect(turf)}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all translate-x-4 ${
              canScrollRight
                ? "bg-white shadow-xl hover:bg-gray-50 cursor-pointer"
                : "bg-gray-300 shadow-lg cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className={`w-6 h-6 ${canScrollRight ? "text-gray-700" : "text-gray-500"}`} />
          </button>
        </div>

        {selectedTurf && (
          <div className="bg-white rounded-2xl shadow-xl p-5 animate-slideUp">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedTurf.name}</h2>
              <p className="text-gray-600 text-sm">{selectedTurf.description}</p>
            </div>

            <TimeSlotSelector
              slots={timeSlots}
              selectedSlot={selectedSlot}
              onSelectSlot={handleSlotSelect}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              availableDates={availableDates}
            />
          </div>
        )}
      </div>

      {selectedTurf && selectedSlot && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          turf={selectedTurf}
          timeSlot={selectedSlot}
          onConfirmBooking={handleConfirmBooking}
          isLoading={isBooking}
        />
      )}

      {bookingSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 shadow-2xl transform animate-scaleIn text-center max-w-md">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Booking Confirmed!</h3>
            <p className="text-gray-600 text-sm">
              Your turf has been successfully booked. Check your phone for confirmation details.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
