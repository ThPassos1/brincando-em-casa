import { FAQ_ITEMS } from '@/lib/faq'
import { SITE } from '@/lib/site'

export const SITE_URL = 'https://brincandoemcasa.com.br'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const LOGO_URL = `${SITE_URL}/logo-brincando-em-casa.png`

export const SITE_GEO = {
  latitude: -3.0574,
  longitude: -59.99518,
} as const

/** Termos de busca local. Só entram em meta/JSON-LD, não no texto visível da página. */
export const SEARCH_KEYWORDS = [
  'creche',
  'creche Manaus',
  'creche Flores Manaus',
  'escola',
  'escola infantil',
  'escola infantil Manaus',
  'escola particular infantil',
  'educação infantil',
  'educação infantil Manaus',
  'maternal',
  'berçário',
  'jardim de infância',
  'espaço educativo',
  'espaço educativo Manaus',
  'pedagogia Waldorf',
  'escola Waldorf Manaus',
  'creche Waldorf',
] as const

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildJsonLd() {
  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const organization = {
    '@type': ['EducationalOrganization', 'ChildCare', 'Preschool'],
    '@id': `${SITE_URL}/#organizacao`,
    name: SITE.name,
    alternateName: [
      SITE.shortName,
      'Creche Brincando em Casa',
      'Escola infantil Brincando em Casa',
      'Espaço Educativo Brincando em Casa',
    ],
    description: SITE.description,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: [
      LOGO_URL,
      OG_IMAGE,
      `${SITE_URL}/hero/hero-01.png`,
      `${SITE_URL}/hero/hero-02.png`,
      `${SITE_URL}/hero/hero-03.png`,
    ],
    telephone: '+55-92-98577-9009',
    foundingLocation: {
      '@type': 'Place',
      name: 'Manaus, Amazonas, Brasil',
    },
    areaServed: {
      '@type': 'City',
      name: 'Manaus',
      containedInPlace: {
        '@type': 'State',
        name: 'Amazonas',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    hasMap: mapsUrl(),
    sameAs: [SITE.instagram],
    knowsAbout: [
      'Pedagogia Waldorf',
      'Educação infantil',
      'Creche',
      'Escola infantil',
      'Maternal',
      'Berçário',
      'Jardim de infância',
      'Brincar livre',
      'Educação em contato com a natureza',
    ],
    keywords: SEARCH_KEYWORDS.join(', '),
    additionalType: [
      'https://schema.org/ChildCare',
      'https://schema.org/Preschool',
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Educação infantil',
        serviceType: [
          'Creche',
          'Escola infantil',
          'Maternal',
          'Berçário',
          'Espaço educativo',
        ],
        areaServed: {
          '@type': 'City',
          name: 'Manaus',
        },
      },
    },
    audience: {
      '@type': 'PeopleAudience',
      suggestedMinAge: 1,
      suggestedMaxAge: 3,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-92-98577-9009',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE.shortName,
    description: SITE.description,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE_URL}/#organizacao` },
  }

  const breadcrumbs = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE.shortName,
        item: `${SITE_URL}/`,
      },
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [website, organization, faqPage, breadcrumbs],
  }
}

function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`
}
