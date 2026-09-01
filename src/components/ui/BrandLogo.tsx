import { cn } from '@/lib/cn'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/logo-brincando-em-casa.png"
      alt="Brincando em Casa"
      width={120}
      height={96}
      className={cn('h-12 w-auto object-contain object-left', className)}
    />
  )
}
