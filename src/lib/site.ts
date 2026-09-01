export const SITE = {
  name: 'Brincando em Casa, Espaço Educativo',
  shortName: 'Brincando em Casa',
  tagline: 'Um lugar onde a infância tem tempo para acontecer',
  description:
    'Espaço Educativo em Manaus com práticas inspiradas na Pedagogia Waldorf. Onde brincar, criar e descobrir o mundo são, antes de tudo, coisas sérias.',
  instagram: 'https://www.instagram.com/brincandoemcasaa/',
  instagramHandle: '@brincandoemcasaa',
  phoneDisplay: '(92) 98577-9009',
  address: {
    street: 'Rua Marquês da Vila Real da Praia Grande, 466',
    neighborhood: 'Flores',
    city: 'Manaus',
    state: 'AM',
    zip: '69058-100',
    line: 'Rua Marquês da Vila Real da Praia Grande, 466, Flores, Manaus',
    full: 'Rua Marquês da Vila Real da Praia Grande, 466, Flores, Manaus/AM, 69058-100',
  },
  mapsQuery:
    'Rua Marquês da Vila Real da Praia Grande, 466, Flores, Manaus, AM, 69058-100',
  hours: 'Segunda a sexta. Confirme o horário no WhatsApp',
  ages: '1 ano a 3 anos e 11 meses',
  url: 'https://brincandoemcasa.com.br',
} as const

export function mapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`
}

export function mapsDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`
}
