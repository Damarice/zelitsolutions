'use client'

import Link from 'next/link'

export default function Career() {
  const positions = [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site',
      description: 'We are looking for an experienced Full Stack Developer to join our development team and build amazing web applications.',
    },
    {
      title: 'Network Engineer',
      department: 'IT Infrastructure',
      type: 'Full-time',
      location: 'On-site',
      description: 'Seeking a skilled Network Engineer to design, implement, and maintain network infrastructure.',
    },
    {
      title: 'IT Support Specialist',
      department: 'Support',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Join our support team to provide technical assistance and excellent customer service to our clients.',
    }
  ]

  const benefits = [
    { title: 'Professional Growth', desc: 'Continuous learning and development opportunities', icon: '💼' },
    { title: 'Health Benefits', desc: 'Comprehensive health insurance and wellness programs', icon: '🏥' },
    { title: 'Work-Life Balance', desc: 'Flexible working hours and vacation time', icon: '⚖️' },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Career"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join Our <span className="text-[#00CED1]">Team</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Build your career with Zelitsolutions and shape the future of IT
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Why Work With Us?</h2>
            <p className="text-xl text-gray-600">
              Great benefits and opportunities for growth in a dynamic environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-10 rounded-lg hover:border-[#00CED1] transition">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-5xl font-bold mb-12 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-[#00CED1] transition"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {position.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-2">📂 {position.department}</span>
                      <span className="flex items-center gap-2">⏰ {position.type}</span>
                      <span className="flex items-center gap-2">📍 {position.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{position.description}</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#00CED1] hover:bg-cyan-500 text-white px-6 py-2 rounded font-bold transition"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Send us your resume and we'll keep you in mind for future opportunities
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#00CED1] hover:bg-gray-100 px-10 py-4 rounded font-bold transition text-lg"
          >
            Submit Your Resume
          </Link>
        </div>
      </section>
    </div>
  )
}
