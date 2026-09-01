import { buildJsonLd } from '@/lib/seo'
import { serializeJsonLd } from '@/lib/security'

export function JsonLd() {
  const data = buildJsonLd()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
