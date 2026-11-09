import { Link } from '@adonisjs/inertia/react'
import { BrandLogo } from '../common/BrandLogo.js'
import { BrandSilhouette } from '../common/BrandSilhouette.js'
import { useLanguage } from '../../lib/preferences.js'

export function NewsletterEmailPreview({ email }: { email: string }) {
  const { t } = useLanguage()

  return (
    <div className="mt-8 rounded-[2rem] bg-ivory p-4 sm:p-6">
      <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo variant="dark" size="md" className="max-w-[10.5rem]" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest">
            <BrandSilhouette size={24} variant="light" />
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] bg-forest px-5 py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            {t('Cercle privé')}{' '}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight">
            {t('Bienvenue dans le Cercle Privé TozalaClass.')}{' '}
          </h3>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-black/70">
          <p>
            {t('Merci')} <span className="font-semibold text-forest">{email}</span>{' '}
            {t('pour votre initiative de rejoindre notre maison de style.')}{' '}
          </p>
          <p>
            {t(
              'Vous venez de rejoindre une maison de style où chaque mois, nous partageons les tendances, les conseils de look, les nouveautés de la boutique, les témoignages clients et notre sélection catalogue.'
            )}{' '}
          </p>
          <p>
            {t(
              'TozalaClass fait vivre le style en temps réel pour tous, à travers la mode, le pressing premium, la retouche, la confection et le conseil en image.'
            )}{' '}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/6 bg-ivory p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t('Ce que vous recevrez')}{' '}
            </p>
            <p className="mt-3 text-sm leading-7 text-black/70">
              {t(
                'Actualités mode, conseils pour un bon look, témoignages clients, catalogue mensuel, nouveautés boutique et offres atelier.'
              )}{' '}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/6 bg-ivory p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t('Signature TozalaClass')}{' '}
            </p>
            <p className="mt-3 text-sm leading-7 text-black/70">
              {t(
                "Un ton élégant, professionnel et couture pour garder un lien premium avec la maison tout au long de l'année."
              )}{' '}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop" className="btn-primary !bg-forest hover:!bg-[#2A3A35]">
            {t('Voir la sélection')}{' '}
          </Link>
          <a
            href="/images/tozalaclass-moodboard.png"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            {t('Voir le catalogue')}{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
