import { DoodleField } from '@/components/ui/Doodle'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { SITE } from '@/lib/site'
import { whatsappUrl } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brincando-preto pb-[max(6.5rem,calc(env(safe-area-inset-bottom)+5.25rem))] text-brincando-creme/85 sm:pb-[max(4.5rem,calc(env(safe-area-inset-bottom)+3.5rem))]">
      <DoodleField
        items={[
          { name: 'casa', className: 'top-6 right-4 h-10 w-10 text-brincando-creme/15 sm:top-10 sm:right-12 sm:h-14 sm:w-14' },
          { name: 'folha', className: 'bottom-20 left-2 h-12 w-9 text-brincando-salvia/25 sm:bottom-16 sm:left-8 sm:h-16 sm:w-12' },
          { name: 'sol', className: 'top-8 left-3 h-10 w-10 text-brincando-laranja/20 sm:top-12 sm:left-10 sm:h-14 sm:w-14' },
          { name: 'estrela', className: 'right-8 top-1/2 h-8 w-8 text-brincando-rosa/25 sm:right-20 sm:h-10 sm:w-10' },
          { name: 'nuvem', className: 'bottom-24 right-4 h-8 w-16 text-brincando-creme/10 sm:bottom-20 sm:right-16 sm:h-10 sm:w-20' },
        ]}
      />
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 text-brincando-creme">
            <BrandLogo className="h-12" />
            <span>
              <span className="block font-display text-lg">{SITE.shortName}</span>
              <span className="block font-hand text-lg text-brincando-rosa">
                Espaço Educativo
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brincando-creme/70">
            Práticas inspiradas na Pedagogia Waldorf, em Manaus.
          </p>
        </div>

        <div>
          <p className="font-display text-lg text-brincando-creme">Onde estamos</p>
          <address className="mt-3 text-sm leading-relaxed break-words not-italic">
            {SITE.address.full}
          </address>
          <p className="mt-4 font-display text-lg text-brincando-creme">
            Horário de atendimento
          </p>
          <p className="mt-2 text-sm">{SITE.hours}</p>
        </div>

        <div>
          <p className="font-display text-lg text-brincando-creme">Fale com a gente</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brincando-rosa"
              >
                Instagram {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl('float')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brincando-rosa"
              >
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
            <li className="pt-2">
              <a href="#politica-de-privacidade" className="underline decoration-brincando-terra/50 underline-offset-4 hover:text-brincando-rosa">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="container-page border-t border-brincando-creme/10 py-5 text-xs leading-relaxed text-brincando-creme/50">
        © {new Date().getFullYear()} {SITE.name}. Feito pela{' '}
        <a
          href="https://www.techt.agency/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brincando-creme/70 underline decoration-brincando-terra/50 underline-offset-4 hover:text-brincando-rosa"
        >
          TechT
        </a>{' '}
        com calma, para a infância.
      </p>
    </footer>
  )
}
