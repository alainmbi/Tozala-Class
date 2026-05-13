import { Head, Link } from '@inertiajs/react'
import { services } from '../data/services.js'
import { ServiceCard } from '../components/ServiceCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import type { PageComponent } from '../lib/inertia.js'

const ServicesPage: PageComponent = () => {
  return (
    <>
      <Head title="Services" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-ivory p-6 sm:p-8">
              <div>
                <p className="eyebrow">L’atelier numérique</p>
                <h1 className="mt-6 font-display text-4xl leading-tight text-forest sm:text-5xl">
                  Notre spécialité, dans chaque détail.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-black/65">
                  Pressing, retouche, confection et conseil en image: un ensemble de services conçu
                  pour prolonger la vie et la force de vos pièces.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/checkout" className="btn-primary">
                  Réserver un service
                </Link>
                <Link href="/shop" className="btn-secondary">
                  Voir la boutique
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80"
                alt="Atelier textile TozalaClass"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Services premium"
            title="Des gestes précis pour un vestiaire durable et remarquable."
            description="Chaque service suit la même philosophie: comprendre la pièce, respecter la matière et restituer une présence impeccable."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['01. Diagnostic', 'Analyse de la matière, de la coupe et de l’usage du vêtement.'],
              [
                '02. Intervention',
                'Travail atelier avec gestes adaptés, finitions maîtrisées et contrôle qualité.',
              ],
              [
                '03. Restitution',
                'Livraison soignée, conseils d’entretien et suivi si nécessaire.',
              ],
            ].map(([title, copy]) => (
              <article key={title} className="card-surface p-8">
                <h3 className="font-display text-3xl text-forest">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
