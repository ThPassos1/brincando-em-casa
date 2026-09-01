import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { cn } from '@/lib/cn'
import { isSafeAssetPath } from '@/lib/security'

export type VideoOrientation = 'vertical' | 'horizontal'

export type VideoTestimonial = {
  slot: string
  note: string
  caption: string
  author: string
  orientation: VideoOrientation
  src?: string
  poster?: string
}

type VideoTestimonialCardProps = {
  video: VideoTestimonial
  active: boolean
  onOpen: () => void
  onClose: () => void
}

export function PlayMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex h-14 w-14 items-center justify-center rounded-full bg-brincando-creme/90 text-brincando-laranja shadow-soft ring-1 ring-brincando-terra/15',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" aria-hidden="true">
        <path
          d="M8.2 6.4c0-.9 1-1.5 1.8-1L19 11c.8.5.8 1.6 0 2.1l-9 5.6c-.8.5-1.8-.1-1.8-1V6.4z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

export function VideoLightbox({
  video,
  onClose,
}: {
  video: VideoTestimonial
  onClose: () => void
}) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Vídeo: ${video.author}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brincando-preto/78 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-10 min-h-11 min-w-11 font-hand text-2xl text-brincando-creme"
      >
        fechar
      </button>
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl bg-brincando-preto',
          video.orientation === 'vertical'
            ? 'aspect-[9/16] h-[min(82svh,34rem,calc((100vw-1.5rem)*16/9))] w-auto max-w-[calc(100vw-1.5rem)]'
            : 'aspect-video w-[min(92vw,56rem)] max-h-[calc(100svh-2rem)]',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {video.src && isSafeAssetPath(video.src) ? (
          <video
            src={video.src}
            poster={
              video.poster && isSafeAssetPath(video.poster)
                ? video.poster
                : undefined
            }
            controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-brincando-creme-escuro px-6 text-center">
            <p className="font-hand text-2xl text-brincando-terra">{video.slot}</p>
            <p className="max-w-xs text-sm text-brincando-terra/80">
              {video.note} O vídeo só carrega quando o arquivo for inserido.
            </p>
          </div>
        )}
      </div>
    </motion.div>,
    document.body,
  )
}

export function VideoTestimonialCard({
  video,
  active,
  onOpen,
  onClose,
}: VideoTestimonialCardProps) {
  return (
    <>
      <article className="w-[min(78vw,17.5rem)] shrink-0 snap-start sm:w-72">
        <button
          type="button"
          onClick={onOpen}
          className="group relative block w-full text-left"
          aria-label={`Assistir depoimento: ${video.author}`}
        >
          <div className="organic-border relative aspect-[4/5] overflow-hidden shadow-frame ring-1 ring-brincando-terra/15">
            {video.poster && isSafeAssetPath(video.poster) ? (
              <img
                src={video.poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <ImagePlaceholder
                slot={video.slot}
                note={video.note}
                alt=""
                frame={false}
                fill
              />
            )}
            <span className="pointer-events-none absolute inset-0 bg-brincando-preto/10 transition-colors group-hover:bg-brincando-preto/20" />
            <span className="absolute inset-0 flex items-center justify-center">
              <PlayMark />
            </span>
          </div>
        </button>
        <p className="mt-3 font-hand text-lg leading-snug text-brincando-terra">
          {video.caption}
        </p>
        <p className="mt-1 text-sm text-brincando-terra/80">{video.author}</p>
      </article>

      <AnimatePresence>
        {active ? <VideoLightbox video={video} onClose={onClose} /> : null}
      </AnimatePresence>
    </>
  )
}
