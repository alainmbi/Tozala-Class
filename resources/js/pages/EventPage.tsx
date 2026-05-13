import { Head, Link } from '@inertiajs/react'
import { BrandSilhouette } from '../components/common/BrandSilhouette.js'
import { SectionHeading } from '../components/SectionHeading.js'
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

const EventPage: PageComponent = () => {
  return (
    <>
      <Head title="Evenementiel" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-forest p-6 text-white shadow-[var(--shadow-soft)] lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-black/10 p-6 sm:p-8">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8">
                  <BrandSilhouette size={40} />
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
                <Link href="/services" className="btn-primary !bg-gold hover:!bg-[#9b723d]">
                  Reserver un accompagnement
                </Link>
                <Link
                  href="/shop"
                  className="btn-secondary !border-white/20 !bg-white/8 !text-white hover:!text-white"
                >
                  Voir les pieces
                </Link>
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
    </>
  )
}

export default EventPage
