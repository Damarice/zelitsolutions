'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    title: 'Transform Your IT Infrastructure',
    description: 'From managed IT services and web development to domain registration and email solutions, we deliver comprehensive, scalable IT solutions that keep your business secure and connected.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
  },
  {
    title: 'Complete Hardware Solutions',
    description: 'Computer hardware and structured cabling expertise combined with enterprise-grade network design to power your operations and scale with your growing business.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
  },
  {
    title: 'Your Technology Partner',
    description: 'Let Zelit Solutions Ltd handle your technology while you focus on what matters most—growing your business. Comprehensive, scalable IT solutions that keep you ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [current])

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 text-center text-white">
              <p
                className={`text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium mb-2 sm:mb-3 md:mb-4 text-cyan-300 transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Welcome to Zelitsolutions
              </p>
              <h1
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4 transition-all duration-700 delay-100 text-[#00CED1] ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-xs sm:text-sm md:text-base lg:text-lg font-light max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 text-gray-200 transition-all duration-700 delay-200 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {slide.description}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center transition-all duration-700 delay-300 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Link
                  href="/about"
                  className="bg-[#00CED1] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-cyan-500 transition shadow-lg text-xs sm:text-sm md:text-base"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-white hover:text-[#00CED1] transition text-xs sm:text-sm md:text-base"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#00CED1] text-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full flex items-center justify-center transition text-xs sm:text-sm md:text-base"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#00CED1] text-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full flex items-center justify-center transition text-xs sm:text-sm md:text-base"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5 md:gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              index === current ? 'w-6 sm:w-7 md:w-8 bg-[#00CED1]' : 'w-2 sm:w-2.5 md:w-3 bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
