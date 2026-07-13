'use client'

import Link from 'next/link'

export default function Career() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-24 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Career"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our <span className="text-[#00CED1]">Team</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 max-w-2xl">
            Build your career with Zelitsolutions and shape the future of IT
          </p>
        </div>
      </section>

      {/* Career Info */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Why Work With Us?</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed">
              We're always looking for talented individuals to join our growing team. While we don't have specific openings at the moment, we value professional relationships and encourage you to reach out about future opportunities.
            </p>
          </div>

          {/* Culture Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💼</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Professional Growth</h3>
              <p className="text-sm sm:text-base text-gray-700">Continuous learning and development opportunities</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🤝</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Collaborative Culture</h3>
              <p className="text-sm sm:text-base text-gray-700">Work with a supportive and innovative team</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Impact-Driven Work</h3>
              <p className="text-sm sm:text-base text-gray-700">Make meaningful contributions to client success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interested in Joining Us?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto">Get in touch with our team to discuss career opportunities</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#00CED1] hover:bg-gray-100 px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded font-bold transition text-sm sm:text-base md:text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}


