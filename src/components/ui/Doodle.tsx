import {
  BeeSketch,
  BirdSketch,
  CloudSketch,
  FlowerSketch,
  HouseSketch,
  LeafSketch,
  MoonSketch,
  StarSketch,
  SunSketch,
  TwigSketch,
} from '@/assets/illustrations'
import { cn } from '@/lib/cn'

const catalog = {
  sol: SunSketch,
  folha: LeafSketch,
  nuvem: CloudSketch,
  casa: HouseSketch,
  lua: MoonSketch,
  estrela: StarSketch,
  passarinho: BirdSketch,
  flor: FlowerSketch,
  abelha: BeeSketch,
  galho: TwigSketch,
} as const

export type DoodleName = keyof typeof catalog

export function Doodle({
  name,
  className,
}: {
  name: DoodleName
  className?: string
}) {
  const Icon = catalog[name]
  return (
    <Icon
      aria-hidden
      className={cn('pointer-events-none absolute select-none', className)}
    />
  )
}
