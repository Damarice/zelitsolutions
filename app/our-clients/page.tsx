'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function OurClients() {
  const clients = [
    { name: 'Tech Corp', industry: 'Technology' },
    { name: 'Healthcare Ltd', industry: 'Healthcare' },
    { name: 'Finance Inc', industry: 'Finance' },
    { name: 'Retail Solutions', industry: 'Retail' },
    { name: 'Manufacturing Pro', industry: 'Manufacturing' },
    { name: 'Education Plus', industry: 'Education' },
  ]

  const testimonials = [
    {
      text: "Zelitsolutions transformed our IT infrastructure. Their expertise and support have been invaluable to our business growth.",
      author: "John Doe",
      company: "Tech Corp",
      role: "CEO"
    },
    {
      text: "Professional, reliable, and always available when we need them. The best IT partner we've worked with.",
      author: "Jane Smith",
      company: "Innovation Ltd",
      role: "CTO"
    },
    {
      text: "Their website development service exceeded our expectations. Highly recommended!",
      author: "Mike Johnson",
      company: "Retail Solutions",
      role: "Marketing Director"
    }
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-32 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Our Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-[#00CED1]">Clients</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700">
            Trusted by businesses across various industries
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Companies We Work With</h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              We're proud to serve a diverse portfolio of clients across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-24">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg text-center hover:border-[#00CED1] hover:shadow-lg transition group"
              >
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-[#00CED1]/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold group-hover:bg-[#00CED1] transition">
                  {client.name.charAt(0)}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {client.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{client.industry}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg hover:border-[#00CED1] transition"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, j) => (
                      <FontAwesomeIcon key={j} icon={faStar} className="text-yellow-400 text-xs sm:text-sm" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-xs sm:text-sm md:text-base text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-xs">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-[#00CED1] to-cyan-400 rounded-lg p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">500+</div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-semibold">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">1000+</div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-semibold">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">10+</div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-semibold">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">24/7</div>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-semibold">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our Growing Client Family
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-700 mb-6 sm:mb-10">
            Experience the Zelitsolutions difference
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#00CED1] hover:bg-cyan-500 text-white px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded font-bold transition text-sm sm:text-base md:text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

