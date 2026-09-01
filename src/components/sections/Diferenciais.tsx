import { Doodle } from '@/components/ui/Doodle'
import { IllustratedIcon } from '@/components/ui/IllustratedIcon'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { WaveDivider } from '@/components/ui/WaveDivider'

const itens = [
  'Turmas reduzidas, com atenção real a cada criança',
  'Educadores formados em Pedagogia Waldorf',
  'Ambiente natural, dentro da cidade de Manaus',
  'Rotina com ritmo, sem pressa e sem telas',
  'Alimentação cuidada e saudável',
  'Comunidade próxima de famílias que pensam parecido',
] as const

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="cv-auto relative overflow-hidden bg-brincando-salvia-clara/60 py-20 sm:py-24"
    >
      <Doodle name="casa" className="top-10 right-3 h-10 w-10 text-brincando-terra/25 sm:top-16 sm:right-12 sm:h-14 sm:w-14" />
      <Doodle name="folha" className="bottom-5 left-2 h-12 w-9 text-brincando-salvia sm:bottom-8 sm:left-8 sm:h-16 sm:w-12" />
      <WaveDivider
        fill="var(--brincando-creme)"
        flip
        className="absolute inset-x-0 top-0"
      />
      <div className="container-page pt-6">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-brincando-terra">Por que aqui</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">
            Por que famílias escolhem a Brincando em Casa
          </h2>
        </SectionReveal>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {itens.map((item) => (
            <li
              key={item}
              className="organic-border flex items-start gap-3 bg-brincando-creme/70 p-4 ring-1 ring-brincando-terra/10"
            >
              <IllustratedIcon
                name="check"
                className="mt-0.5 h-7 w-7 shrink-0 text-brincando-laranja"
              />
              <span className="text-brincando-preto/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
