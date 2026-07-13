'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppBubble() {
  const phoneNumber = '254714635554'
  const message = 'Hello! I am interested in your services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition transform hover:scale-110 duration-300"
      title="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  )
}
