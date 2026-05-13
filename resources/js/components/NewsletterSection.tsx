import { BrandSilhouette } from './common/BrandSilhouette.js'

export function NewsletterSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-forest px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8">
                <BrandSilhouette size={38} />
              </div>
              <p className="eyebrow !text-white/70">Cercle prive</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
                Rejoignez l'agenda confidentiel de TozalaClass.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Capsules limitees, invitations atelier, rendez-vous image et acces anticipe aux
                pieces maitresses.
              </p>
            </div>
            <form className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-white/80">
                Votre adresse email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="nom@exemple.com"
                className="mt-4 h-12 w-full rounded-full border border-white/12 bg-white px-5 text-sm text-ink outline-none"
              />
              <button
                type="button"
                className="mt-4 btn-primary w-full !bg-gold !text-white hover:!bg-[#9b723d]"
              >
                S'inscrire
              </button>
              <p className="mt-4 text-xs leading-6 text-white/60">
                Aucun spam. Seulement des rendez-vous, des sorties et des pieces qui comptent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
