import { Link } from '@adonisjs/inertia/react'
import { BrandLogo } from '../common/BrandLogo.js'
import { BrandSilhouette } from '../common/BrandSilhouette.js'

export function NewsletterEmailPreview({ email }: { email: string }) {
  return (
    <div className="mt-8 rounded-[2rem] bg-[#F7F4EF] p-4 sm:p-6">
      <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo variant="dark" size="md" className="max-w-[10.5rem]" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#354842]">
            <BrandSilhouette size={24} variant="light" />
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] bg-[#354842] px-5 py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#AE8044]">
            Cercle prive
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight">
            Bienvenue dans le Cercle Prive TozalaClass.
          </h3>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-black/70">
          <p>
            Merci <span className="font-semibold text-forest">{email}</span> pour votre initiative
            de rejoindre notre maison de style.
          </p>
          <p>
            Vous venez de rejoindre une maison de style ou chaque mois, nous partageons les
            tendances, les conseils de look, les nouveautes de la boutique, les temoignages clients
            et notre selection catalogue.
          </p>
          <p>
            TozalaClass fait vivre le style en temps reel pour tous, a travers la mode, le pressing
            premium, la retouche, la confection et le conseil en image.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#F7F4EF] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
              Ce que vous recevrez
            </p>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Actualites mode, conseils pour un bon look, temoignages clients, catalogue mensuel,
              nouveautes boutique et offres atelier.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/6 bg-[#F7F4EF] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
              Signature TozalaClass
            </p>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Un ton elegant, professionnel et couture pour garder un lien premium avec la maison
              tout au long de l'annee.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop" className="btn-primary !bg-[#354842] hover:!bg-[#2A3A35]">
            Voir la selection
          </Link>
          <a
            href="/images/tozalaclass-moodboard.png"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Voir le catalogue
          </a>
        </div>
      </div>
    </div>
  )
}
