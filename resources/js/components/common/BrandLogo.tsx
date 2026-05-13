type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  variant?: 'light' | 'dark'
  className?: string
}

const sizeClasses: Record<Exclude<BrandLogoProps['size'], number | undefined>, string> = {
  sm: 'h-7 sm:h-8',
  md: 'h-8 sm:h-9',
  lg: 'h-9 sm:h-10 lg:h-11',
  xl: 'h-12 sm:h-14 lg:h-16',
}

export function BrandLogo({ size = 'lg', variant = 'dark', className }: BrandLogoProps) {
  const src =
    variant === 'light'
      ? '/images/logo/tozalaclass-logo-light.png'
      : '/images/logo/tozalaclass-logo-dark.png'
  const heightStyle = typeof size === 'number' ? { height: `${size}px` } : undefined
  const responsiveSize = typeof size === 'number' ? undefined : sizeClasses[size]

  return (
    <img
      src={src}
      alt="TozalaClass"
      className={['w-auto max-w-full object-contain', responsiveSize, className].join(' ')}
      style={heightStyle}
      loading="eager"
      decoding="async"
    />
  )
}
