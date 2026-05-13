import type { ServiceItem } from '../data/services.js'

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="card-surface h-full p-8 transition duration-300 hover:-translate-y-1">
      <p className="eyebrow">{service.short}</p>
      <h3 className="mt-4 font-display text-3xl leading-tight text-forest">{service.name}</h3>
      <p className="mt-4 text-sm leading-7 text-black/65">{service.description}</p>
      <p className="mt-6 text-sm font-semibold tracking-[0.22em] text-gold uppercase">
        {service.priceFrom}
      </p>
      <div className="mt-6 space-y-3 border-t border-black/6 pt-6">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-black/70">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
