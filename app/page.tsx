'use client'

import HeroSlider from '@/components/HeroSlider'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers, faBriefcase, faTrophy,
  faGlobe, faLaptop, faEnvelope, faNetworkWired,
  faCheckCircle, faArrowRight, faStar, faPlay, faPhone, faServer, faDesktop
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  return (
    <div className="bg-white text-gray-900">

      {/* ── Hero Slider Section ── */}
      <HeroSlider />

      {/* ── Services Overview Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Our Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Deliver
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl">
              Comprehensive IT solutions designed to power your business growth and keep you secure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Website Development', 
                shortDesc: 'Custom websites that drive results and engage customers.',
                fullDesc: 'At Zelit Solutions Ltd, we craft stunning, high-performance websites that serve as powerful digital storefronts for your business, combining beautiful design with seamless functionality to captivate visitors and convert them into loyal customers. Our website development process begins with understanding your brand identity, target audience, and business goals, allowing us to create custom solutions—from sleek corporate websites and dynamic e-commerce platforms to engaging portfolios and robust content management systems.',
                icon: faGlobe
              },
              { 
                title: 'Managed IT Services', 
                shortDesc: 'Proactive monitoring, support, and infrastructure management.',
                fullDesc: 'At Zelit Solutions Ltd, we replace the unreliable break/fix model with a comprehensive, proactive Managed IT partnership designed to let your technology drive business success rather than hinder it. We provide a dedicated, expert team that acts as your complete IT department, taking full ownership of everything from daily service desk support to complex infrastructure implementation. Through flat-rate, predictable pricing and continuous system monitoring, we eliminate surprise repair costs and preemptively resolve issues before they impact your operations.',
                icon: faBriefcase
              },
              { 
                title: 'Sale of Computers & Accessories', 
                shortDesc: 'Quality hardware and computer accessories for your business.',
                fullDesc: 'At Zelit Solutions Ltd, we understand that your business is only as strong as the hardware powering it, which is why we offer a reliable, curated selection of high-performance computers and genuine computer accessories sourced from trusted global brands. Whether you need powerful desktops for your design team, lightweight laptops for your field staff, or rugged workstations for intensive data processing, we provide the right equipment tailored to your specific operational needs and budget.',
                icon: faDesktop
              },
              { 
                title: 'Domain Registration & Email Services', 
                shortDesc: 'Secure domain registration and professional email solutions.',
                fullDesc: 'At Zelit Solutions Ltd, we make your online presence effortless from the very beginning by handling all your domain registration and professional email services. For startups and growing businesses, we register the perfect domain name that aligns with your identity and vision, ensuring you secure your digital real estate without any hassle or hidden fees. Beyond the domain, we set up reliable, secure, and fully managed email solutions that use your custom domain.',
                icon: faEnvelope
              },
              { 
                title: 'Structured Cabling & Networking Solutions', 
                shortDesc: 'Enterprise-grade network infrastructure and cabling.',
                fullDesc: 'At Zelit Solutions Ltd, we transform your network chaos into a powerhouse of speed, reliability, and scalability through expertly designed network solutions built to last. We begin by conducting a thorough assessment of your business needs and physical layout, then deploy future-ready structured cabling infrastructure neatly organized, properly shielded, and meticulously labeled to ensure pristine signal integrity and easy future expansions.',
                icon: faNetworkWired
              },
            ].map((svc, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#00CED1] hover:shadow-lg transition group service-card">
                <div className="p-4 md:p-8">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-[#00CED1]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#00CED1] transition group-hover:scale-110">
                    <FontAwesomeIcon icon={svc.icon} className="text-lg md:text-2xl text-[#00CED1] group-hover:text-white transition" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{svc.shortDesc}</p>
                  
                  <button
                    onClick={() => setExpandedService(expandedService === i ? null : i)}
                    className="text-[#00CED1] font-bold hover:text-cyan-600 transition text-xs sm:text-sm"
                  >
                    {expandedService === i ? 'Read Less' : 'Read More'}
                  </button>
                </div>
                
                {expandedService === i && (
                  <div className="px-4 md:px-8 pb-4 md:pb-8 border-t border-gray-200 bg-gray-50">
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {svc.fullDesc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[#00CED1] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Why Zelitsolutions</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Trusted IT Partner
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: '10+ Years Experience', desc: 'Proven track record in IT solutions and digital transformation.' },
                  { title: '500+ Happy Clients', desc: 'Trusted by businesses across multiple industries and sectors.' },
                  { title: '24/7 Support', desc: 'Round-the-clock technical support to keep your business running.' },
                  { title: '50+ Expert Team', desc: 'Skilled professionals dedicated to your success.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-[#00CED1]/10 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#00CED1] text-lg md:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/about" 
                className="inline-block mt-6 md:mt-8 text-[#00CED1] font-bold hover:text-cyan-600 inline-flex items-center gap-2 transition text-sm md:text-base"
              >
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/10 to-transparent rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Why Choose Us"
                className="w-full rounded-2xl relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="pt-4 pb-12 md:pb-20 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Delivered' },
              { number: '50+', label: 'Team Members' },
              { number: '10+', label: 'Years in Business' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-white">{stat.number}</div>
                <p className="text-white/90 font-semibold text-xs md:text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Our Approach</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { 
                num: '01',
                title: 'Assess',
                desc: 'Evaluate your current IT infrastructure and business needs to identify opportunities.'
              },
              { 
                num: '02',
                title: 'Strategy',
                desc: 'Develop a comprehensive roadmap tailored to your goals and budget.'
              },
              { 
                num: '03',
                title: 'Implement',
                desc: 'Execute the plan with minimal disruption to your business operations.'
              },
            ].map((step, i) => (
              <div key={i} className="relative group hover-card">
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 md:top-20 -right-4 w-8 h-1 bg-gradient-to-r from-[#00CED1] to-transparent"></div>
                )}
                <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-lg hover:border-[#00CED1] transition group-hover:shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-[#00CED1] mb-3 md:mb-4">{step.num}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Client Feedback</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { text: 'Exceptional service and true partnership. They understand our business.', author: 'John Smith', role: 'CEO, Tech Corp' },
              { text: 'Transformed our IT infrastructure completely. Highly recommended!', author: 'Sarah Johnson', role: 'CTO, Finance Inc' },
              { text: 'Professional, reliable, and always available. Best decision we made.', author: 'Mike Chen', role: 'Director, Healthcare Solutions' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 p-4 md:p-8 rounded-lg hover:shadow-lg transition">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="text-yellow-400 text-sm md:text-base" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">{t.author}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Latest Insights</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Resources & News
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: 'Website Development Best Practices', 
                date: 'Jan 15, 2026', 
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
                desc: 'Learn how to build responsive and engaging websites that convert visitors into customers.'
              },
              { 
                title: 'IT Infrastructure Security Guide', 
                date: 'Jan 10, 2026', 
                category: 'IT Services',
                image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?w=500&h=300&fit=crop',
                desc: 'Essential security measures to protect your business infrastructure from threats.'
              },
              { 
                title: 'Network Cabling & Setup Guide', 
                date: 'Jan 5, 2026', 
                category: 'Networking',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
                desc: 'Complete guide to structured cabling and network infrastructure setup.'
              },
            ].map((blog, i) => (
              <article key={i} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#00CED1] hover:shadow-lg transition group">
                <div className="h-24 md:h-48 bg-gradient-to-br from-[#00CED1]/10 to-gray-100 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-[#00CED1] text-xs sm:text-sm font-bold uppercase mb-2 md:mb-3">{blog.category}</p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-[#00CED1] transition text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 md:mb-4">{blog.desc}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">{blog.date}</p>
                  <Link href="#" className="inline-block text-[#00CED1] font-bold hover:text-cyan-600 inline-flex items-center gap-2 transition text-xs sm:text-sm">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="pt-4 pb-12 md:pb-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Elevate Your IT?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Zelitsolutions can transform your business through strategic IT solutions.
          </p>
          <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-[#00CED1] hover:bg-gray-100 px-6 md:px-10 py-2 md:py-4 rounded font-bold transition text-sm md:text-lg"
            >
              Get In Touch
            </Link>
            <a 
              href="tel:+254714635554" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00CED1] px-6 md:px-10 py-2 md:py-4 rounded font-bold transition text-sm md:text-lg inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm md:text-base" />
              Call: +254 714 635554
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

