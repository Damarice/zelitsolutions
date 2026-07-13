import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo & Brand */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="Zelitsolutions"
              width={100}
              height={100}
              priority
              className="rounded mb-4 object-contain"
              style={{ width: '100%', height: '50px', maxWidth: '100px' }}
            />
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for comprehensive IT solutions and services.
            </p>
            <div className="flex gap-3">
              {[faFacebook, faTwitter, faLinkedin, faInstagram].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-100 hover:bg-[#00CED1] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition">
                  <FontAwesomeIcon icon={icon} className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/',            label: 'Home' },
                { href: '/about',       label: 'About' },
                { href: '/portfolio',   label: 'Portfolio' },
                { href: '/career',      label: 'Career' },
                { href: '/our-clients', label: 'Our Clients' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#00CED1] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                'Website Development',
                'Managed IT Services',
                'Computer Sales',
                'Domain & Email Services',
                'Network Solutions',
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#00CED1]" />
                info@zelitsolutions.com
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#00CED1]" />
                sales@zelitsolutions.com
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-[#00CED1]" />
                +254 714 635554
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Zelitsolutions. All rights reserved.
      </div>
    </footer>
  )
}
