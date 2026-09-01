import { lazy, Suspense, useEffect, useState } from 'react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { WhatsAppFloatButton } from '@/components/layout/WhatsAppFloatButton'
import { Hero } from '@/components/sections/Hero'
import { Privacidade } from '@/pages/Privacidade'

const Proposta = lazy(() =>
  import('@/components/sections/Proposta').then((m) => ({ default: m.Proposta })),
)
const Espaco = lazy(() =>
  import('@/components/sections/Espaco').then((m) => ({ default: m.Espaco })),
)
const Cotidiano = lazy(() =>
  import('@/components/sections/Cotidiano').then((m) => ({ default: m.Cotidiano })),
)
const Depoimentos = lazy(() =>
  import('@/components/sections/Depoimentos').then((m) => ({
    default: m.Depoimentos,
  })),
)
const Diferenciais = lazy(() =>
  import('@/components/sections/Diferenciais').then((m) => ({
    default: m.Diferenciais,
  })),
)
const FAQ = lazy(() =>
  import('@/components/sections/FAQ').then((m) => ({ default: m.FAQ })),
)
const CTAFinal = lazy(() =>
  import('@/components/sections/CTAFinal').then((m) => ({ default: m.CTAFinal })),
)

const PRIVACY_HASH = '#politica-de-privacidade'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return hash
}

export default function App() {
  const hash = useHash()
  const isPrivacy = hash === PRIVACY_HASH

  return (
    <>
      <JsonLd />
      <div className="paper-grain" aria-hidden />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-brincando-creme focus:px-3 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <Navbar />
      {isPrivacy ? (
        <Privacidade />
      ) : (
        <main id="conteudo">
          <Hero />
          <Suspense fallback={null}>
            <Proposta />
            <Espaco />
            <Cotidiano />
            <Depoimentos />
            <Diferenciais />
            <FAQ />
            <CTAFinal />
          </Suspense>
        </main>
      )}
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
