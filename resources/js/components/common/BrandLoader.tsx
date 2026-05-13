import { BrandSilhouette } from './BrandSilhouette.js'

export function BrandLoader() {
  return (
    <div className="brand-loader-shell" role="status" aria-live="polite" aria-label="Chargement">
      <div className="brand-loader-card">
        <div className="brand-loader-mark">
          <BrandSilhouette size={88} decorative={false} alt="Silhouette TozalaClass" />
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">
          TozalaClass
        </p>
        <p className="mt-2 text-sm text-forest/70">Maison de style en preparation</p>
      </div>
    </div>
  )
}
