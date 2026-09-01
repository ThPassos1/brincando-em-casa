import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { isSafeAssetPath } from '@/lib/security'

const slides = [
  {
    src: '/hero/hero-01.png',
    alt: 'Crianças pintando com folhas na Brincando em Casa',
  },
  {
    src: '/hero/hero-02.png',
    alt: 'Criança pintando com folha e tinta na Brincando em Casa',
  },
  {
    src: '/hero/hero-03.png',
    alt: 'Criança brincando na areia do quintal da Brincando em Casa',
  },
] as const

const INTERVAL_MS = 8000

export function HeroCarousel() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduce, paused])

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) =>
        isSafeAssetPath(slide.src) ? (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1600}
          height={900}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding={i === 0 ? 'sync' : 'async'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          className={cn(
            'absolute inset-0 h-full w-full object-cover object-[center_12%] transition-opacity duration-1000 ease-out sm:object-center',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
        ) : null,
      )}

      <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-brincando-creme/55 to-transparent" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-[48%] bg-linear-to-t from-brincando-creme from-10% via-brincando-creme/80 to-transparent sm:h-24 sm:from-brincando-creme sm:via-transparent"
        aria-hidden
      />

      <div className="absolute top-[36%] left-1/2 z-10 flex -translate-x-1/2 gap-1 sm:top-auto sm:bottom-6 sm:gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Foto ${i + 1} de ${slides.length}`}
            onClick={() => setIndex(i)}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span
              className={cn(
                'h-2 rounded-full transition-all duration-500',
                i === index
                  ? 'w-5 bg-brincando-laranja'
                  : 'w-2 bg-brincando-terra/35 hover:bg-brincando-terra/60',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
