import type { IllustratedIconName } from '@/assets/illustrations'
import { Doodle } from '@/components/ui/Doodle'
import { IllustratedIcon } from '@/components/ui/IllustratedIcon'
import { SectionReveal } from '@/components/ui/SectionReveal'

const momentos: Array<{
  icon: IllustratedIconName
  title: string
  text: string
}> = [
  {
    icon: 'acolhida',
    title: 'Acolhida',
    text: 'Chegada com calma, cada criança recebida pelo nome.',
  },
  {
    icon: 'brincar',
    title: 'Brincar Livre',
    text: 'Tempo para o brincar espontâneo guiar a manhã.',
  },
  {
    icon: 'roda',
    title: 'Roda e Histórias',
    text: 'Momento de reunir, cantar e ouvir contos.',
  },
  {
    icon: 'alimentacao',
    title: 'Alimentação',
    text: 'Pausa com alimentação saudável e cheia de cuidado.',
  },
  {
    icon: 'arlivre',
    title: 'Ar Livre',
    text: 'Quintal, natureza e movimento em liberdade.',
  },
]

export function Cotidiano() {
  return (
    <section id="cotidiano" className="cv-auto relative overflow-hidden bg-brincando-creme py-20 sm:py-24">
      <Doodle name="abelha" className="top-7 right-4 h-8 w-11 text-brincando-laranja/40 sm:top-12 sm:right-16 sm:h-11 sm:w-14" />
      <Doodle name="galho" className="bottom-8 left-1 h-10 w-14 text-brincando-salvia/40 sm:bottom-10 sm:left-8 sm:h-14 sm:w-20" />
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-brincando-laranja">Cotidiano</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">Um dia na Brincando em Casa</h2>
          <p className="mt-5 text-brincando-terra">
            Nossos dias seguem um ritmo gostoso de reconhecer. É esse ritmo
            que dá à criança a segurança para se soltar.
          </p>
        </SectionReveal>

        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-5">
          <span
            aria-hidden
            className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-brincando-terra/25 lg:block"
          />
          {momentos.map((item, index) => (
            <li key={item.title} className="relative text-center lg:text-left">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brincando-creme-escuro text-brincando-terra ring-1 ring-brincando-terra/15 lg:mx-0">
                <IllustratedIcon name={item.icon} className="h-10 w-10" />
              </div>
              <p className="mt-4 font-hand text-lg text-brincando-laranja">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-brincando-terra">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
