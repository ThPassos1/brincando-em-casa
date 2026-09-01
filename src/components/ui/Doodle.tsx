import {
  BeeSketch,
  BirdSketch,
  CloudSketch,
  DropSketch,
  FlowerSketch,
  HouseSketch,
  LeafSketch,
  MoonSketch,
  MushroomSketch,
  SpiralSketch,
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
  caracol: SpiralSketch,
  gota: DropSketch,
  cogumelo: MushroomSketch,
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

export function DoodleField({
  items,
}: {
  items: Array<{ name: DoodleName; className: string }>
}) {
  return (
    <>
      {items.map((item, index) => (
        <Doodle key={`${item.name}-${index}`} name={item.name} className={item.className} />
      ))}
    </>
  )
}
