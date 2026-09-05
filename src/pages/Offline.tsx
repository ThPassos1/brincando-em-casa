import { BrandLogo } from '@/components/ui/BrandLogo'
import { SITE } from '@/lib/site'

/**
 * Página pública enquanto o site está off no domínio gratuito.
 * Sem CTAs, conteúdo ou links de conversão — só marca e aviso.
 */
export function Offline() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--brincando-rosa)_35%,transparent),transparent_55%),radial-gradient(ellipse_at_80%_70%,color-mix(in_srgb,var(--brincando-salvia)_28%,transparent),transparent_50%),linear-gradient(165deg,var(--brincando-creme)_0%,var(--brincando-creme-escuro)_100%)]"
        aria-hidden
      />
      <div className="paper-grain" aria-hidden />

      <div className="relative z-10 flex max-w-md flex-col items-center gap-6 animate-[offline-in_0.7s_ease-out_both]">
        <BrandLogo className="h-20 w-auto sm:h-24" />
        <h1 className="font-display text-3xl text-brincando-terra sm:text-4xl">
          {SITE.shortName}
        </h1>
        <p className="text-base text-brincando-terra-escuro/85 sm:text-lg">
          Site temporariamente indisponível. Em breve no domínio próprio.
        </p>
      </div>

      <style>{`
        @keyframes offline-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="offline-in"] { animation: none !important; }
        }
      `}</style>
    </main>
  )
}
