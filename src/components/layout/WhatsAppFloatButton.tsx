import { whatsappUrl } from '@/lib/whatsapp'

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappUrl('float')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="pulse-heart fixed z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-brincando-laranja text-brincando-creme shadow-frame right-[max(1rem,env(safe-area-inset-right))] bottom-[max(5.25rem,calc(env(safe-area-inset-bottom)+4.25rem))] sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2.2A9.8 9.8 0 0 0 2.3 11.9c0 1.73.45 3.42 1.3 4.9L2 22l5.35-1.54a9.8 9.8 0 0 0 4.7 1.2h.01A9.8 9.8 0 0 0 21.8 12 9.8 9.8 0 0 0 12.04 2.2m0 17.9h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.17.91.85-3.1-.2-.32a8.16 8.16 0 1 1 6.98 3.83m4.47-6.11c-.24-.12-1.44-.71-1.66-.79s-.39-.12-.55.12-.63.79-.78.95-.29.18-.53.06a6.7 6.7 0 0 1-1.97-1.21 7.37 7.37 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.49.11-.11.24-.29.36-.43s.16-.24.24-.4.04-.3-.02-.43c-.06-.12-.55-1.32-.75-1.8s-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3s-.86.84-.86 2.05.88 2.38 1 2.54 1.73 2.64 4.2 3.7c.59.25 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16s.2-1.06.14-1.16-.22-.18-.46-.3"
        />
      </svg>
    </a>
  )
}
