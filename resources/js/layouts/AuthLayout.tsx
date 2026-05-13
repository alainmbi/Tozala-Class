import { BrandMark } from '../components/BrandMark.js'
import { Link } from '@adonisjs/inertia/react'
import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-forest px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-[var(--shadow-soft)]">
        <div className="hidden w-[42%] flex-col justify-between bg-forest p-10 text-white lg:flex">
          <div>
            <BrandMark tone="light" />
            <p className="mt-10 max-w-sm font-display text-4xl leading-tight">
              L’élégance commence avant même l’essayage.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 text-sm leading-7 text-white/75">
            Compte client, suivi atelier, services premium et accès aux nouvelles pièces de la
            maison.
          </div>
        </div>

        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-[58%] lg:px-16">
          <div className="mb-10 flex items-center justify-between">
            <Link href="/">
              <BrandMark />
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
