import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HouseSketch, LeafSketch, SunSketch } from '@/assets/illustrations'
import { DoodleField } from '@/components/ui/Doodle'
import { Button } from '@/components/ui/Button'
import { SectionReveal } from '@/components/ui/SectionReveal'
import {
  PlayMark,
  VideoLightbox,
  type VideoTestimonial,
} from '@/components/ui/VideoTestimonialCard'
import { cn } from '@/lib/cn'
import { whatsappUrl } from '@/lib/whatsapp'

type PolaroidPhoto = {
  src: string
  alt: string
  objectPosition?: string
  className: string
}

type PolaroidVideo = {
  video: VideoTestimonial
  className: string
}

type FamilyStory = {
  kicker: string
  quote: string
  author?: string
  reverse?: boolean
  circle: string
  doodle: 'leaf' | 'sun' | 'house'
  photos: PolaroidPhoto[]
  videos?: PolaroidVideo[]
}

const videoJuliana: VideoTestimonial = {
  slot: 'VID_DEPO_01',
  note: 'Depoimento em vídeo da Juliana.',
  caption: 'Depoimento da Juliana',
  author: 'Juliana, mãe da Olívia',
  orientation: 'vertical',
  src: '/depoimentos/video-01.mp4',
  poster: '/depoimentos/video-01-poster.jpg',
}

const videoMae: VideoTestimonial = {
  slot: 'VID_DEPO_02',
  note: 'Depoimento em vídeo de uma mãe.',
  caption: 'Depoimento de uma mãe',
  author: 'Mãe de uma criança da Brincando em Casa',
  orientation: 'vertical',
  src: '/depoimentos/video-02.mp4',
  poster: '/depoimentos/video-02-poster.jpg',
}

const videoDavi: VideoTestimonial = {
  slot: 'VID_DEPO_03',
  note: 'Depoimento em vídeo do Davi Calazans.',
  caption: 'Depoimento do Davi',
  author: 'Davi Calazans',
  orientation: 'vertical',
  src: '/depoimentos/video-03.mp4',
  poster: '/depoimentos/video-03-poster.jpg',
}

const stories: FamilyStory[] = [
  {
    kicker: 'Uma mãe',
    quote:
      'A gente tinha acabado de chegar em Manaus, sem referência de um lugar. As professoras, as pedagogas, a gente se encantou.',
    author: 'Juliana, mãe da Olívia',
    circle: 'bg-brincando-rosa/70',
    doodle: 'leaf',
    photos: [
      {
        src: '/depoimentos/familias-lanternas.png',
        alt: 'Famílias reunidas com lanternas em uma festa da Brincando em Casa',
        objectPosition: 'center 42%',
        className: 'top-2 right-2 z-10 w-[40%] rotate-[7deg]',
      },
    ],
    videos: [
      {
        video: videoJuliana,
        className: 'bottom-0 left-0 z-20 w-[58%] -rotate-[6deg]',
      },
    ],
  },
  {
    kicker: 'Em vídeo',
    quote:
      'Não é, e nunca foi, uma experiência só dos nossos filhos. Tem um cuidado, tem um olhar real para o ser humano.',
    reverse: true,
    author: 'Uma mãe da Brincando em Casa',
    circle: 'bg-brincando-laranja/32',
    doodle: 'sun',
    photos: [
      {
        src: '/depoimentos/danca-mae-bebe.png',
        alt: 'Encontro de dança mãe e bebê na Brincando em Casa',
        objectPosition: 'center 38%',
        className: 'bottom-2 right-0 z-10 w-[38%] rotate-[8deg]',
      },
    ],
    videos: [
      {
        video: videoMae,
        className: 'top-1 left-1 z-20 w-[60%] -rotate-6',
      },
    ],
  },
  {
    kicker: 'Uma família',
    quote:
      'Aqui ele tem muitos tipos de desafios, brinquedos voltados pro físico e pro cognitivo. Com as outras crianças, ele também desenvolve o lado afetivo.',
    author: 'Davi Calazans, pai',
    circle: 'bg-brincando-salvia/50',
    doodle: 'house',
    photos: [
      {
        src: '/depoimentos/carteiro.png',
        alt: 'Carteiro dos Correios entregando cartas às crianças no quintal',
        objectPosition: 'center 48%',
        className: 'top-2 left-3 z-10 w-[40%] -rotate-[5deg]',
      },
    ],
    videos: [
      {
        video: videoDavi,
        className: 'bottom-0 right-0 z-20 w-[58%] rotate-[6deg]',
      },
    ],
  },
]

