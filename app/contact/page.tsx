'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-24 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In <span className="text-[#00CED1]">Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 max-w-2xl">
            We're here to help. Reach out to our team and let's discuss your IT needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Information</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                Have a question or want to discuss a project? Reach out to us and we'll respond as soon as possible.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-[#00CED1]/10">
                      <span className="text-lg sm:text-2xl">📧</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-900">Email</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">info@zelitsolutions.com</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">sales@zelitsolutions.com</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-[#00CED1]/10">
                      <span className="text-lg sm:text-2xl">📱</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-900">Phone</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">+254 714 635554</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-[#00CED1]/10">
                      <span className="text-lg sm:text-2xl">⏰</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-900">Business Hours</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 md:p-10 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00CED1] hover:bg-cyan-500 text-white py-2 sm:py-3 md:py-4 rounded-lg font-bold transition text-sm sm:text-base md:text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

