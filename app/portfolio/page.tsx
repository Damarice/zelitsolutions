'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'Website Development',
      description: 'Modern e-commerce platform with payment integration and inventory management',
      technologies: ['Next.js', 'React', 'Stripe', 'MongoDB'],
    },
    {
      title: 'Corporate Network Setup',
      category: 'Networking Solutions',
      description: 'Complete network infrastructure design and implementation for a 200-employee office',
      technologies: ['Cisco', 'Structured Cabling', 'VPN', 'Firewall'],
    },
    {
      title: 'Healthcare IT System',
      category: 'Managed IT Services',
      description: 'Comprehensive IT management solution for healthcare facility',
      technologies: ['Cloud Infrastructure', 'Data Security', '24/7 Support'],
    },
    {
      title: 'Educational Platform',
      category: 'Website Development',
      description: 'Online learning management system with video streaming and assessments',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Business Email Solutions',
      category: 'Domain & Email Services',
      description: 'Enterprise email setup with custom domain and security features',
      technologies: ['Microsoft 365', 'SSL', 'DNS Management'],
    },
    {
      title: 'Retail POS System',
      category: 'Computer Sales & Setup',
      description: 'Complete hardware and software solution for retail chain',
      technologies: ['POS Hardware', 'Windows Server', 'Inventory Software'],
    }
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-[#00CED1]">Portfolio</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Showcasing our successful projects and IT solutions
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Explore some of the innovative solutions we've delivered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#00CED1] hover:shadow-lg transition group"
              >
                <div className="bg-gradient-to-br from-[#00CED1]/10 to-gray-100 h-40 flex items-center justify-center text-gray-600 group-hover:from-[#00CED1]/20 transition"></div>
                <div className="p-8">
                  <div className="text-sm text-[#00CED1] font-bold uppercase mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Expertise</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-lg text-gray-900">Web Development</h3>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-lg text-gray-900">IT Management</h3>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg text-gray-900">Hardware Sales</h3>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg text-gray-900">Email Services</h3>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="font-bold text-lg text-gray-900">Networking</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-10">Let's bring your vision to life</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#00CED1] hover:bg-gray-100 px-10 py-4 rounded font-bold transition text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
