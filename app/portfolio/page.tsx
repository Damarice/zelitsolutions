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
      <section className="relative py-12 sm:py-20 md:py-24 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-[#00CED1]">Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700">
            Showcasing our successful projects and IT solutions
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Featured Projects</h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Portfolio content coming soon
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto">Let's bring your vision to life</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#00CED1] hover:bg-gray-100 px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded font-bold transition text-sm sm:text-base md:text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

