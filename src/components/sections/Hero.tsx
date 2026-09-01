import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CloudSketch, LeafSketch, SunSketch } from '@/assets/illustrations'
import { Button } from '@/components/ui/Button'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SITE } from '@/lib/site'
import { whatsappUrl } from '@/lib/whatsapp'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const leafY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-[calc(4.4rem+env(safe-area-inset-top))] sm:min-h-svh"
    >
      <HeroCarousel />

      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: sunY }}
        className="pointer-events-none absolute top-20 right-2 z-20 text-brincando-laranja sm:top-24 sm:right-12"
      >
        <SunSketch className="h-14 w-14 drop-shadow-sm sm:h-28 sm:w-28" />
      </motion.div>
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: leafY }}
        className="pointer-events-none absolute top-36 left-2 z-20 hidden text-brincando-salvia min-[480px]:block sm:top-40 sm:left-10"
      >
        <LeafSketch className="h-16 w-12 drop-shadow-sm sm:h-20 sm:w-16" />
      </motion.div>
      <CloudSketch
        aria-hidden
        className="pointer-events-none absolute top-28 left-1/3 z-20 hidden h-10 w-24 text-brincando-creme/80 sm:block"
      />

      <div className="relative z-20 container-page pb-[max(4.5rem,calc(env(safe-area-inset-bottom)+3.5rem))] sm:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-[1.85rem] leading-[1.15] text-brincando-terra-escuro [text-shadow:0_2px_16px_var(--brincando-creme),0_0_36px_var(--brincando-creme)] sm:text-5xl lg:text-[3.4rem]">
            Um lugar onde a infância tem tempo para acontecer
          </h1>
          <p className="mt-4 max-w-xl rounded-[1.2rem_1.5rem_1.1rem_1.6rem] bg-brincando-creme/55 px-3.5 py-3 text-[0.95rem] font-semibold text-brincando-terra-escuro sm:mt-5 sm:px-5 sm:py-3.5 sm:text-lg">
            Espaço Educativo em Manaus com práticas inspiradas na{' '}
            <span className="font-bold text-brincando-laranja">
              Pedagogia Waldorf
            </span>
            . Onde brincar, criar e descobrir o mundo são, antes de tudo,
            coisas sérias.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button
              href={whatsappUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-heart w-full sm:w-auto"
            >
              Agendar uma visita
            </Button>
            <Button
              href="#proposta"
              variant="secondary"
              className="!bg-brincando-creme/80 w-full text-brincando-terra-escuro sm:w-auto"
            >
              Conhecer a proposta
            </Button>
          </div>
          <p className="mt-5 font-hand text-lg font-semibold text-brincando-terra-escuro [text-shadow:0_2px_16px_var(--brincando-creme),0_0_36px_var(--brincando-creme)] sm:text-xl">
            🌿 Práticas inspiradas na Pedagogia Waldorf
          </p>
          <p className="mt-1 max-w-md text-sm font-semibold break-words text-brincando-terra-escuro [text-shadow:0_2px_16px_var(--brincando-creme),0_0_36px_var(--brincando-creme)]">
            {SITE.address.line}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
