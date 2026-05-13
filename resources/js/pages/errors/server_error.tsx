import { Head, Link } from '@inertiajs/react'
import type { ReactNode } from 'react'
import MainLayout from '../../layouts/MainLayout.js'
import type { PageComponent } from '../../lib/inertia.js'

const ServerError: PageComponent = () => {
  return (
    <>
      <Head title="Erreur serveur" />
      <section className="section-space">
        <div className="shell">
          <div className="card-surface p-10 text-center">
            <p className="eyebrow">500</p>
            <h1 className="mt-4 font-display text-4xl text-forest">Un imprévu côté atelier.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-black/65">
              Une erreur est survenue pendant le traitement de votre demande. Vous pouvez revenir à
              l’accueil ou réessayer dans un instant.
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

ServerError.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>

export default ServerError
