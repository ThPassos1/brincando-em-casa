import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'

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

export default defineConfig({
  plugins: [react(), tailwindcss(), injectProductionCsp()],
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
