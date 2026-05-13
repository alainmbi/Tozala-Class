import { Head } from '@inertiajs/react'
import { useMemo, useState, type FormEvent } from 'react'
import { BrandSilhouette } from '../components/common/BrandSilhouette.js'
import { SectionHeading } from '../components/SectionHeading.js'
import { eventStyles } from '../data/eventStyles.js'
import type { PageComponent } from '../lib/inertia.js'

const signatureMoments = [
  {
    title: 'Mariages couture',
    description:
      'Habillage du cortege, accompagnement des essayages et direction textile de la journee.',
  },
  {
    title: 'Gala et ceremonies',
    description:
      'Vestiaires invites, silhouettes host et coordination visuelle pour les prises de parole.',
  },
  {
    title: 'Evenements prives',
    description:
      "Capsules mode, conseil image et scenographie d'allure pour des experiences memorables.",
  },
]

const eventCategories = [
  'Soiree de Gala',
  'Mariage',
  'Anniversaire de mariage',
  'Conference',
  'Formation',
  'Seance photo',
  'Point de presse',
] as const

type EventCategory = (typeof eventCategories)[number]

type ReservationForm = {
  fullName: string
  phone: string
  email: string
  eventDate: string
  category: EventCategory
  briefing: string
}

const initialReservationForm: ReservationForm = {
  fullName: '',
  phone: '',
  email: '',
  eventDate: '',
  category: 'Soiree de Gala',
  briefing: '',
}

