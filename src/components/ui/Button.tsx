import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { isSafeHref, relForTarget } from '@/lib/security'

const variants = {
  primary:
    'bg-brincando-laranja text-brincando-creme hover:bg-brincando-laranja-escuro shadow-soft',
  secondary:
    'bg-transparent text-brincando-preto border-[1.5px] border-brincando-terra/50 hover:border-brincando-laranja hover:text-brincando-laranja-escuro',
  ghost:
    'bg-transparent text-brincando-creme border-[1.5px] border-brincando-creme/50 hover:bg-brincando-creme/10',
  dark: 'bg-brincando-preto text-brincando-creme hover:bg-brincando-preto/90',
} as const

type Variant = keyof typeof variants

type Shared = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

type ButtonAsLink = Shared &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-colors duration-300 rounded-[1.15rem_1.55rem_1.05rem_1.7rem] focus-visible:outline-offset-4'

export function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if ('href' in rest && rest.href) {
    if (!isSafeHref(rest.href)) {
      return (
        <button type="button" className={classes} disabled>
          {children}
        </button>
      )
    }

    const { rel, target, ...anchorRest } = rest
    return (
      <a
        className={classes}
        {...anchorRest}
        target={target}
        rel={relForTarget(rel, target)}
      >
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonAsButton
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
