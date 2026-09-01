import { motion, useReducedMotion } from 'framer-motion'
import type { IllustratedIconName } from '@/assets/illustrations'
import { DoodleField } from '@/components/ui/Doodle'
import { IllustratedIcon } from '@/components/ui/IllustratedIcon'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const cards: Array<{
  icon: IllustratedIconName
  title: string
  text: string
  slot: string
  src?: string
  alt: string
  objectPosition: string
  wash: { base: string; image: string }
}> = [
  {
    icon: 'brincar',
    title: 'Brincar Livre',
    text: 'Sem roteiro, sem pressa. O brincar espontâneo é o principal jeito da criança entender o mundo. E é por aí que a aprendizagem de verdade acontece.',
    slot: 'IMG_PROPOSTA_01',
    src: '/proposta/brincar-livre.png',
    alt: 'Crianças brincando no trepa-trepa de madeira da Brincando em Casa',
    objectPosition: 'center 48%',
    wash: {
      base: '#c4a882',
      image:
        'radial-gradient(ellipse at 30% 20%, color-mix(in srgb, var(--brincando-laranja) 42%, transparent), transparent 48%), radial-gradient(ellipse at 80% 70%, color-mix(in srgb, var(--brincando-rosa) 55%, transparent), transparent 46%)',
    },
  },
  {
    icon: 'natureza',
    title: 'Contato com a Natureza',
    text: 'Pés na terra, mãos na areia, olhos no céu. Em plena Manaus, cultivamos um quintal onde a natureza faz parte do dia a dia, não é só um passeio.',
    slot: 'IMG_PROPOSTA_02',
    src: '/proposta/contato-natureza.png',
    alt: 'Criança brincando na areia do quintal da Brincando em Casa',
    objectPosition: 'center 40%',
    wash: {
      base: '#8fa07a',
      image:
        'radial-gradient(ellipse at 20% 25%, color-mix(in srgb, var(--brincando-salvia) 70%, transparent), transparent 50%), radial-gradient(ellipse at 85% 80%, color-mix(in srgb, var(--brincando-terra) 28%, transparent), transparent 44%)',
    },
  },
  {
    icon: 'ritmo',
    title: 'Ritmo e Rotina',
    text: 'Dias com começo, meio e fim que a criança reconhece e confia. O ritmo dá segurança, e é da segurança que nasce a coragem de explorar.',
    slot: 'IMG_PROPOSTA_03',
    src: '/proposta/ritmo-rotina.png',
    alt: 'Crianças no balanço no quintal da Brincando em Casa',
    objectPosition: 'center 24%',
    wash: {
      base: '#b8956c',
      image:
        'radial-gradient(ellipse at 70% 15%, color-mix(in srgb, var(--brincando-laranja) 38%, transparent), transparent 46%), radial-gradient(ellipse at 20% 85%, color-mix(in srgb, var(--brincando-terra) 40%, transparent), transparent 48%)',
    },
  },
  {
    icon: 'cuidado',
    title: 'Cuidado Individual',
    text: 'Turmas pequenas e educadores formados em Pedagogia Waldorf, que enxergam cada criança no seu próprio tempo, não numa média.',
    slot: 'IMG_PROPOSTA_04',
    src: '/proposta/cuidado-individual.png',
    alt: 'Educadoras e crianças reunidas à mesa na Brincando em Casa',
    objectPosition: 'center 52%',
    wash: {
      base: '#c9a99a',
      image:
        'radial-gradient(ellipse at 75% 20%, color-mix(in srgb, var(--brincando-rosa) 68%, transparent), transparent 48%), radial-gradient(ellipse at 15% 75%, color-mix(in srgb, var(--brincando-salvia) 28%, transparent), transparent 44%)',
    },
  },
]

function PropostaCard({
  icon,
  title,
  text,
  slot,
  src,
  alt,
  objectPosition,
  wash,
}: (typeof cards)[number]) {
  return (
    <article className="organic-border relative overflow-hidden bg-brincando-creme shadow-frame ring-1 ring-brincando-terra/15">
      {/* {slot} — foto de fundo do card, fornecida pela cliente */}
      <div className="relative h-48 overflow-hidden sm:h-60 md:h-64 lg:h-72">
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: wash.base, backgroundImage: wash.image }}
          >
            <span className="absolute top-3 right-4 font-hand text-sm text-brincando-terra/70">
              {slot}
            </span>
          </div>
        )}
        <div
          className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-brincando-creme to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative -mt-8 px-5 pb-6 sm:px-7 sm:pb-7">
        <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brincando-creme text-brincando-laranja shadow-soft ring-1 ring-brincando-terra/12">
          <IllustratedIcon name={icon} className="h-10 w-10" />
        </span>
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-3 text-brincando-terra">{text}</p>
      </div>
    </article>
  )
}

export function Proposta() {
  const reduce = useReducedMotion()

  return (
    <section id="proposta" className="cv-auto relative overflow-hidden bg-brincando-creme py-20 sm:py-24">
      <DoodleField
        items={[
          { name: 'estrela', className: 'top-6 right-3 h-10 w-10 text-brincando-laranja/45 sm:top-10 sm:right-10 sm:h-14 sm:w-14' },
          { name: 'lua', className: 'bottom-8 left-2 h-11 w-11 text-brincando-terra/25 sm:bottom-12 sm:left-8 sm:h-16 sm:w-16' },
          { name: 'folha', className: 'top-28 left-2 h-10 w-8 text-brincando-salvia/35 sm:top-36 sm:left-6 sm:h-14 sm:w-11' },
          { name: 'abelha', className: 'right-2 top-1/2 h-8 w-11 text-brincando-laranja/30 sm:right-8 sm:h-10 sm:w-14' },
          { name: 'caracol', className: 'right-6 bottom-24 h-9 w-9 text-brincando-terra/20 sm:right-16 sm:bottom-20 sm:h-12 sm:w-12' },
        ]}
      />
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-brincando-laranja">Nossa proposta</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">O que a gente vive todos os dias</h2>
          <p className="mt-5 text-brincando-terra">
            Na Brincando em Casa, a gente acredita que criança não precisa de
            pressa. Precisa de tempo, de terra debaixo dos pés e de adultos por
            perto que confiam no seu jeito de aprender. É isso que a Pedagogia
            Waldorf nos ensina. E é isso que a gente vive todos os dias com os
            pequenos.
          </p>
        </SectionReveal>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={fadeUp}>
              <PropostaCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
