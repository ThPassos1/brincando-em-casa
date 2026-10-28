import { Button } from '@/components/ui/Button'
import { whatsappUrl } from '@/lib/whatsapp'

export function FloatingVisitButton() {
  return (
    <Button
      href={whatsappUrl('hero')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar uma visita pelo WhatsApp"
      className="pulse-heart fixed left-1/2 z-[60] min-h-14 -translate-x-1/2 whitespace-nowrap px-8 py-4 text-lg shadow-frame ring-2 ring-brincando-creme/90 bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] sm:min-h-16 sm:px-10 sm:py-5 sm:text-xl"
    >
      Agendar uma visita
    </Button>
  )
}
