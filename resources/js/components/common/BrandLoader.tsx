import { BrandSilhouette } from './BrandSilhouette.js'
import { useLanguage } from '../../lib/preferences.js'

export function BrandLoader() {
  const { t } = useLanguage()

  return (
    <div
      className="brand-loader-shell"
      role="status"
      aria-live="polite"
      aria-label={t('Chargement')}
    >
      <div className="brand-loader-card">
        <div className="brand-loader-mark">
          <BrandSilhouette size={88} decorative={false} alt={t('Silhouette TozalaClass')} />
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">
          {t('TozalaClass')}{' '}
        </p>
        <p className="mt-2 text-sm text-forest/70">{t('Maison de style en préparation')}</p>
      </div>
    </div>
  )
}
