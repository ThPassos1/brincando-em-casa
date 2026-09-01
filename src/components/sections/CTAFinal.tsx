import { Button } from '@/components/ui/Button'
import { DoodleField } from '@/components/ui/Doodle'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { whatsappUrl } from '@/lib/whatsapp'

export function CTAFinal() {
  return (
    <section
      id="matriculas"
      className="relative overflow-hidden bg-brincando-preto py-20 text-brincando-creme sm:py-24"
    >
      <DoodleField
        items={[
          { name: 'sol', className: '-top-4 -right-4 h-24 w-24 text-brincando-laranja/35 sm:h-36 sm:w-36' },
          { name: 'folha', className: 'bottom-4 left-2 h-16 w-12 text-brincando-salvia/40 sm:h-20 sm:w-16' },
          { name: 'estrela', className: 'top-10 left-4 h-8 w-8 text-brincando-rosa/50 sm:left-16 sm:h-10 sm:w-10' },
          { name: 'lua', className: 'bottom-8 right-6 h-12 w-12 text-brincando-creme/20 sm:right-16 sm:h-16 sm:w-16' },
          { name: 'passarinho', className: 'top-1/2 left-3 h-8 w-11 text-brincando-rosa/35 sm:left-10 sm:h-10 sm:w-14' },
        ]}
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