const EventPage: PageComponent = () => {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [showStyles, setShowStyles] = useState(false)
  const [bookingMessage, setBookingMessage] = useState('')
  const [reservationForm, setReservationForm] = useState<ReservationForm>(initialReservationForm)
  const [activeStyleId, setActiveStyleId] = useState(eventStyles[0]?.id ?? 1)

  const activeStyle = useMemo(
    () => eventStyles.find((style) => style.id === activeStyleId) ?? eventStyles[0],
    [activeStyleId]
  )

  function openStylesSection() {
    setShowStyles(true)

    globalThis.setTimeout(() => {
      ;(globalThis as unknown as { location: { hash: string } }).location.hash =
        'event-styles-section'
    }, 60)
  }

  function updateReservationField<K extends keyof ReservationForm>(
    field: K,
    value: ReservationForm[K]
  ) {
    setReservationForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function handleReservationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setBookingMessage(
      "Votre demande d'accompagnement a bien ete enregistree. L'atelier TozalaClass vous contactera pour affiner votre style en temps reel."
    )

    // TODO: Connecter ici une future API AdonisJS pour persister la reservation.
    setReservationForm(initialReservationForm)
    setBookingOpen(false)
  }

  return (
    <>
      <Head title="Evenementiel" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-forest p-6 text-white shadow-[var(--shadow-soft)] lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-black/10 p-6 sm:p-8">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8">
                  <BrandSilhouette size={40} variant="light" />
                </div>
                <p className="eyebrow !text-white/70">L'evenementiel signature</p>
                <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Des moments habilles a la hauteur de leur portee.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
                  TozalaClass compose une direction textile complete pour mariages, galas, diners
                  prives et evenements de marque.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="btn-primary !bg-gold hover:!bg-[#9b723d]"
                >
                  Reserver un accompagnement
                </button>
                <button
                  type="button"
                  onClick={openStylesSection}
                  className="btn-secondary !border-white/20 !bg-white/8 !text-white hover:!text-white"
                >
                  Voir les pieces
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
                alt="Evenement signature TozalaClass"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {bookingMessage ? (
        <section className="pb-2">
          <div className="shell">
            <div className="rounded-[2rem] border border-gold/25 bg-gold/8 px-6 py-5 text-sm leading-7 text-forest">
              {bookingMessage}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-space bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Grandes occasions"
            title="Des scenarios d'elegance penses dans le detail."
            description="Nous dessinons l'allure de votre evenement depuis la silhouette jusqu'au rythme visuel de l'ensemble."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {signatureMoments.map((moment) => (
              <article key={moment.title} className="card-surface p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-forest/6">
                  <BrandSilhouette size={28} />
                </div>
                <h3 className="font-display text-3xl text-forest">{moment.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showStyles ? (
        <section id="event-styles-section" className="section-space">
          <div className="shell">
            <div className="rounded-[2.5rem] bg-forest p-6 text-white shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
              <div className="max-w-4xl">
                <p className="eyebrow !text-white/70">Styles pays</p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Des pieces d'inspiration pour chaque culture de prestige.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
                  Explorez des univers vestimentaires qui traduisent la ceremonie, la sape, le
                  tailoring et le luxe selon les sensibilites de chaque pays.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {eventStyles.map((style) => (
                  <article
                    key={style.id}
                    className="group overflow-hidden rounded-[2rem] bg-black/10 transition duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#AE8044]">
                          {style.country}
                        </p>
                        <h3 className="mt-2 font-display text-2xl leading-tight text-white">
                          {style.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/78">{style.description}</p>
                        <button
                          type="button"
                          onClick={() => setActiveStyleId(style.id)}
                          className="mt-5 inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#AE8044]/60 hover:text-[#AE8044]"
                        >
                          Voir le style
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {activeStyle ? (
                <div className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-white/6 p-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.75rem]">
                    <img
                      src={activeStyle.image}
                      alt={activeStyle.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
                      {activeStyle.country}
                    </p>
                    <h3 className="mt-4 font-display text-4xl leading-tight text-white">
                      {activeStyle.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
                      {activeStyle.description}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-white/66">
                      Une direction visuelle premium pour imaginer les silhouettes, les coupes et
                      l'ambiance de vos ceremonies signature.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-space">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
                  alt="Portrait premium"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] sm:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                  alt="Silhouette ceremonie"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Consultation VIP"
                title="Une direction personnelle pour les moments qui marquent."
                description="Essayages prives, montage des looks, conseil image du couple ou du cortege, reperage matieres et coordination du jour J."
              />
              <div className="mt-8 grid gap-4">
                {[
                  "Rendez-vous strategique avant l'evenement",
                  'Selection de silhouettes et accessoires',
                  'Coordination du vestiaire principal et du cortege',
                  'Suivi pressing et finitions avant livraison',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-black/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {bookingOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-[2rem] bg-[#F7F4EF] p-4 sm:p-6">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Reservation premium</p>
                  <h2 className="mt-3 font-display text-4xl text-forest">
                    Reserver un accompagnement
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-black/65">
                    Un echange initial pour cadrer votre evenement, votre style souhaite et
                    l'accompagnement de la maison.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 text-forest transition hover:border-gold/40 hover:text-gold"
                  aria-label="Fermer le formulaire"
                >
                  <span className="text-xl leading-none">x</span>
                </button>
              </div>

              <form onSubmit={handleReservationSubmit} className="mt-8 grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="field"
                    type="text"
                    placeholder="Nom complet"
                    value={reservationForm.fullName}
                    onChange={(event) =>
                      updateReservationField(
                        'fullName',
                        (event as unknown as { target: { value: string } }).target.value
                      )
                    }
                  />
                  <input
                    className="field"
                    type="tel"
                    placeholder="Telephone"
                    value={reservationForm.phone}
                    onChange={(event) =>
                      updateReservationField(
                        'phone',
                        (event as unknown as { target: { value: string } }).target.value
                      )
                    }
                  />
                  <input
                    className="field"
                    type="email"
                    placeholder="Email"
                    value={reservationForm.email}
                    onChange={(event) =>
                      updateReservationField(
                        'email',
                        (event as unknown as { target: { value: string } }).target.value
                      )
                    }
                  />
                  <input
                    className="field"
                    type="date"
                    value={reservationForm.eventDate}
                    onChange={(event) =>
                      updateReservationField(
                        'eventDate',
                        (event as unknown as { target: { value: string } }).target.value
                      )
                    }
                  />
                </div>

                <select
                  className="field"
                  value={reservationForm.category}
                  onChange={(event) =>
                    updateReservationField(
                      'category',
                      (event as unknown as { target: { value: EventCategory } }).target.value
                    )
                  }
                >
                  {eventCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <textarea
                  className="textarea-field"
                  placeholder="Decrivez votre evenement, le style souhaite, le nombre de personnes a accompagner, le lieu et l'ambiance recherchee."
                  value={reservationForm.briefing}
                  onChange={(event) =>
                    updateReservationField(
                      'briefing',
                      (event as unknown as { target: { value: string } }).target.value
                    )
                  }
                />

                <button type="submit" className="btn-primary">
                  Reserver maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EventPage
