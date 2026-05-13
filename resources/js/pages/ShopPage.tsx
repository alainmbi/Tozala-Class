import { Head } from '@inertiajs/react'
import { startTransition, useDeferredValue, useState } from 'react'
import { ProductCard } from '../components/ProductCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import { products } from '../data/products.js'
import { shopGalleryItems, type ShopGalleryCategory } from '../data/shopGallery.js'
import type { PageComponent } from '../lib/inertia.js'

const galleryFilters: Array<{ label: string; value: ShopGalleryCategory }> = [
  { label: 'Tout voir', value: 'all' },
  { label: 'Homme', value: 'homme' },
  { label: 'Femme', value: 'femme' },
  { label: 'Accessoires', value: 'accessoires' },
]

const filterCopy: Record<ShopGalleryCategory, { title: string; description: string }> = {
  all: {
    title: 'Toutes les pieces',
    description:
      "Une selection melangee ou le tailoring rencontre la reception et les accessoires d'allure.",
  },
  homme: {
    title: 'Collection Homme',
    description:
      'Des silhouettes structurees, des coupes nettes et une presence couture pour les vestiaires masculins.',
  },
  femme: {
    title: 'Collection Femme',
    description:
      'Des drapes lumineux, une elegance ceremonielle et des pieces pensees pour marquer les entrees.',
  },
  accessoires: {
    title: 'Collection Accessoires',
    description:
      'Cuirs, bijoux, souliers et details precieux pour signer la silhouette avec justesse.',
  },
}

function getVisibleGallery(activeCategory: ShopGalleryCategory) {
  if (activeCategory === 'all') {
    return shopGalleryItems
  }

  return shopGalleryItems.filter((item) => item.category === activeCategory)
}

const ShopPage: PageComponent = () => {
  const [activeCategory, setActiveCategory] = useState<ShopGalleryCategory>('all')
  const deferredCategory = useDeferredValue(activeCategory)
  const visibleGallery = getVisibleGallery(deferredCategory)
  const visibleProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category.toLowerCase() === activeCategory)

  function handleCategoryChange(category: ShopGalleryCategory) {
    startTransition(() => {
      setActiveCategory(category)
    })
  }

  return (
    <>
      <Head title="Shop" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.5rem] bg-white p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-forest px-6 py-8 text-white sm:px-8">
              <div>
                <p className="eyebrow !text-white/70">La Selection</p>
                <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  Heritage Modernity
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                  Une collection ou le tailoring rencontre l&apos;attitude contemporaine:
                  costumes, robes de reception et accessoires d&apos;allure.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {galleryFilters.map((filter) => {
                  const isActive = activeCategory === filter.value

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => handleCategoryChange(filter.value)}
                      className={[
                        'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition duration-300',
                        isActive
                          ? 'bg-[#AE8044] text-white shadow-[0_18px_35px_rgba(174,128,68,0.28)]'
                          : 'border border-white/20 bg-white/8 text-white hover:-translate-y-0.5 hover:border-[#AE8044]/50',
                      ].join(' ')}
                    >
                      {filter.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#101513] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4 text-white/70">
                <p className="text-xs font-semibold uppercase tracking-[0.32em]">
                  Galerie Produits
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AE8044]">
                  {visibleGallery.length} visuels
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleGallery.map((item, index) => {
                  const tallCard = index % 5 === 0
                  const mediumCard = index % 3 === 0

                  return (
                    <article
                      key={`${deferredCategory}-${item.id}`}
                      className={[
                        'group relative overflow-hidden rounded-[1.5rem] bg-[#1b2521]',
                        'transition-all duration-500 ease-out',
                        tallCard ? 'sm:row-span-2' : '',
                      ].join(' ')}
                      style={{
                        minHeight: tallCard ? '26rem' : mediumCard ? '19rem' : '15rem',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#AE8044]">
                          {item.category}
                        </p>
                        <h3 className="mt-2 font-display text-xl leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Boutique"
            title={filterCopy[activeCategory].title}
            description={filterCopy[activeCategory].description}
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
