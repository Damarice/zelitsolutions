'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            About <span className="text-[#00CED1]">Zelitsolutions</span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl leading-relaxed">
            Your trusted partner in delivering innovative IT solutions that power business growth
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zelitsolutions is a leading IT solutions provider dedicated to helping businesses leverage technology for growth and success. With expertise spanning website development, managed IT services, and networking solutions, we deliver comprehensive technology services tailored to your unique needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experienced professionals is committed to providing exceptional service, innovative solutions, and ongoing support to ensure your technology infrastructure operates at peak performance.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-lg hover:border-[#00CED1] transition">
              <h3 className="text-3xl font-bold text-[#00CED1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive efficiency, productivity, and growth while delivering exceptional customer service and support.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-lg hover:border-[#00CED1] transition">
              <h3 className="text-3xl font-bold text-[#00CED1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative IT solutions provider, recognized for excellence in service delivery and commitment to client success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-5xl font-bold mb-12 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-center hover:border-[#00CED1] transition">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Excellence</h3>
                <p className="text-gray-700">Committed to delivering the highest quality in everything we do</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-center hover:border-[#00CED1] transition">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Integrity</h3>
                <p className="text-gray-700">Building trust through honesty and transparency</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-center hover:border-[#00CED1] transition">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Innovation</h3>
                <p className="text-gray-700">Embracing new technologies and creative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Discover how we can help your business thrive with innovative IT solutions</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#00CED1] hover:bg-gray-100 px-10 py-4 rounded font-bold transition text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
