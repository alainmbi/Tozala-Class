import { Head, Link } from '@inertiajs/react'
import type { ReactNode } from 'react'
import MainLayout from '../../layouts/MainLayout.js'
import type { PageComponent } from '../../lib/inertia.js'

const NotFound: PageComponent = () => {
  return (
    <>
      <Head title="Page introuvable" />
      <section className="section-space">
        <div className="shell">
          <div className="card-surface p-10 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 font-display text-4xl text-forest">Cette page s’est évanouie.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-black/65">
              Le lien demandé ne fait pas partie de l’univers TozalaClass. Revenons à la maison.
            </p>
            <Link href="/" className="btn-primary mt-8">
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

NotFound.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>

export default NotFound
