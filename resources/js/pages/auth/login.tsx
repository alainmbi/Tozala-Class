import { Head, Link } from '@inertiajs/react'
import { Form } from '@adonisjs/inertia/react'
import type { ReactNode } from 'react'
import AuthLayout from '../../layouts/AuthLayout.js'
import type { PageComponent } from '../../lib/inertia.js'

const Login: PageComponent = () => {
  return (
    <>
      <Head title="Login" />
      <div className="mx-auto w-full max-w-xl">
        <p className="eyebrow">Connexion</p>
        <h1 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
          Retrouvez votre vestiaire.
        </h1>
        <p className="mt-4 text-base leading-8 text-black/65">
          Connectez-vous pour suivre vos commandes, vos rendez-vous atelier et vos services premium.
        </p>

        <Form route="session.store" className="mt-10 grid gap-5">
          {({ errors }: { errors: Record<string, string> }) => (
            <>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-forest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="username"
                  data-invalid={errors.email ? 'true' : undefined}
                  className="field"
                />
                {errors.email && <div className="mt-2 text-sm text-red-600">{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-forest">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  data-invalid={errors.password ? 'true' : undefined}
                  className="field"
                />
                {errors.password && (
                  <div className="mt-2 text-sm text-red-600">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn-primary mt-4">
                Se connecter
              </button>
            </>
          )}
        </Form>

        <p className="mt-8 text-sm text-black/60">
          Pas encore de compte ?{' '}
          <Link href="/signup" className="font-semibold text-gold">
            Créer un compte
          </Link>
        </p>
      </div>
    </>
  )
}

Login.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>

export default Login
