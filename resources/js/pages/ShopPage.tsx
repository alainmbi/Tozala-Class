import { Head, Link, usePage } from '@inertiajs/react'
import { categories } from '../data/categories.js'
import { products } from '../data/products.js'
import { ProductCard } from '../components/ProductCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import type { PageComponent } from '../lib/inertia.js'

const ShopPage: PageComponent = () => {
  const page = usePage()
  const url = new URL(page.url, 'https://tozalaclass.local')
  const selectedCategory = url.searchParams.get('category')
  const visibleProducts = selectedCategory
    ? products.filter((product) => product.category.toLowerCase() === selectedCategory)
    : products

  return (
    <>
      <Head title="Shop" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-forest px-6 py-8 text-white sm:px-8">
              <div>
                <p className="eyebrow !text-white/70">La sélection</p>
                <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  Heritage Modernity
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                  Une collection où le tailoring rencontre l’attitude contemporaine: costumes, robes
                  de réception et accessoires d’allure.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className={
                    selectedCategory
                      ? 'btn-secondary !text-white !border-white/20 !bg-white/8'
                      : 'btn-primary !bg-gold hover:!bg-[#9b723d]'
                  }
                >
                  Tout voir
                </Link>
                {categories.map((category) => {
                  const active = selectedCategory === category.slug
                  return (
                    <Link
                      key={category.id}
                      href={`/shop?category=${category.slug}`}
                      className={
                        active
                          ? 'btn-primary !bg-white !text-forest'
                          : 'btn-secondary !text-white !border-white/20 !bg-white/8'
                      }
                    >
                      {category.name}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/tozalaclass-moodboard.png"
                alt="Moodboard collection TozalaClass"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Boutique"
            title={selectedCategory ? `Collection ${selectedCategory}` : 'Toutes les pièces'}
            description="Des pièces éditées pour composer un vestiaire premium, modulable entre quotidien élevé, cérémonies et moments signature."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
