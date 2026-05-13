type BrandSilhouetteProps = {
  size?: number
  className?: string
  alt?: string
  decorative?: boolean
  variant?: 'light' | 'dark'
}

export function BrandSilhouette({
  size = 44,
  className,
  alt = 'Silhouette TozalaClass',
  decorative = true,
  variant = 'dark',
}: BrandSilhouetteProps) {
  return (
    <img
      src="/images/logo/tozalaclass-icon-silhouette.png"
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? 'true' : undefined}
      className={[
        'w-auto object-contain',
        variant === 'light' ? 'brightness-0 invert' : '',
        className,
      ].join(' ')}
      style={{ height: `${size}px` }}
      loading="lazy"
      decoding="async"
    />
  )
}
