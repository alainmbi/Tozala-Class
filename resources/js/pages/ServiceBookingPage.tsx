import { Head, Link, router, usePage } from '@inertiajs/react'
import { useEffect, useMemo, useState } from 'react'
import {
  findServiceBySlug,
  kinshasaCommunes,
  pressingLocations,
  services,
  type ServiceItem,
} from '../data/services.js'
import type { PageComponent } from '../lib/inertia.js'

type PaymentOption = 'mobile-money' | 'card-virement'

type BookingFormState = {
  fullName: string
  phone: string
  email: string
  serviceSlug: string
  needDetails: string
  desiredDate: string
  commune: string
  nearestPressing: string
  pressingItem: string
  paymentOption: PaymentOption
}

function getRequestedService(url: string) {
  const params = new URLSearchParams(url.split('?')[1] ?? '')
  return findServiceBySlug(params.get('service'))
}

const fallbackService = services[0]!

function getDefaultService(requestedService: ServiceItem | undefined) {
  return requestedService?.slug ?? fallbackService.slug
}

function getInitialState(requestedService: ServiceItem | undefined): BookingFormState {
  return {
    fullName: '',
    phone: '',
    email: '',
    serviceSlug: getDefaultService(requestedService),
    needDetails: '',
    desiredDate: '',
    commune: kinshasaCommunes[0] ?? '',
    nearestPressing: pressingLocations[0] ?? '',
    pressingItem: '',
    paymentOption: 'mobile-money',
  }
}

