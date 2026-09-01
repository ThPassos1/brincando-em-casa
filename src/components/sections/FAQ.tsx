import { Accordion } from '@/components/ui/Accordion'
import { DoodleField } from '@/components/ui/Doodle'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { FAQ_ITEMS } from '@/lib/faq'

export function FAQ() {
  return (
    <section id="duvidas" className="cv-auto relative overflow-hidden bg-brincando-creme py-20 sm:py-24">
      <DoodleField
        items={[
          { name: 'nuvem', className: 'top-5 right-2 h-8 w-16 text-brincando-terra/20 sm:top-8 sm:right-10 sm:h-10 sm:w-20' },
          { name: 'estrela', className: 'bottom-6 left-3 h-8 w-8 text-brincando-laranja/35 sm:bottom-10 sm:left-10 sm:h-11 sm:w-11' },
          { name: 'lua', className: 'top-8 left-2 h-9 w-9 text-brincando-terra/20 sm:top-12 sm:left-8 sm:h-12 sm:w-12' },
          { name: 'gota', className: 'right-3 top-1/2 h-8 w-6 text-brincando-salvia/40 sm:right-8 sm:h-11 sm:w-8' },
          { name: 'folha', className: 'right-4 bottom-10 h-10 w-8 text-brincando-salvia/35 sm:right-12 sm:bottom-14 sm:h-14 sm:w-11' },
        ]}
      />
      <div className="container-page max-w-3xl">
        <SectionReveal>
          <p className="font-hand text-2xl text-brincando-laranja">FAQ</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">Dúvidas mais comuns</h2>
        </SectionReveal>
        <div className="mt-10">
          <Accordion items={[...FAQ_ITEMS]} />
        </div>
      </div>
    </section>
  )
}
