import { cn } from '@/lib/cn'

type WaveDividerProps = {
  fill: string
  className?: string
  flip?: boolean
}

export function WaveDivider({ fill, className, flip }: WaveDividerProps) {
  return (
    <div className={cn('leading-none', flip && 'rotate-180', className)} aria-hidden>
      <svg
        viewBox="0 0 1440 84"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-16"
      >
        <path
          d="M0 48c96-28 192-42 320-36 168 8 214 46 392 42 170-4 236-48 408-46 128 1 230 28 320 40v36H0V48z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