const ServiceBookingPage: PageComponent = () => {
  const page = usePage()
  const requestedService = useMemo(() => getRequestedService(page.url), [page.url])
  const [form, setForm] = useState<BookingFormState>(() => getInitialState(requestedService))
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    setForm((current) => ({
      ...current,
      serviceSlug: getDefaultService(requestedService),
    }))
  }, [requestedService])

  const selectedService =
    services.find((service) => service.slug === form.serviceSlug) ?? fallbackService
  const selectedPressingTariff =
    selectedService.slug === 'pressing'
      ? selectedService.tariffs?.find((item) => item.label === form.pressingItem)
      : undefined

  const needsPressingFields = selectedService.slug === 'pressing'
  const canContinueToCheckout =
    selectedService.paymentFlow === 'online_after_selection' && Boolean(selectedPressingTariff)

  useEffect(() => {
    setFeedbackMessage('')

    if (selectedService.slug !== 'pressing' && form.pressingItem) {
      setForm((current) => ({
        ...current,
        pressingItem: '',
      }))
    }
  }, [form.pressingItem, selectedService.slug])

  function updateField<Key extends keyof BookingFormState>(key: Key, value: BookingFormState[Key]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (canContinueToCheckout && selectedPressingTariff) {
      const params = new URLSearchParams({
        checkoutMode: 'service',
        serviceSlug: selectedService.slug,
        serviceName: selectedService.name,
        serviceItem: selectedPressingTariff.label,
        servicePrice: selectedPressingTariff.price,
        commune: form.commune,
        nearestPressing: form.nearestPressing,
        paymentOption: form.paymentOption,
      })

      router.visit(`/checkout?${params.toString()}`)
      return
    }

    setFeedbackMessage(
      `Demande envoyee pour ${selectedService.name}. L'atelier vous recontactera rapidement pour confirmer le besoin, la date et la suite du parcours.`
    )
  }

  return (
    <>
      <Head title="Reservation service" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(0,0.34fr)]">
            <div className="card-surface p-8 sm:p-10">
              <p className="eyebrow">Reservation service</p>
              <h1 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
                Precisez votre besoin avant toute validation.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-black/65">
                Ce formulaire remplace l ancien passage direct a la caisse. Pour le pressing, vous
                pourrez continuer vers le paiement seulement apres avoir choisi votre tarif.
              </p>

              <form className="mt-10 grid gap-7" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Nom complet
                    </label>
                    <input
                      className="field"
                      type="text"
                      value={form.fullName}
                      onChange={(event) =>
                        updateField('fullName', (event.target as HTMLInputElement).value)
                      }
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Telephone
                    </label>
                    <input
                      className="field"
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateField('phone', (event.target as HTMLInputElement).value)
                      }
                      placeholder="Votre numero"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                    Email
                  </label>
                  <input
                    className="field"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField('email', (event.target as HTMLInputElement).value)
                    }
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Service choisi
                    </label>
                    <select
                      className="field"
                      value={form.serviceSlug}
                      onChange={(event) =>
                        updateField('serviceSlug', (event.target as HTMLSelectElement).value)
                      }
                    >
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Date souhaitee
                    </label>
                    <input
                      className="field"
                      type="date"
                      value={form.desiredDate}
                      onChange={(event) =>
                        updateField('desiredDate', (event.target as HTMLInputElement).value)
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                    Detail du besoin
                  </label>
                  <textarea
                    className="textarea-field"
                    value={form.needDetails}
                    onChange={(event) =>
                      updateField('needDetails', (event.target as HTMLTextAreaElement).value)
                    }
                    placeholder="Expliquez la piece, le contexte, la quantite ou le style attendu."
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Commune
                    </label>
                    <select
                      className="field"
                      value={form.commune}
                      onChange={(event) =>
                        updateField('commune', (event.target as HTMLSelectElement).value)
                      }
                    >
                      {kinshasaCommunes.map((commune) => (
                        <option key={commune} value={commune}>
                          {commune}
                        </option>
                      ))}
                    </select>
                  </div>

                  {needsPressingFields ? (
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                        Pressing le plus proche
                      </label>
                      <select
                        className="field"
                        value={form.nearestPressing}
                        onChange={(event) =>
                          updateField('nearestPressing', (event.target as HTMLSelectElement).value)
                        }
                      >
                        {pressingLocations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}
                </div>

                {needsPressingFields ? (
                  <div className="rounded-[1.75rem] border border-gold/20 bg-gold/8 p-5">
                    <p className="text-sm leading-7 text-forest">
                      Choisissez notre pressing le plus proche de chez vous pour un service rapide
                      et soigne.
                    </p>

                    <label className="mt-5 mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Tarif pressing choisi
                    </label>
                    <select
                      className="field"
                      value={form.pressingItem}
                      onChange={(event) =>
                        updateField('pressingItem', (event.target as HTMLSelectElement).value)
                      }
                    >
                      <option value="">Choisir un article</option>
                      {selectedService.tariffs?.map((item) => (
                        <option key={item.label} value={item.label}>
                          {item.label} - {item.price}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                {canContinueToCheckout ? (
                  <div className="rounded-[1.75rem] border border-forest/10 bg-ivory p-5">
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-forest">
                      Option de paiement
                    </label>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        {
                          label: 'Mobile Money',
                          value: 'mobile-money' as const,
                          copy: 'Ideal pour confirmer rapidement le pressing choisi.',
                        },
                        {
                          label: 'Carte / virement',
                          value: 'card-virement' as const,
                          copy: 'Pour un reglement en ligne sur la page caisse.',
                        },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateField('paymentOption', option.value)}
                          className={[
                            'rounded-[1.35rem] border px-4 py-4 text-left transition',
                            form.paymentOption === option.value
                              ? 'border-gold bg-white text-forest'
                              : 'border-black/8 bg-white/60 text-black/68',
                          ].join(' ')}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                            {option.label}
                          </p>
                          <p className="mt-2 text-sm leading-6">{option.copy}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {feedbackMessage ? (
                  <div className="rounded-[1.5rem] border border-gold/20 bg-gold/8 px-5 py-4 text-sm leading-7 text-forest">
                    {feedbackMessage}
                  </div>
                ) : null}

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button type="submit" className="btn-primary">
                    {canContinueToCheckout ? 'Continuer vers la caisse' : 'Envoyer ma demande'}
                  </button>
                  <Link href="/services" className="btn-secondary">
                    Retour aux services
                  </Link>
                </div>
              </form>
            </div>

            <aside className="card-surface h-fit p-8 sm:p-10">
              <p className="eyebrow">Resume logique</p>
              <h2 className="mt-4 font-display text-3xl text-forest">Votre parcours</h2>

              <div className="mt-8 space-y-5">
                <div className="rounded-[1.5rem] bg-ivory p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Service
                  </p>
                  <p className="mt-3 font-display text-2xl text-forest">{selectedService.name}</p>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {selectedService.description}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/6 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Mode de validation
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/68">
                    {canContinueToCheckout
                      ? `Paiement possible pour ${selectedPressingTariff?.label ?? 'le pressing choisi'}.`
                      : "Votre demande sera d'abord etudiee par l'atelier avant confirmation."}
                  </p>
                </div>

                {selectedPressingTariff ? (
                  <div className="rounded-[1.5rem] bg-forest px-5 py-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#AE8044]">
                      Tarif selectionne
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-sm text-white/74">{selectedPressingTariff.label}</span>
                      <span className="font-display text-2xl">{selectedPressingTariff.price}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceBookingPage
