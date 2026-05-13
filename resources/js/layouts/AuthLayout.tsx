import { Link } from '@adonisjs/inertia/react'
import type { ReactNode } from 'react'
import { BrandLogo } from '../components/common/BrandLogo.js'
import { BrandSilhouette } from '../components/common/BrandSilhouette.js'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-forest px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-[var(--shadow-soft)]">
        <div className="hidden w-[42%] flex-col justify-between bg-forest p-10 text-white lg:flex">
          <div>
            <BrandLogo variant="light" size="lg" className="max-w-[12rem]" />
            <p className="mt-10 max-w-sm font-display text-4xl leading-tight">
              L'elegance commence avant meme l'essayage.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 text-sm leading-7 text-white/75">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <BrandSilhouette size={34} />
            </div>
            Compte client, suivi atelier, services premium et acces aux nouvelles pieces de la
            maison.
          </div>
        </div>

        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-[58%] lg:px-16">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link href="/">
              <BrandLogo variant="dark" size="md" className="max-w-[10.5rem]" />
            </Link>
            <Link href="/" className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Retour maison
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
