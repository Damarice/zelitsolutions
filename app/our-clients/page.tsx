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

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-24 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
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
          <div className="mb-12 sm:mb-16 md:mb-20">
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

