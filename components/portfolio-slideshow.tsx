"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Barnes & Noble Retail Build-Out",
    category: "Ground-up construction",
    image: "/images/barnes-and-nobel.jpg",
    description: "Large-scale retail construction with underground utilities and site preparation",
  },
  {
    id: 2,
    title: "Tesla Facility Restrooms",
    category: "Interior construction",
    image: "/images/tesla-1.jpg",
    description: "Commercial restroom installation with custom tile work and plumbing systems",
  },
  {
    id: 3,
    title: "Bexar County Fire Station",
    category: "Government construction",
    image: "/images/bexar-fire.jpg",
    description: "Fire station build with comprehensive HVAC ductwork and mechanical systems",
  },
  {
    id: 4,
    title: "Boerne Aquatic Center",
    category: "Municipal projects",
    image: "/images/boerne-aquatic.jpg",
    description: "Outdoor utility infrastructure for aquatic facility with extensive underground piping",
  },
  {
    id: 5,
    title: "Guardian House Renovation",
    category: "Remodel & renovation",
    image: "/images/guardian-house.jpg",
    description: "Interior renovation featuring radiant floor heating installation and modern finishes",
  },
  {
    id: 6,
    title: "Harmony Odessa Facility",
    category: "Interior construction",
    image: "/images/harmony-odessa.jpg",
    description: "Commercial facility with exposed structural systems and comprehensive mechanical work",
  },
]

export default function PortfolioSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Slideshow */}
      <div className="relative w-full group bg-slate-900 overflow-hidden rounded-lg">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`w-full transition-opacity duration-500 ${
              index === currentSlide ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="max-w-2xl">
                <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow-500 scale-125" : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-slate-700 rounded-full h-1">
        <div
          className={`bg-yellow-500 h-1 rounded-full transition-all ${
            isAutoPlaying ? "duration-[5000ms] ease-linear" : "duration-300"
          }`}
          style={{
            width: `${((currentSlide + 1) / portfolioItems.length) * 100}%`,
          }}
        />
      </div>

      {/* Auto-play Toggle */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 text-sm transition-colors"
        >
          {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isAutoPlaying ? "Pause" : "Play"} Slideshow
        </button>
      </div>
    </div>
  )
}
