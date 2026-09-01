import { Accordion } from '@/components/ui/Accordion'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { FAQ_ITEMS } from '@/lib/faq'

export function FAQ() {
  return (
    <section id="duvidas" className="cv-auto relative bg-brincando-creme py-20 sm:py-24">
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
