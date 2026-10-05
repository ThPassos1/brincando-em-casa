type Fbq = (...args: unknown[]) => void

declare global {
  interface Window {
    fbq?: Fbq
  }
}

const WHATSAPP_LINK = 'a[href^="https://wa.me/"]'

/** O Pixel base e o PageView ficam no index.html; aqui entra a conversão do WhatsApp. */
export function trackWhatsAppContacts(): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element) || !target.closest(WHATSAPP_LINK)) return
      window.fbq?.('track', 'Contact')
    },
    { capture: true },
  )
}
