import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
}

export function SectionReveal({
  children,
  className,
  id,
  as = 'div',
}: SectionRevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      id={id}
      className={cn(className)}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {children}
    </Tag>
  )
}
