import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useId, useState } from 'react'
import { cn } from '@/lib/cn'

export type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

function AccordionRow({ item, index }: { item: AccordionItem; index: number }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-brincando-terra/20 py-1">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full min-h-12 items-start justify-between gap-4 py-4 text-left"
        >
          <span className="font-display text-lg font-medium text-brincando-terra sm:text-xl">
            <span className="mr-2 font-hand text-brincando-laranja">
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.question}
          </span>
          <span
            aria-hidden
            className={cn(
              'mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brincando-terra/30 text-brincando-terra transition-transform duration-300',
              open && 'rotate-45 border-brincando-laranja text-brincando-laranja',
            )}
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-2 text-brincando-terra sm:pr-10">{item.answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionRow key={item.question} item={item} index={index} />
      ))}
    </div>
  )
}