function Polaroid({
  src,
  alt,
  objectPosition,
  className,
}: PolaroidPhoto) {
  return (
    <figure
      className={cn(
        'absolute bg-[#fffdf8] p-[0.4rem] pb-5 shadow-frame ring-1 ring-brincando-terra/12',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="aspect-[4/5] w-full object-cover"
        style={{ objectPosition: objectPosition ?? 'center' }}
      />
    </figure>
  )
}

function VideoPolaroid({
  video,
  className,
  onOpen,
}: PolaroidVideo & { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Assistir depoimento: ${video.author}`}
      className={cn('group absolute text-left', className)}
    >
      <span className="block bg-[#fffdf8] p-[0.4rem] pb-5 shadow-frame ring-1 ring-brincando-terra/12">
        <span className="relative block aspect-[4/5] overflow-hidden bg-brincando-salvia-clara">
          {video.poster ? (
            <img
              src={video.poster}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--brincando-laranja)_28%,transparent),transparent_55%),var(--brincando-salvia-clara)]" />
          )}
          <span className="absolute inset-0 bg-brincando-preto/10 transition-colors group-hover:bg-brincando-preto/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <PlayMark className="h-14 w-14 sm:h-16 sm:w-16" />
          </span>
        </span>
      </span>
    </button>
  )
}

function StoryCollage({
  story,
  onOpenVideo,
}: {
  story: FamilyStory
  onOpenVideo: (video: VideoTestimonial) => void
}) {
  return (
    <div className="relative mx-auto h-[18.5rem] w-full max-w-[min(23rem,100%)] overflow-hidden sm:h-[24rem] sm:overflow-visible">
      <div
        aria-hidden
        className={cn(
          'absolute top-1/2 left-1/2 size-[13.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-60',
          story.circle,
        )}
      />
      {story.videos?.map((item) => (
        <VideoPolaroid
          key={item.video.slot}
          video={item.video}
          className={item.className}
          onOpen={() => onOpenVideo(item.video)}
        />
      ))}
      {story.photos.map((photo) => (
        <Polaroid key={photo.src} {...photo} />
      ))}
      {story.doodle === 'sun' ? (
        <SunSketch
          aria-hidden
          className="absolute top-3 right-8 h-10 w-10 text-brincando-laranja/80 sm:h-12 sm:w-12"
        />
      ) : story.doodle === 'house' ? (
        <HouseSketch
          aria-hidden
          className="absolute top-3 right-8 h-10 w-10 text-brincando-terra/45"
        />
      ) : (
        <LeafSketch
          aria-hidden
          className="absolute right-4 bottom-6 h-11 w-9 text-brincando-salvia sm:h-14 sm:w-11"
        />
      )}
    </div>
  )
}

export function Depoimentos() {
  const [openVideo, setOpenVideo] = useState<VideoTestimonial | null>(null)

  return (
    <section id="depoimentos" className="cv-auto relative overflow-x-clip bg-brincando-creme py-16 sm:py-20 lg:py-24">
      <DoodleField
        items={[
          { name: 'passarinho', className: 'top-4 left-3 h-8 w-11 text-brincando-terra/25 sm:top-8 sm:left-10 sm:h-11 sm:w-14' },
          { name: 'flor', className: 'top-8 right-3 h-10 w-9 text-brincando-rosa/50 sm:right-12 sm:h-14 sm:w-12' },
          { name: 'lua', className: 'bottom-10 left-2 h-10 w-10 text-brincando-terra/20 sm:bottom-16 sm:left-8 sm:h-14 sm:w-14' },
          { name: 'estrela', className: 'right-4 top-[38%] h-8 w-8 text-brincando-laranja/30 sm:right-10 sm:h-11 sm:w-11' },
          { name: 'sol', className: 'right-3 bottom-8 h-10 w-10 text-brincando-laranja/25 sm:right-16 sm:bottom-12 sm:h-14 sm:w-14' },
        ]}
      />
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <p className="font-hand text-2xl text-brincando-rosa">Famílias</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">Quem viveu, recomenda</h2>
          <p className="mt-5 text-brincando-terra">
            A confiança das famílias é o que mais nos orgulha. Um pouco do que
            elas dizem, em palavra e em vídeo.
          </p>
        </SectionReveal>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {stories.map((story) => (
            <article
              key={story.kicker}
              className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8"
            >
              <div className={cn(story.reverse && 'lg:order-2')}>
                <p className="font-hand text-xl text-brincando-laranja">
                  {story.kicker}
                </p>
                <p className="mt-2 font-display text-[1.35rem] leading-snug text-brincando-terra sm:text-2xl lg:text-[1.7rem]">
                  “{story.quote}”
                </p>
                {story.author ? (
                  <p className="mt-3 text-sm text-brincando-terra">{story.author}</p>
                ) : null}
              </div>
              <div className={cn(story.reverse && 'lg:order-1')}>
                <StoryCollage story={story} onOpenVideo={setOpenVideo} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-14">
          <Button
            href={whatsappUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-heart w-full max-w-sm sm:w-auto"
          >
            Agendar uma visita
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {openVideo ? (
          <VideoLightbox video={openVideo} onClose={() => setOpenVideo(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
