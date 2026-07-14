'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    title: 'Transform Your IT',
    subtitle: 'Infrastructure',
    description: 'From managed IT services and web development to domain registration and email solutions, we deliver comprehensive, scalable IT solutions that keep your business secure and connected.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
  },
  {
    title: 'Complete Hardware',
    subtitle: 'Solutions',
    description: 'Computer hardware and structured cabling expertise combined with enterprise-grade network design to power your operations and scale with your growing business.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
  },
  {
    title: 'Your Technology',
    subtitle: 'Partner',
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
    }, 5000)
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
    <section className="relative w-full h-[85vh] min-h-[500px] max-h-[750px] overflow-hidden">
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
            <div className="container mx-auto px-6 text-center text-white">
              <p
                className={`text-base md:text-lg uppercase tracking-widest font-medium mb-4 text-cyan-300 transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Welcome to Zelitsolutions
              </p>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slide.title} <br />
                <span className="text-[#00CED1]">{slide.subtitle}</span>
              </h1>
              <p
                className={`text-base md:text-xl font-light max-w-2xl mx-auto mb-8 text-gray-200 transition-all duration-700 delay-200 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {slide.description}
              </p>
              <div
                className={`flex gap-4 justify-center transition-all duration-700 delay-300 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Link
                  href="/about"
                  className="bg-[#00CED1] text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition shadow-lg"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00CED1] transition"
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#00CED1] text-white w-12 h-12 rounded-full flex items-center justify-center transition"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-[#00CED1] text-white w-12 h-12 rounded-full flex items-center justify-center transition"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-[#00CED1]' : 'w-3 bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
