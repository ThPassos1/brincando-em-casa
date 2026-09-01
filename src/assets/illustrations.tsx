import type { SVGProps } from 'react'
import { cn } from '@/lib/cn'

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function LogoMark({ className, title = 'Brincando em Casa', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 64"
      className={cn('overflow-visible', className)}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        {...stroke}
        strokeWidth={1.9}
        d="M8 41c2.4-11 12.2-21.6 25.8-25.6C47.6 19.2 57.6 29.8 60 41"
      />
      <path
        {...stroke}
        strokeWidth={1.8}
        d="M18.5 40.8V54c0 1.3 1 2.2 2.3 2.2h38.4c1.3 0 2.3-.9 2.3-2.2V40.8"
      />
      <path
        {...stroke}
        d="M35.2 56.2V46.4c0-1.5 1.2-2.6 2.7-2.6h4.2c1.5 0 2.7 1.1 2.7 2.6v9.8"
      />
      <path {...stroke} strokeWidth={1.4} d="M48.5 47.2h6.8M51.8 47.2v4.6" />
    </svg>
  )
}

export function SunSketch({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true" {...props}>
      <circle cx="48" cy="48" r="16.5" {...stroke} strokeWidth={1.8} />
      <path
        {...stroke}
        strokeWidth={1.5}
        d="M48 12.5v8.2M48 75.3v8.2M12.5 48h8.2M75.3 48h8.2M24.2 24.2l5.6 5.6M66.2 66.2l5.6 5.6M24.2 71.8l5.6-5.6M66.2 29.8l5.6-5.6"
      />
      <path
        {...stroke}
        strokeWidth={1.2}
        opacity={0.7}
        d="M48 31.5c4.2.6 8.4 3.8 9.2 8.6"
      />
    </svg>
  )
}

export function LeafSketch({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 72 88" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        strokeWidth={1.8}
        d="M36.2 80.5C18 68.2 10.4 48 14.8 30.2 19.6 11.4 38 6.2 52.5 14.8c13.2 7.8 18.4 26.2 11.2 41.6-6.4 13.6-18.6 20.8-27.5 24.1z"
      />
      <path {...stroke} d="M36.2 80.2C34 52 38.4 32.4 54 18.8" />
      <path {...stroke} strokeWidth={1.3} d="M34 48.5c6.4-2.2 12.8-1 18.2 2.4M32.6 61c5.8-1.8 11.2-.4 16 3.2" />
    </svg>
  )
}

export function CloudSketch({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        strokeWidth={1.7}
        d="M28 48.5c-9.2-.4-16.4-7.8-16-16.2C12.4 23 20.6 16 30.2 16.6c3.2-7.8 12.4-12.6 21.4-10.8 7.6 1.6 13.4 8 14.6 15.6 6.8-2.4 15.2.8 18.4 8.2 3.4 7.6-.8 16.6-8.8 19.2"
      />
    </svg>
  )
}

export function HouseSketch({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M10 36.5 30.8 16.2c1.1-1.1 2.9-1.1 4 0L56 36.5"
      />
      <path {...stroke} d="M18.4 33.8V52c0 1.1.9 2 2 2H43.6c1.1 0 2-.9 2-2V33.8" />
      <path {...stroke} d="M28.6 54V41.6c0-1.2 1-2.1 2.2-2.1h2.6c1.2 0 2.2.9 2.2 2.1V54" />
    </svg>
  )
}

function BrincarLivreIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="22" cy="38" r="11" {...stroke} />
      <path {...stroke} d="M32.2 33.4c6.8-8.6 16.4-12.8 24.6-10.2" />
      <path {...stroke} d="M49.4 18.6c2.4 3.8 4.6 8.6 5.2 13.6" />
      <path {...stroke} strokeWidth={1.4} d="M18.6 36.8c1.6 2.2 4.6 3.4 7.4 2.6" />
    </svg>
  )
}

function NaturezaIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M32 54.5C18.4 46.2 13.6 32.4 17.2 21.6 21 10.2 34.6 7.2 43.8 14.4c8.6 6.6 11.2 19.4 6.2 29.2-4.6 9-12.8 13.2-18 16.9z"
      />
      <path {...stroke} d="M32 54.2C31 36.4 34.8 24.2 46 16.6" />
    </svg>
  )
}

function RitmoIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M14 40c6.4-14 16.2-20.6 28.8-18.8 10.4 1.6 17.2 10.8 16.2 20.6-1 9.6-8.8 16.2-18.4 15.4-8.2-.6-13.8-6.4-14.6-13.4"
      />
      <path {...stroke} strokeWidth={1.4} d="M32 20.4v6.8M20.6 32.8h-6.2M44.8 44.2 49 48" />
      <circle cx="33.2" cy="34.6" r="3.2" {...stroke} />
    </svg>
  )
}

function CuidadoIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path
        {...stroke}
        d="M18.4 28.6c-4.6-4.8-4.2-12.2 1.2-15.8 4.8-3.2 10.8-1.6 13.8 2.8 3-4.4 9.2-6.2 14-2.8 5.4 3.6 6 11 1.2 15.8L33.4 51.2 18.4 28.6z"
      />
    </svg>
  )
}

function AcolhidaIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="20.5" r="7.2" {...stroke} />
      <path {...stroke} d="M16 50.8c1.8-10.4 8.6-16.2 16-16.2s14.2 5.8 16 16.2" />
      <path {...stroke} strokeWidth={1.4} d="M12.5 36.4c4.2-2.8 8.8-2.4 12.4.6M51.5 36.4c-4.2-2.8-8.8-2.4-12.4.6" />
    </svg>
  )
}

function RodaIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="16.5" {...stroke} />
      <circle cx="32" cy="18.4" r="3" {...stroke} />
      <circle cx="44.6" cy="38.8" r="3" {...stroke} />
      <circle cx="19.4" cy="38.8" r="3" {...stroke} />
    </svg>
  )
}

function TigelaIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...stroke} d="M12.5 30.5h39c.4 12.8-7.6 22.6-19.5 22.6S12.1 43.3 12.5 30.5z" />
      <path {...stroke} strokeWidth={1.4} d="M22 30.5c.8-7.4 6-12.2 10.6-12.2 3.2 0 6.2 2.2 7.8 6" />
    </svg>
  )
}

function ArLivreIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path {...stroke} d="M32 54.5V28.2" />
      <path
        {...stroke}
        d="M32 42.4c-10.4-1.2-16.8-8.6-17.6-17.2C21.4 26.8 27.2 24 32 24.2c4.8-.2 10.6 2.6 17.6 1-.8 8.6-7.2 16-17.6 17.2z"
      />
      <path {...stroke} strokeWidth={1.4} d="M10 54.5h44" />
    </svg>
  )
}

function CheckSketch({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true" {...props}>
      <circle cx="14" cy="14" r="11.2" {...stroke} strokeWidth={1.5} />
      <path {...stroke} strokeWidth={1.7} d="M8.6 14.4 12.4 18l7.4-8.6" />
    </svg>
  )
}

export const illustratedIcons = {
  brincar: BrincarLivreIcon,
  natureza: NaturezaIcon,
  ritmo: RitmoIcon,
  cuidado: CuidadoIcon,
  acolhida: AcolhidaIcon,
  roda: RodaIcon,
  alimentacao: TigelaIcon,
  arlivre: ArLivreIcon,
  check: CheckSketch,
  sol: SunSketch,
  folha: LeafSketch,
  nuvem: CloudSketch,
  casa: HouseSketch,
} as const

export type IllustratedIconName = keyof typeof illustratedIcons
