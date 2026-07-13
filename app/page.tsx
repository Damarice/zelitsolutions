'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers, faBriefcase, faTrophy,
  faGlobe, faLaptop, faEnvelope, faNetworkWired,
  faCheckCircle, faArrowRight, faStar, faPlay
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* ── Hero Section ── */}
      <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">
              Managed IT Services Built Around Your Business
            </p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
              Transform Your IT <span className="text-[#00CED1]">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Strategic IT solutions that scale with your business. From managed services to cybersecurity, we keep your operations running smoothly.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link 
                href="/contact" 
                className="bg-[#00CED1] hover:bg-cyan-500 text-white px-8 py-4 rounded font-bold transition text-lg"
              >
                Get Started
              </Link>
              <a 
                href="tel:+254714635554" 
                className="border-2 border-[#00CED1] text-[#00CED1] hover:bg-[#00CED1] hover:text-white px-8 py-4 rounded font-bold transition text-lg"
              >
                Call: +254 714 635554
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Services Overview Section ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to power your business growth and keep you secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Managed IT Services', 
                desc: 'Proactive monitoring, support, and infrastructure management.',
                icon: faBriefcase
              },
              { 
                title: 'Website Development', 
                desc: 'Custom websites that drive results and engage customers.',
                icon: faGlobe
              },
              { 
                title: 'Network Solutions', 
                desc: 'Structured cabling and enterprise networking infrastructure.',
                icon: faNetworkWired
              },
              { 
                title: 'Cybersecurity', 
                desc: 'Advanced security solutions to protect your data and systems.',
                icon: faCheckCircle
              },
            ].map((svc, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-[#00CED1]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00CED1] transition">
                  <FontAwesomeIcon icon={svc.icon} className="text-2xl text-[#00CED1] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {svc.title}
                </h3>
                <p className="text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Why Zelitsolutions</p>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Trusted IT Partner
              </h2>
              <div className="space-y-6">
                {[
                  { title: '10+ Years Experience', desc: 'Proven track record in IT solutions and digital transformation.' },
                  { title: '500+ Happy Clients', desc: 'Trusted by businesses across multiple industries and sectors.' },
                  { title: '24/7 Support', desc: 'Round-the-clock technical support to keep your business running.' },
                  { title: '50+ Expert Team', desc: 'Skilled professionals dedicated to your success.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00CED1]/10 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#00CED1] text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/about" 
                className="inline-block mt-8 text-[#00CED1] font-bold hover:text-cyan-600 inline-flex items-center gap-2 transition"
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
      <section className="py-20 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Delivered' },
              { number: '50+', label: 'Team Members' },
              { number: '10+', label: 'Years in Business' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <p className="text-white/90 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Our Approach</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-[#00CED1] to-transparent"></div>
                )}
                <div className="bg-white border border-gray-200 p-8 rounded-lg hover:border-[#00CED1] transition">
                  <div className="text-4xl font-bold text-[#00CED1] mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies Section ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Success Stories</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Client Transformations
            </h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'E-Commerce Platform',
                desc: 'Scaled infrastructure to handle 300% traffic increase',
                result: '99.9% Uptime',
                industry: 'Retail'
              },
              {
                title: 'Financial Services',
                desc: 'Implemented enterprise-grade security solutions',
                result: 'Zero Breaches',
                industry: 'Finance'
              },
              {
                title: 'Healthcare Provider',
                desc: 'Modernized IT infrastructure and network',
                result: '50% Cost Reduction',
                industry: 'Healthcare'
              },
            ].map((study, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#00CED1] hover:shadow-lg transition group">
                <div className="h-40 bg-gradient-to-br from-[#00CED1]/10 to-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <FontAwesomeIcon icon={faPlay} className="text-[#00CED1] text-3xl" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#00CED1] text-sm font-bold uppercase mb-2">{study.industry}</p>
                  <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{study.desc}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[#00CED1] font-bold text-lg">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Client Feedback</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { text: 'Exceptional service and true partnership. They understand our business.', author: 'John Smith', role: 'CEO, Tech Corp' },
              { text: 'Transformed our IT infrastructure completely. Highly recommended!', author: 'Sarah Johnson', role: 'CTO, Finance Inc' },
              { text: 'Professional, reliable, and always available. Best decision we made.', author: 'Mike Chen', role: 'Director, Healthcare Solutions' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Section ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00CED1] font-bold uppercase tracking-widest text-sm mb-4">Latest Insights</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Resources & News
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Cybersecurity Trends in 2026', date: 'Jan 15, 2026', category: 'Security' },
              { title: 'Cloud Migration Best Practices', date: 'Jan 10, 2026', category: 'Cloud' },
              { title: 'Network Infrastructure Guide', date: 'Jan 5, 2026', category: 'Infrastructure' },
            ].map((blog, i) => (
              <article key={i} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#00CED1] hover:shadow-lg transition group">
                <div className="h-48 bg-gradient-to-br from-[#00CED1]/10 to-gray-100"></div>
                <div className="p-6">
                  <p className="text-[#00CED1] text-xs font-bold uppercase mb-3">{blog.category}</p>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#00CED1] transition text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.date}</p>
                  <Link href="#" className="inline-block mt-4 text-[#00CED1] font-bold hover:text-cyan-600 inline-flex items-center gap-2 transition text-sm">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="py-24 bg-gradient-to-r from-[#00CED1] to-cyan-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Elevate Your IT?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Zelitsolutions can transform your business through strategic IT solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-[#00CED1] hover:bg-gray-100 px-10 py-4 rounded font-bold transition text-lg"
            >
              Get In Touch
            </Link>
            <a 
              href="tel:+254714635554" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00CED1] px-10 py-4 rounded font-bold transition text-lg"
            >
              📱 Call: +254 714 635554
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
