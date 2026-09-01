/** Only same-origin asset paths. Blocks protocol-relative, traversal and remote URLs. */
export function isSafeAssetPath(src: string): boolean {
  if (!src.startsWith('/') || src.startsWith('//')) return false
  if (src.includes('..') || src.includes('\\') || src.includes('\0')) return false
  return true
}

const SAFE_HREF_PROTOCOLS = new Set(['https:', 'http:', 'mailto:', 'tel:'])

/** Blocks javascript:, data: and other dangerous URL schemes. */
export function isSafeHref(href: string): boolean {
  const value = href.trim()
  if (!value) return false
  if (value.startsWith('#') || (value.startsWith('/') && !value.startsWith('//'))) {
    return true
  }

  try {
    const url = new URL(value)
    return SAFE_HREF_PROTOCOLS.has(url.protocol)
  } catch {
    return false
  }
}

export function relForTarget(rel: string | undefined, target: string | undefined): string | undefined {
  if (target !== '_blank') return rel
  const parts = new Set((rel ?? '').split(/\s+/).filter(Boolean))
  parts.add('noopener')
  parts.add('noreferrer')
  return [...parts].join(' ')
}

/** Prevents </script> breakout when JSON-LD is injected into a script tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function isE164Digits(phone: string): boolean {
  return /^\d{10,15}$/.test(phone)
}
