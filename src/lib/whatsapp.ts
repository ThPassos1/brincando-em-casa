import { isE164Digits } from '@/lib/security'

export const WHATSAPP_PHONE = '5592985779009'

export const WHATSAPP_MESSAGES = {
  hero: 'Olá! Vim pelo Instagram/anúncio e gostaria de agendar uma visita à Brincando em Casa 🌿',
  espaco:
    'Olá! Vi o espaço da Brincando em Casa e queria saber mais sobre agendar uma visita.',
  matriculas: 'Olá! Quero saber mais sobre matrícula na Brincando em Casa.',
  float: 'Olá! Gostaria de tirar uma dúvida sobre a Brincando em Casa.',
} as const

export type WhatsAppSource = keyof typeof WHATSAPP_MESSAGES

export function whatsappUrl(source: WhatsAppSource): string {
  if (!isE164Digits(WHATSAPP_PHONE)) return '#conteudo'
  const text = encodeURIComponent(WHATSAPP_MESSAGES[source])
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}
