import { LeafSketch, SunSketch } from '@/assets/illustrations'
import { Button } from '@/components/ui/Button'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { whatsappUrl } from '@/lib/whatsapp'

export function CTAFinal() {
  return (
    <section
      id="matriculas"
      className="relative overflow-hidden bg-brincando-preto py-20 text-brincando-creme sm:py-24"
    >
      <SunSketch
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-4 h-28 w-28 text-brincando-laranja/35 sm:h-36 sm:w-36"
      />
      <LeafSketch
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-2 h-20 w-16 text-brincando-salvia/40"
      />
      <SectionReveal className="relative container-page max-w-2xl text-center">
        <p className="font-hand text-2xl text-brincando-rosa">Matrículas</p>
        <h2 className="mt-2 text-[1.7rem] text-brincando-creme sm:text-4xl">
          Vem conhecer de perto
        </h2>
        <p className="mt-5 text-brincando-creme/78">
          As vagas para as turmas são limitadas, porque o cuidado individual
          com cada criança é o que não abrimos mão. Agende sua visita e venha
          sentir com os próprios olhos o que é a Brincando em Casa.
        </p>
        <div className="mt-8">
          <Button
            href={whatsappUrl('matriculas')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3.5 text-base sm:w-auto"
          >
            Quero agendar minha visita
          </Button>
        </div>
      </SectionReveal>
    </section>
  )
}
