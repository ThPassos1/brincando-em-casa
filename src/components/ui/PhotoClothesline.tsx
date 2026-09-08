import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { isSafeAssetPath } from '@/lib/security'
import { fadeUp } from '@/lib/motion'

export type ClotheslinePhoto = {
  src: string
  caption: string
  alt: string
  objectPosition?: string
  size: 'sm' | 'md' | 'lg'
  rotate: number
  hang: number
  paper?: string
}

const sizeClass = {
  sm: 'w-[8.15rem] sm:w-[10rem] lg:w-[11.25rem]',
  md: 'w-[9.35rem] sm:w-[12.25rem] lg:w-[13.75rem]',
  lg: 'w-[10.4rem] sm:w-[14.5rem] lg:w-[16.5rem]',
} as const

const rowInView = {
  once: true,
  amount: 0.08,
  margin: '0px 0px 28% 0px',
} as const

function Clothesline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 28"
      preserveAspectRatio="none"
      className={cn('pointer-events-none h-7 w-full overflow-visible', className)}
      aria-hidden
    >
      <path
        d="M-20 16 C 140 6, 260 24, 420 12 S 740 4, 900 18 S 1100 8, 1220 15"
        fill="none"
        stroke="#8a5a3b"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M-20 18 C 140 8, 260 26, 420 14 S 740 6, 900 20 S 1100 10, 1220 17"
        fill="none"
        stroke="#c4a484"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

function Clothespin({ tilt = 0 }: { tilt?: number }) {
  return (
    <svg
      viewBox="0 0 32 44"
      className="h-8 w-6 drop-shadow-sm sm:h-9 sm:w-7"
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-hidden
    >
      <path
        d="M10.6 3.2c.3-1.1 1.4-1.7 2.5-1.4l3.1.7c1 .2 1.6 1.3 1.3 2.3L14.8 28.2 8.8 26.8 10.6 3.2z"
        fill="#d4b48a"
      />
      <path
        d="M18 4c.4-1.1 1.5-1.6 2.6-1.2l2.8.8c1 .3 1.5 1.4 1.2 2.4L21.3 29.2l-5.8-1.6L18 4z"
        fill="#b08962"
      />
      <path
        d="M9 27.2 7.4 40.6M21.2 28.8l2.1 12.2"
        fill="none"
        stroke="#5a3720"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="18.2" rx="7.4" ry="3.2" fill="#8a5a3b" />
      <ellipse cx="16" cy="17.4" rx="7.4" ry="2.4" fill="#c46212" opacity="0.35" />
    </svg>
  )
}

function Polaroid({
  photo,
  index,
  priority,
}: {
  photo: ClotheslinePhoto
  index: number
  priority?: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <figure
      className={cn('relative shrink-0 snap-start origin-top', sizeClass[photo.size])}
      style={{
        ['--hang' as string]: `${photo.hang}px`,
        zIndex: 1 + (index % 5),
      }}
    >
      <span className="absolute -top-5 left-1/2 z-20 -translate-x-1/2 sm:-top-6">
        <Clothespin tilt={index % 2 === 0 ? -8 : 7} />
      </span>

      <div
        className={cn(
          'relative mt-2 rounded-[3px] px-[0.55rem] pt-[0.55rem] pb-1 shadow-[0_10px_22px_-12px_rgba(20,20,20,0.35),0_2px_6px_-2px_rgba(138,90,59,0.2)] ring-1 ring-black/5 lg:mt-[var(--hang)]',
          !reduce && 'transition-transform duration-300 ease-out hover:-translate-y-2',
        )}
        style={{
          backgroundColor: photo.paper ?? '#f6efe3',
          ['--tilt' as string]: `${photo.rotate}deg`,
          transform: reduce
            ? undefined
            : 'rotate(calc(var(--tilt) * var(--polaroid-tilt, 0.4)))',
        }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-brincando-creme-escuro">
          {isSafeAssetPath(photo.src) ? (
            <img
              src={photo.src}
              alt={photo.alt}
              width={528}
              height={660}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: photo.objectPosition ?? 'center' }}
            />
          ) : null}
        </div>
        <figcaption className="min-h-10 px-1 py-2 text-center font-hand text-[0.95rem] leading-tight text-brincando-terra sm:min-h-11 sm:text-[1.05rem]">
          {photo.caption}
        </figcaption>
      </div>
    </figure>
  )
}

function Line({
  photos,
  startIndex,
  priority,
}: {
  photos: ClotheslinePhoto[]
  startIndex: number
  priority?: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="relative pt-3 after:pointer-events-none after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-10 after:bg-linear-to-l after:from-brincando-salvia-clara after:to-transparent lg:after:hidden"
      initial={reduce || priority ? false : 'hidden'}
      whileInView="visible"
      viewport={rowInView}
      variants={fadeUp}
    >
      <Clothesline className="absolute top-1 right-0 left-0 lg:right-[-3%] lg:left-[-3%]" />
      <div className="snap-scroller flex snap-x snap-mandatory items-start justify-start gap-3 overflow-x-auto overscroll-x-contain px-4 pb-3 pt-1 sm:gap-3 lg:snap-none lg:justify-center lg:gap-0 lg:overflow-visible lg:px-1 lg:-space-x-5 lg:overscroll-auto">
        {photos.map((photo, i) => (
          <Polaroid
            key={photo.src}
            photo={photo}
            index={startIndex + i}
            priority={priority}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function PhotoClothesline({ photos }: { photos: ClotheslinePhoto[] }) {
  useEffect(() => {
    for (const photo of photos) {
      if (!isSafeAssetPath(photo.src)) continue
      const preload = new Image()
      preload.src = photo.src
    }
  }, [photos])

  const rows = [photos.slice(0, 4), photos.slice(4, 8), photos.slice(8, 12)].filter(
    (row) => row.length > 0,
  )

  return (
    <div className="relative mt-8 [--polaroid-tilt:0.4] max-lg:left-1/2 max-lg:w-screen max-lg:-translate-x-1/2 sm:mt-10 lg:left-0 lg:w-auto lg:translate-x-0 lg:[--polaroid-tilt:1] xl:-mx-6">
      <p className="px-4 text-center font-hand text-lg text-brincando-terra/70 lg:hidden">
        Arraste o varal para o lado
      </p>
      <div className="space-y-1">
      {rows.map((row, index) => (
        <Line
          key={row.map((photo) => photo.src).join('-')}
          photos={row}
          startIndex={index * 4}
          priority={index === 0}
        />
      ))}
      </div>
    </div>
  )
}
