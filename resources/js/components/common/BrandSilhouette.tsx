type BrandSilhouetteProps = {
  size?: number
  className?: string
  alt?: string
  decorative?: boolean
}

export function BrandSilhouette({
  size = 44,
  className,
  alt = 'Silhouette TozalaClass',
  decorative = true,
}: BrandSilhouetteProps) {
  return (
    <img
      src="/images/logo/tozalaclass-icon-silhouette.png"
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? 'true' : undefined}
      className={['w-auto object-contain', className].join(' ')}
      style={{ height: `${size}px` }}
      loading="lazy"
      decoding="async"
    />
  )
}
