import { Head, Link } from '@inertiajs/react'
import { categories } from '../data/categories.js'
import { products } from '../data/products.js'
import { services } from '../data/services.js'
import { CategoryCard } from '../components/CategoryCard.js'
import { ProductCard } from '../components/ProductCard.js'
import { ServiceCard } from '../components/ServiceCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import { NewsletterSection } from '../components/NewsletterSection.js'
import type { PageComponent } from '../lib/inertia.js'

const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

const HomePage: PageComponent = () => {
  return (
    <>
      <Head title="TozalaClass" />

      <section className="section-space pt-8 sm:pt-10">
        <div className="shell">
          <div className="grid gap-6 overflow-hidden rounded-[2.5rem] bg-forest px-6 py-6 text-white shadow-[var(--shadow-soft)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between gap-10 rounded-[2rem] bg-black/10 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="eyebrow !text-white/70">Maison de mode premium</p>
                <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-7xl">
                  Habillez-vous avec classe, vivez avec impact.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
                  TozalaClass réunit couture, style, pressing premium et événementiel dans une même
                  expérience élégante, précise et vivante.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/shop" className="btn-primary !bg-gold hover:!bg-[#9b723d]">
                  Explorer la boutique
                </Link>
                <Link
                  href="/event"
                  className="btn-secondary !border-white/20 !bg-white/8 !text-white hover:!text-white"
                >
                  Découvrir l’événementiel
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['Sur mesure', 'Confection et retouche atelier'],
                  ['Style', 'Conseil image et capsules privées'],
                  ['Pressing', 'Entretien premium des pièces'],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4"
                  >
                    <p className="text-sm font-semibold tracking-[0.22em] text-gold uppercase">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-rows-[1fr_0.42fr]">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/tozalaclass-moodboard.png"
                  alt="Moodboard TozalaClass"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr]">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                    alt="Création couture"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6">
                  <p className="eyebrow !text-white/70">Style en temps réel</p>
                  <h2 className="mt-4 font-display text-3xl leading-tight">
                    Une maison qui relie allure, matière et présence.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    Chaque projet est pensé comme une signature: une coupe juste, une intention
                    visuelle claire et un service qui va jusqu’au dernier détail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="maison" className="section-space">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
                alt="Atelier TozalaClass"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Notre héritage"
                title="L’art du sur-mesure au service de votre ambition."
                description="Chez TozalaClass, la coupe n’est jamais seulement esthétique. Elle soutient une présence, un message et une manière d’entrer dans le monde avec élégance."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  ['Mode haut de gamme', 'Vestiaires signature et pièces d’exception'],
                  ['Pressing premium', 'Respect de la matière et restitution impeccable'],
                  ['Conseil en image', 'Silhouette, couleurs et présence cohérentes'],
                  ['Événementiel', 'Mises en scène stylées pour les grands moments'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[1.75rem] border border-black/6 bg-white p-6">
                    <h3 className="font-display text-2xl text-forest">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/65">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="univers" className="section-space bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Univers TozalaClass"
            title="Des expériences qui vont au-delà du vêtement."
            description="Atelier, événementiel, entretien d’exception et accompagnement image: la maison compose un écosystème complet autour du style."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Catégories"
            title="Un vestiaire pensé pour la scène quotidienne comme pour l’exceptionnel."
            description="Des lignes masculines affirmées, des silhouettes féminines lumineuses et des accessoires qui signent l’ensemble avec discrétion."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section id="pieces" className="section-space bg-white">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Pièces maîtresses"
              title="Les signatures de la saison."
              description="Une sélection de pièces fortes pour les silhouettes qui veulent conjuguer élégance et impact."
            />
            <Link href="/shop" className="btn-secondary">
              Voir la collection
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

export default HomePage
