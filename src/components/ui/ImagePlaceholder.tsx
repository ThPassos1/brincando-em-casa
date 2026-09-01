import { cn } from '@/lib/cn'
import { LeafSketch } from '@/assets/illustrations'
import { isSafeAssetPath } from '@/lib/security'

export type ImagePlaceholderProps = {
  slot: string
  note: string
  caption?: string
  alt: string
  src?: string
  aspect?: string
  objectPosition?: string
  priority?: boolean
  className?: string
  frame?: boolean
  fill?: boolean
}

export function ImagePlaceholder({
  slot,
  note,
  caption,
  alt,
  src,
  aspect = '4/5',
  objectPosition = 'center',
  priority = false,
  className,
  frame = true,
  fill = false,
}: ImagePlaceholderProps) {
  return (
    <figure className={cn('group block', fill && 'h-full w-full', className)}>
      <div
        className={cn(
          'relative overflow-hidden bg-brincando-creme-escuro',
          fill && 'h-full w-full',
          frame &&
            'organic-border shadow-frame ring-1 ring-brincando-terra/15',
        )}
        style={fill ? undefined : { aspectRatio: aspect }}
      >
        {src && isSafeAssetPath(src) ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <div
            className={cn(
              'absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center',
              fill
                ? 'bg-[radial-gradient(ellipse_at_20%_15%,color-mix(in_srgb,var(--brincando-salvia)_48%,transparent),transparent_52%),radial-gradient(ellipse_at_85%_30%,color-mix(in_srgb,var(--brincando-laranja)_22%,transparent),transparent_46%),radial-gradient(ellipse_at_70%_85%,color-mix(in_srgb,var(--brincando-rosa)_42%,transparent),transparent_50%),#c9b89a]'
                : 'bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--brincando-salvia)_28%,transparent),transparent_55%),radial-gradient(ellipse_at_80%_90%,color-mix(in_srgb,var(--brincando-rosa)_32%,transparent),transparent_50%),var(--brincando-creme-escuro)]',
            )}
          >
            <LeafSketch
              className={cn(
                'text-brincando-salvia/80',
                fill ? 'h-16 w-12 sm:h-20 sm:w-16' : 'h-14 w-11',
              )}
            />
            <p
              className={cn(
                'font-hand text-brincando-terra',
                fill ? 'text-2xl sm:text-3xl' : 'text-xl',
              )}
            >
              {slot}
            </p>
            <p
              className={cn(
                'leading-relaxed text-brincando-terra/85',
                fill ? 'max-w-sm text-sm' : 'max-w-[16rem] text-xs',
              )}
            >
              {note}
            </p>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 px-1 font-hand text-lg leading-snug text-brincando-terra">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
