import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        'organic-border bg-brincando-creme/80 p-6 shadow-soft ring-1 ring-brincando-terra/10 sm:p-7',
        className,
      )}
    >
      {children}
    </article>
  )
}
