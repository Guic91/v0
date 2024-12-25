"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const presentationSlides = [
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_01-scaled.jpg",
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_02-scaled.jpg",
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_03-scaled.jpg",
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_05-scaled.jpg",
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_07-scaled.jpg",
  "/images/GLOBAL-MUSIC-COMMUNITY-MNGRS.AI-VC-2024_Page_20-scaled.jpg"
]

export function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? presentationSlides.length - 1 : prev - 1
    )
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      prev === presentationSlides.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Deck</h2>
      <div className="relative overflow-hidden rounded-lg shadow-sm">
        <div className="relative aspect-[16/9]">
          <Image
            src={presentationSlides[currentSlide]}
            alt={`MNGRS.AI Presentation Page ${currentSlide + 1}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={handlePrevSlide} 
            className="rounded-full bg-white/80 p-2 hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={handleNextSlide} 
            className="rounded-full bg-white/80 p-2 hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {presentationSlides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </section>
  )
}
