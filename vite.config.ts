import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'

/** Espelha `src/config/publicAccess.ts` — manter sincronizado. */
const SITE_PUBLIC_ACCESS = false

const CSP =
  "default-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; frame-src https://www.google.com https://maps.google.com; connect-src 'self'; worker-src 'none'; manifest-src 'self'; upgrade-insecure-requests"

const productionHeaders: Record<string, string> = {
  'Content-Security-Policy': CSP,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  'X-DNS-Prefetch-Control': 'off',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

/** Pastas/arquivos de mídia da landing — omitidos do deploy enquanto o site está off. */
const OFFLINE_EXCLUDED_PUBLIC = [
  'hero',
  'espaco',
  'proposta',
  'depoimentos',
  'og-image.jpg',
] as const

function injectProductionCsp(): Plugin {
  return {
    name: 'inject-production-csp',
    transformIndexHtml(html, ctx) {
      if (ctx.server) return html
      const tag = `    <meta http-equiv="Content-Security-Policy" content="${CSP.replace(/"/g, '&quot;')}" />\n`
      return html.replace(
        '<meta name="referrer" content="strict-origin-when-cross-origin" />',
        `<meta name="referrer" content="strict-origin-when-cross-origin" />\n${tag}`,
      )
    },
  }
}

const OFFLINE_EXCLUDED_CHUNK_PREFIXES = [
  'App-',
  'Proposta-',
  'Espaco-',
  'Cotidiano-',
  'Depoimentos-',
  'Diferenciais-',
  'FAQ-',
  'CTAFinal-',
  'faq-',
  'Button-',
  'ImagePlaceholder-',
  'IllustratedIcon-',
  'SectionReveal-',
  'AnimatePresence-',
  'use-reduced-motion-',
] as const

function omitLandingMediaWhenOffline(): Plugin {
  return {
    name: 'omit-landing-media-when-offline',
    apply: 'build',
    closeBundle() {
      if (SITE_PUBLIC_ACCESS) return
      const outDir = path.resolve(import.meta.dirname, 'dist')
      for (const name of OFFLINE_EXCLUDED_PUBLIC) {
        fs.rmSync(path.join(outDir, name), { recursive: true, force: true })
      }
      const assetsDir = path.join(outDir, 'assets')
      if (!fs.existsSync(assetsDir)) return
      for (const file of fs.readdirSync(assetsDir)) {
        if (OFFLINE_EXCLUDED_CHUNK_PREFIXES.some((prefix) => file.startsWith(prefix))) {
          fs.rmSync(path.join(assetsDir, file), { force: true })
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    injectProductionCsp(),
    omitLandingMediaWhenOffline(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
  preview: {
    headers: productionHeaders,
  },
  build: {
    target: 'es2022',
    cssMinify: true,
    sourcemap: false,
  },
})
