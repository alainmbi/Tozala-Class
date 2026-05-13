import { Head, usePage } from '@inertiajs/react'
import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react'
import { ProductCard } from '../components/ProductCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import { products, productCategorySlugMap } from '../data/products.js'
import { shopGalleryItems, type ShopGalleryCategory } from '../data/shopGallery.js'
import type { PageComponent } from '../lib/inertia.js'

const galleryFilters: Array<{ label: string; value: ShopGalleryCategory }> = [
  { label: 'Voir tout', value: 'all' },
  { label: 'Homme', value: 'homme' },
  { label: 'Femme', value: 'femme' },
  { label: 'Accessoires', value: 'accessoires' },
  { label: 'Enfant', value: 'enfant' },
  { label: 'Medecin', value: 'medecin' },
]

const filterCopy: Record<ShopGalleryCategory, { title: string; description: string }> = {
  all: {
    title: 'Toutes les pieces',
    description:
      "Une selection melangee ou le tailoring rencontre l'evenementiel, l'atelier et les nouveaux univers de la maison.",
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
  enfant: {
    title: 'Collection Enfant',
    description:
      'Des tenues soignement dessinees pour les plus jeunes lors des fetes, cortege et grands moments.',
  },
  medecin: {
    title: 'Collection Medecin',
    description:
      'Une ligne medicale premium pour conjuguer confort, hygiene visuelle et autorite professionnelle.',
  },
}

function parseShopCategory(url: string): ShopGalleryCategory {
  const params = new URLSearchParams(url.split('?')[1] ?? '')
  const requestedCategory = params.get('category')

  if (galleryFilters.some((filter) => filter.value === requestedCategory)) {
    return requestedCategory as ShopGalleryCategory
  }

  return 'all'
}

function getVisibleGallery(activeCategory: ShopGalleryCategory) {
  const filtered =
    activeCategory === 'all'
      ? shopGalleryItems
      : shopGalleryItems.filter((item) => item.category === activeCategory)

  return filtered.slice(0, 8)
}

const ShopPage: PageComponent = () => {
  const page = usePage()
  const requestedCategory = useMemo(() => parseShopCategory(page.url), [page.url])
  const [activeCategory, setActiveCategory] = useState<ShopGalleryCategory>(requestedCategory)
  const deferredCategory = useDeferredValue(activeCategory)

  useEffect(() => {
    setActiveCategory(requestedCategory)
  }, [requestedCategory])

  const visibleGallery = getVisibleGallery(deferredCategory)
  const allCategoryProducts =
    deferredCategory === 'all'
      ? products
      : products.filter((product) => productCategorySlugMap[product.category] === deferredCategory)

  const visibleProducts = allCategoryProducts.slice(0, 12)
  const hiddenProductsCount = Math.max(0, allCategoryProducts.length - visibleProducts.length)

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
          <div className="grid gap-5 rounded-[2.5rem] bg-white p-5 shadow-[var(--shadow-soft)] lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:p-8">
            <div className="flex flex-col justify-between rounded-[2rem] bg-forest px-5 py-7 text-white sm:px-7 sm:py-8">
              <div>
                <p className="eyebrow !text-white/70">La selection</p>
                <h1 className="mt-5 font-display text-4xl leading-tight sm:text-[3.25rem]">
                  Heritage Modernity
                </h1>
                <p className="mt-5 max-w-md text-base leading-8 text-white/75">
                  Une boutique premium ou la mode, les accessoires, les lignes enfant et les
                  silhouettes medicales partagent la meme elegance.
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
                        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition duration-300',
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

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
                    Produits
                  </p>
                  <p className="mt-3 font-display text-3xl">{visibleProducts.length}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                    sur {allCategoryProducts.length}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AE8044]">
                    Galerie
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Huit visuels choisis pour garder un parcours dense, fluide et sans vide.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#101513] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4 text-white/70">
                <p className="text-xs font-semibold uppercase tracking-[0.32em]">
                  Galerie produits
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AE8044]">
                  {visibleGallery.length} visuels
                </p>
              </div>

              <div className="max-h-[38rem] overflow-y-auto pr-1 sm:pr-2">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleGallery.map((item) => (
                    <article
                      key={`${deferredCategory}-${item.id}`}
                      className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#1b2521]"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#AE8044]">
                          {item.category}
                        </p>
                        <h3 className="mt-2 font-display text-xl leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/8 pt-4 text-xs uppercase tracking-[0.2em] text-white/55">
                <span>Galerie condensee pour une lecture premium</span>
                <span className="text-[#AE8044]">Scroll si necessaire</span>
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

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-black/6 bg-white px-5 py-4 text-sm text-black/62">
            <p>
              {visibleProducts.length} produits affiches par defaut pour garder une navigation
              claire et elegante.
            </p>
            {hiddenProductsCount > 0 ? (
              <p className="font-semibold uppercase tracking-[0.18em] text-gold">
                {hiddenProductsCount} autres pieces sur cette categorie
              </p>
            ) : null}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
