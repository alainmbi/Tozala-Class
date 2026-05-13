import { Head, Link, usePage } from '@inertiajs/react'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { ServiceCard } from '../components/ServiceCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import {
  findServiceBySlug,
  pressingLocations,
  services,
  type ServiceItem,
} from '../data/services.js'
import type { PageComponent } from '../lib/inertia.js'

function getRequestedService(url: string) {
  const params = new URLSearchParams(url.split('?')[1] ?? '')
  return findServiceBySlug(params.get('service'))
}

const serviceJourney = [
  [
    '01. Choisir le service',
    'Selectionnez le bon univers: couture, pressing, decoration ou conseil.',
  ],
  [
    '02. Preciser le besoin',
    'Ajoutez les details utiles, la date souhaitee et votre commune avant validation.',
  ],
  [
    '03. Payer ou envoyer',
    'Le pressing peut poursuivre vers la caisse. Les autres demandes sont transmises a l atelier.',
  ],
]

const ServicesPage: PageComponent = () => {
  const page = usePage()
  const requestedService = useMemo(() => getRequestedService(page.url), [page.url])
  const selectedDetailRef = useRef<HTMLDivElement | null>(null)
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(
    requestedService?.slug ?? null
  )
  const [selectedPressingLocation, setSelectedPressingLocation] = useState<string>(
    pressingLocations[0] ?? ''
  )

  useEffect(() => {
    setSelectedServiceSlug(requestedService?.slug ?? null)
  }, [requestedService])

  useEffect(() => {
    if (!selectedServiceSlug || !selectedDetailRef.current) {
      return
    }

    selectedDetailRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [selectedServiceSlug])

  const selectedService = services.find((service) => service.slug === selectedServiceSlug) ?? null

  function handleSelect(service: ServiceItem) {
    setSelectedServiceSlug(service.slug)
  }

  function handleCloseDetail() {
    setSelectedServiceSlug(null)
  }

  return (
    <>
      <Head title="Services" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-white p-5 shadow-[var(--shadow-soft)] lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] lg:p-8">
            <div className="flex flex-col justify-between rounded-[2rem] bg-forest p-6 text-white sm:p-8">
              <div>
                <p className="eyebrow !text-white/70">Parcours services</p>
                <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                  Des services plus clairs, plus fluides, plus premium.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
                  Explorez chaque service sans voir tous les tarifs d un coup. Ouvrez le detail,
                  comparez les options puis reservez avec un parcours adapte a votre besoin.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services/reservation"
                  className="btn-primary !bg-[#AE8044] hover:!bg-[#9b723d]"
                >
                  Reserver un service
                </Link>
                <Link
                  href="/shop"
                  className="btn-secondary !border-white/18 !bg-white/8 !text-white hover:!text-white"
                >
                  Voir la boutique
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
                    Services
                  </p>
                  <p className="mt-3 font-display text-3xl">{services.length}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
                    Parcours
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    D abord le detail, ensuite la reservation, puis la caisse seulement si utile.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80"
                alt="Atelier textile TozalaClass"
                className="h-full min-h-[24rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Services premium"
            title="Choisissez un service puis ouvrez son detail."
            description="Les cartes restent volontairement sobres. Les options et les tarifs apparaissent seulement lorsque vous entrez dans le service qui vous interesse."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Fragment key={service.id}>
                {selectedService?.slug === service.slug ? (
                  <div ref={selectedDetailRef} className="md:col-span-2 xl:col-span-3">
                    <div className="rounded-[2.5rem] bg-[#101513] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
                      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <p className="eyebrow !text-white/70">Detail du service</p>
                              <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
                                {selectedService.detailTitle}
                              </h2>
                            </div>
                            <button
                              type="button"
                              onClick={handleCloseDetail}
                              className="btn-secondary !border-white/18 !bg-white/8 !px-5 !py-2 !text-white hover:!text-white"
                            >
                              Fermer
                            </button>
                          </div>

                          <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
                            {selectedService.detailDescription}
                          </p>

                          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#AE8044]">
                              Options disponibles
                            </p>
                            <div className="mt-5 grid gap-3">
                              {selectedService.options.map((option) => (
                                <div
                                  key={option}
                                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/8 bg-black/15 px-4 py-4 text-sm text-white/78"
                                >
                                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#AE8044]" />
                                  <span>{option}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 rounded-[1.75rem] border border-[#AE8044]/25 bg-[#AE8044]/10 p-5 text-sm leading-7 text-white/80">
                            {selectedService.reservationNote}
                          </div>
                        </div>

                        <div className="flex flex-col gap-6">
                          {selectedService.slug === 'pressing' &&
                          selectedService.pressingMenu?.length ? (
                            <div className="rounded-[1.75rem] bg-white p-5 text-forest sm:p-6">
                              <div className="flex items-center justify-between gap-4 border-b border-black/6 pb-4">
                                <div>
                                  <p className="eyebrow">
                                    {selectedService.tariffTitle ?? 'Tarifs'}
                                  </p>
                                  <h3 className="mt-3 font-display text-3xl text-forest">
                                    Menu pressing
                                  </h3>
                                </div>
                                <div className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                                  Repassage + nettoyage
                                </div>
                              </div>

                              <div className="mt-5 overflow-x-auto">
                                <table className="min-w-full border-separate border-spacing-y-3">
                                  <thead>
                                    <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.22em] text-black/46">
                                      <th className="px-3 py-2">Image</th>
                                      <th className="px-3 py-2">Article</th>
                                      <th className="px-3 py-2">Prix repassage</th>
                                      <th className="px-3 py-2">Prix nettoyage</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedService.pressingMenu.map((item) => (
                                      <tr key={item.label}>
                                        <td className="rounded-l-[1.15rem] border border-black/6 border-r-0 bg-ivory px-3 py-3">
                                          <img
                                            src={item.image}
                                            alt={item.label}
                                            className="h-12 w-12 rounded-xl object-cover"
                                          />
                                        </td>
                                        <td className="border border-black/6 border-l-0 border-r-0 bg-ivory px-3 py-3 text-sm font-medium text-black/74">
                                          {item.label}
                                        </td>
                                        <td className="border border-black/6 border-l-0 border-r-0 bg-ivory px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                                          {item.ironingPrice}
                                        </td>
                                        <td className="rounded-r-[1.15rem] border border-black/6 border-l-0 bg-ivory px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-forest">
                                          {item.cleaningPrice}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ) : selectedService.tariffs?.length ? (
                            <div className="rounded-[1.75rem] bg-white p-5 text-forest sm:p-6">
                              <div className="flex items-center justify-between gap-4 border-b border-black/6 pb-4">
                                <div>
                                  <p className="eyebrow">
                                    {selectedService.tariffTitle ?? 'Tarifs'}
                                  </p>
                                  <h3 className="mt-3 font-display text-3xl text-forest">
                                    {selectedService.name}
                                  </h3>
                                </div>
                                <div className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                                  Tarifs visibles ici
                                </div>
                              </div>

                              <div className="mt-5 grid gap-3">
                                {selectedService.tariffs.map((item) => (
                                  <div
                                    key={item.label}
                                    className="flex items-center justify-between rounded-[1.25rem] border border-black/6 bg-ivory px-4 py-4"
                                  >
                                    <span className="text-sm font-medium text-black/72">
                                      {item.label}
                                    </span>
                                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                                      {item.price}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          {selectedService.slug === 'pressing' ? (
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 sm:p-6">
                              <p className="eyebrow !text-white/70">Pressing de proximite</p>
                              <p className="mt-4 text-sm leading-7 text-white/78">
                                Choisissez notre pressing le plus proche de chez vous pour un
                                service rapide et soigne.
                              </p>
                              <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.24em] text-[#AE8044]">
                                Pressing le plus proche
                              </label>
                              <select
                                value={selectedPressingLocation}
                                onChange={(event) =>
                                  setSelectedPressingLocation(
                                    (event.target as HTMLSelectElement).value
                                  )
                                }
                                className="field mt-3 !bg-white !text-forest"
                              >
                                {pressingLocations.map((location) => (
                                  <option key={location} value={location}>
                                    {location}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ) : null}

                          <Link
                            href={`/services/reservation?service=${selectedService.slug}`}
                            className="btn-primary w-full !bg-[#AE8044] hover:!bg-[#9b723d]"
                          >
                            Reserver ce service
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <ServiceCard
                  service={service}
                  active={selectedService?.slug === service.slug}
                  showAction
                  onSelect={handleSelect}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceJourney.map(([title, copy]) => (
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
