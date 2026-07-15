export default function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zelit Solutions Ltd',
    image: 'https://zelitsolutions.com/logo.jpeg',
    description: 'Professional IT Solutions & Web Development Services in Kenya',
    url: 'https://zelitsolutions.com',
    telephone: '+254714635554',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi',
      addressLocality: 'Nairobi',
      addressRegion: 'Kenya',
      addressCountry: 'KE',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    sameAs: [
      'https://www.facebook.com/zelitsolutions',
      'https://www.linkedin.com/company/zelitsolutions',
      'https://www.twitter.com/zelitsolutions',
    ],
    services: [
      {
        '@type': 'Service',
        name: 'Website Development',
        description: 'Custom high-performance websites and e-commerce solutions',
      },
      {
        '@type': 'Service',
        name: 'Managed IT Services',
        description: 'Proactive IT support and infrastructure management',
      },
      {
        '@type': 'Service',
        name: 'Network Solutions',
        description: 'Structured cabling and enterprise-grade networking',
      },
      {
        '@type': 'Service',
        name: 'Domain Registration & Email',
        description: 'Professional domain registration and email services',
      },
      {
        '@type': 'Service',
        name: 'Computer Sales',
        description: 'High-quality computer hardware and accessories',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
