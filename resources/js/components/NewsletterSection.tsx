import type { FormEvent } from 'react'
import { useState } from 'react'
import { NewsletterEmailPreview } from './newsletter/NewsletterEmailPreview.js'
import { BrandSilhouette } from './common/BrandSilhouette.js'

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [status, setStatus] = useState<NewsletterStatus>('idle')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      setStatus('error')
      setMessage("Merci d'entrer une adresse email valide.")
      return
    }

    setStatus('loading')
    setMessage('Preparation de votre abonnement au Cercle Prive...')

    globalThis.setTimeout(() => {
      setSubmittedEmail(normalizedEmail)
      setStatus('success')
      setMessage(
        "Abonnement confirme. Une simulation d'email premium TozalaClass a ete preparee ci-dessous."
      )

      // TODO: Connecter ici le futur service Mail d'AdonisJS pour declencher l'envoi reel.
      setEmail('')
    }, 700)
  }

  return (
    <section className="section-space">
      <div className="shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-forest px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8">
                <BrandSilhouette size={38} variant="light" />
              </div>
              <p className="eyebrow !text-white/70">Cercle prive</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
                Rejoignez l'agenda confidentiel de TozalaClass.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Chaque mois, la maison partage actualites mode, conseils pour un bon look,
                temoignages clients, catalogue mensuel, nouveautes boutique et offres atelier.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Actualites mode et tendances du mois',
                  'Conseils pour un bon look et belles associations',
                  'Nouveautes boutique et selection catalogue',
                  'Offres pressing, retouche, confection et image',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4"
                  >
                    <p className="text-sm leading-6 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur"
              >
                <label htmlFor="newsletter-email" className="text-sm font-medium text-white/80">
                  Votre adresse email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="nom@exemple.com"
                  value={email}
                  onChange={(event) =>
                    setEmail((event as unknown as { target: { value: string } }).target.value)
                  }
                  className="mt-4 h-12 w-full rounded-full border border-white/12 bg-white px-5 text-sm text-ink outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-4 btn-primary w-full !bg-gold !text-white hover:!bg-[#9b723d] disabled:cursor-wait disabled:opacity-75"
                >
                  {status === 'loading' ? 'Preparation...' : "S'inscrire"}
                </button>
                <p className="mt-4 text-xs leading-6 text-white/60">
                  Aucun spam. Seulement des rendez-vous, des sorties et des pieces qui comptent.
                </p>

                {message ? (
                  <div
                    className={[
                      'mt-5 rounded-[1.35rem] border px-4 py-3 text-sm leading-6',
                      status === 'success'
                        ? 'border-[#AE8044]/35 bg-[#AE8044]/10 text-white'
                        : status === 'error'
                          ? 'border-red-200/40 bg-red-500/12 text-white'
                          : 'border-white/10 bg-white/8 text-white/80',
                    ].join(' ')}
                  >
                    {message}
                  </div>
                ) : null}
              </form>

              {status === 'success' && submittedEmail ? (
                <NewsletterEmailPreview email={submittedEmail} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
