import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { SITE } from '@/lib/site'
import { whatsappUrl } from '@/lib/whatsapp'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#proposta', label: 'Nossa Proposta' },
  { href: '#espaco', label: 'O Espaço' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#matriculas', label: 'Matrículas' },
] as const

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect
        x="3.4"
        y="3.4"
        width="17.2"
        height="17.2"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" />
    </svg>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300',
        scrolled || open
          ? 'bg-brincando-creme shadow-[0_1px_0_rgb(138_90_59/0.12)]'
          : 'bg-transparent',
      )}
    >
      <nav
        className="container-page flex h-[4.4rem] items-center justify-between gap-3 xl:gap-5"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex min-w-0 shrink items-center gap-2 text-brincando-preto sm:gap-2.5 xl:min-w-fit xl:shrink-0"
        >
          <BrandLogo className="h-10 shrink-0 sm:h-12" />
          <span className="hidden min-w-0 leading-tight sm:block xl:min-w-fit">
            <span className="block font-display text-[1.05rem] font-bold whitespace-nowrap sm:text-[1.1rem] max-xl:max-w-[9.5rem] max-xl:truncate">
              {SITE.shortName}
            </span>
            <span className="hidden font-hand text-[1.05rem] font-bold text-brincando-terra-escuro drop-shadow-[0_1px_10px_var(--brincando-creme)] sm:block">
              Espaço Educativo
            </span>
          </span>
        </a>

        <ul className="hidden min-w-0 items-center justify-center xl:flex xl:gap-3 2xl:gap-5">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="whitespace-nowrap text-[0.92rem] font-bold text-brincando-terra-escuro drop-shadow-[0_1px_10px_var(--brincando-creme)] transition-colors hover:text-brincando-laranja 2xl:text-[1rem]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-2 md:inline-flex xl:hidden">
            <Button
              href={SITE.instagram}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o Instagram da Brincando em Casa"
              className="px-3.5 py-2.5 text-sm"
            >
              <InstagramMark className="h-4 w-4" />
              Instagram
            </Button>
            <Button
              href={whatsappUrl('float')}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-heart px-4 py-2.5 text-sm"
            >
              WhatsApp
            </Button>
          </span>
          <span className="hidden items-center gap-2 xl:inline-flex">
            <Button
              href={SITE.instagram}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o Instagram da Brincando em Casa"
              className="px-3 py-2.5 2xl:px-6 2xl:py-3"
            >
              <InstagramMark className="h-4.5 w-4.5" />
              <span className="hidden 2xl:inline">Instagram</span>
            </Button>
            <Button
              href={whatsappUrl('float')}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-heart px-5 py-2.5 2xl:px-6 2xl:py-3"
            >
              <span className="2xl:hidden">WhatsApp</span>
              <span className="hidden 2xl:inline">Falar no WhatsApp</span>
            </Button>
          </span>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brincando-terra/25 bg-brincando-creme/90 text-brincando-preto xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={cn(
                  'block h-[1.5px] w-5 bg-current transition-transform',
                  open && 'translate-y-2 rotate-45',
                )}
              />
              <span className={cn('block h-[1.5px] w-5 bg-current', open && 'opacity-0')} />
              <span
                className={cn(
                  'block h-[1.5px] w-5 bg-current transition-transform',
                  open && '-translate-y-2 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            className="max-h-[min(100svh,100dvh)] overflow-y-auto border-t border-brincando-terra/10 bg-brincando-creme pb-[max(1rem,env(safe-area-inset-bottom))] xl:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="container-page flex flex-col gap-0.5 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display text-[1.2rem] text-brincando-preto"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-2 pt-3">
                <Button
                  href={SITE.instagram}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o Instagram da Brincando em Casa"
                  className="w-full bg-brincando-creme px-3 text-sm"
                >
                  <InstagramMark className="h-4 w-4 shrink-0" />
                  Instagram
                </Button>
                <Button
                  href={whatsappUrl('float')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pulse-heart w-full px-3 text-sm"
                >
                  WhatsApp
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
