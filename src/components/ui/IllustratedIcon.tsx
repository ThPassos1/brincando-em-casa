import {
  illustratedIcons,
  type IllustratedIconName,
} from '@/assets/illustrations'
import { cn } from '@/lib/cn'

type IllustratedIconProps = {
  name: IllustratedIconName
  className?: string
  title?: string
}

export function IllustratedIcon({ name, className, title }: IllustratedIconProps) {
  const Icon = illustratedIcons[name]
  return <Icon className={cn('h-12 w-12', className)} title={title} />
}
