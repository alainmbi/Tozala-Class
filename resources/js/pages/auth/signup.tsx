import { Head, Link } from '@inertiajs/react'
import { Form } from '@adonisjs/inertia/react'
import type { ReactNode } from 'react'
import AuthLayout from '../../layouts/AuthLayout.js'
import type { PageComponent } from '../../lib/inertia.js'
import { useLanguage } from '../../lib/preferences.js'

const Signup: PageComponent = () => {
  const { t } = useLanguage()

  return (
    <>
      <Head title={t('Signup')} />
      <div className="mx-auto w-full max-w-xl">
        <p className="eyebrow">{t('Créer un compte')}</p>
        <h1 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
          {t('Entrez dans le Cercle Privé.')}{' '}
        </h1>
        <p className="mt-4 text-base leading-8 text-black/65">
          {t(
            'Ouvrez votre espace pour commander, réserver un service et suivre vos pièces d’atelier.'
          )}{' '}
        </p>

        <Form route="new_account.store" className="mt-10 grid gap-5">
          {({ errors }: { errors: Record<string, string> }) => (
            <>
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-forest">
                  {t('Nom complet')}{' '}
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  data-invalid={errors.fullName ? 'true' : undefined}
                  className="field"
                />
                {errors.fullName && (
                  <div className="mt-2 text-sm text-red-600">{t(errors.fullName)}</div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-forest">
                  {t('Email')}{' '}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  data-invalid={errors.email ? 'true' : undefined}
                  className="field"
                />
                {errors.email && <div className="mt-2 text-sm text-red-600">{t(errors.email)}</div>}
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-forest">
                  {t('Mot de passe')}{' '}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  data-invalid={errors.password ? 'true' : undefined}
                  className="field"
                />
                {errors.password && (
                  <div className="mt-2 text-sm text-red-600">{t(errors.password)}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="mb-2 block text-sm font-medium text-forest"
                >
                  {t('Confirmation du mot de passe')}{' '}
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  autoComplete="new-password"
                  data-invalid={errors.passwordConfirmation ? 'true' : undefined}
                  className="field"
                />
                {errors.passwordConfirmation && (
                  <div className="mt-2 text-sm text-red-600">{t(errors.passwordConfirmation)}</div>
                )}
              </div>

              <button type="submit" className="btn-primary mt-4">
                {t('Créer mon compte')}{' '}
              </button>
            </>
          )}
        </Form>

        <p className="mt-8 text-sm text-black/60">
          {t('Déjà membre ?')}{' '}
          <Link href="/login" className="font-semibold text-gold">
            {t('Se connecter')}{' '}
          </Link>
        </p>
      </div>
    </>
  )
}

Signup.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>

export default Signup
