"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isMounted = true

    const playVideo = async () => {
      try {
        if (isMounted && video) {
          await video.play()
        }
      } catch (error) {
        // Ignore AbortError which happens when component unmounts during play
        if (error instanceof Error && error.name !== "AbortError") {
          console.error(error)
        }
      }
    }

    playVideo()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drone_Video_Ready_San_Antonio-KrmBZ7c7BNNgWMOMEjLfW3cgjWrgJr.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-24 md:pt-20">
        <div className="text-center text-white max-w-4xl mx-auto px-4 pt-8 md:pt-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Licensed General Contractor
            <br />
            <span className="text-yellow-400">Building Texas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Veteran-owned company dedicated to building the future while honoring the past. We build more than just
            structures—we build trust, relationships, and a foundation for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}
