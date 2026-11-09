import type { ServiceItem } from '../data/services.js'
import { useLanguage } from '../lib/preferences.js'

type ServiceCardProps = {
  service: ServiceItem
  active?: boolean
  showAction?: boolean
  onSelect?: (service: ServiceItem) => void
}

export function ServiceCard({
  service,
  active = false,
  showAction = false,
  onSelect,
}: ServiceCardProps) {
  const { t } = useLanguage()

  return (
    <article
      className={[
        'card-surface h-full p-8 transition duration-300 hover:-translate-y-1',
        active ? 'border-gold/45 shadow-[0_30px_80px_rgba(53,72,66,0.14)]' : '',
      ].join(' ')}
    >
      <p className="eyebrow">{t(service.short)}</p>
      <h3 className="mt-4 font-display text-3xl leading-tight text-forest">{t(service.name)}</h3>
      <p className="mt-4 text-sm leading-7 text-black/65">{t(service.description)}</p>
      <div className="mt-6 space-y-3 border-t border-black/6 pt-6">
        {service.options.slice(0, 3).map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-black/70">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span>{t(feature)}</span>
          </div>
        ))}
      </div>

      {showAction ? (
        <button
          type="button"
          className="btn-secondary mt-8 w-full"
          onClick={() => onSelect?.(service)}
        >
          {t('Voir les détails')}
        </button>
      ) : null}
    </article>
  )
}
