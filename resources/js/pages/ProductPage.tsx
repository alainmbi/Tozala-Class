import { Head, Link } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { getProductById, getRelatedProducts } from '../lib/catalog.js'
import { formatPrice } from '../lib/format.js'
import { ProductCard } from '../components/ProductCard.js'
import { SectionHeading } from '../components/SectionHeading.js'
import type { PageComponent } from '../lib/inertia.js'

type ProductPageProps = {
  productId: number | string
}

const ProductPage: PageComponent<ProductPageProps> = ({ productId }) => {
  const product = getProductById(Number(productId))
  const [selectedImage, setSelectedImage] = useState(product?.gallery[0] ?? '')
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? '')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product) {
      setSelectedImage(product.gallery[0])
      setSelectedSize(product.sizes[0] ?? '')
      setQuantity(1)
    }
  }, [productId, product])

  if (!product) {
    return (
      <>
        <Head title="Produit introuvable" />
        <section className="section-space">
          <div className="shell">
            <div className="card-surface p-10 text-center">
              <p className="eyebrow">Catalogue</p>
              <h1 className="mt-4 font-display text-4xl text-forest">Produit introuvable</h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-black/65">
                Cette pièce ne figure pas dans la collection statique actuelle. Vous pouvez revenir
                à la boutique pour découvrir les sélections disponibles.
              </p>
              <Link href="/shop" className="btn-primary mt-8">
                Retour à la boutique
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  const relatedProducts = getRelatedProducts(product.category, product.id)

  return (
    <>
      <Head title={product.name} />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
            <div className="grid gap-4 lg:grid-cols-[0.18fr_0.82fr]">
              <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
                {product.gallery.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={[
                      'overflow-hidden rounded-[1.35rem] border transition',
                      selectedImage === image ? 'border-gold shadow-lg' : 'border-black/8',
                    ].join(' ')}
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-[2.5rem] bg-white shadow-[var(--shadow-soft)] lg:order-2">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="card-surface p-8 sm:p-10">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm font-semibold tracking-[0.22em] text-gold uppercase">
                {product.subtitle}
              </p>
              <p className="mt-6 text-base leading-8 text-black/65">{product.description}</p>

              <div className="mt-8 rounded-[1.75rem] bg-forest px-6 py-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm tracking-[0.22em] uppercase text-white/70">Prix</span>
                  <span className="font-display text-3xl">{formatPrice(product.price)}</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                  Tailles
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={[
                        'rounded-full border px-4 py-2 text-sm font-semibold transition',
                        selectedSize === size
                          ? 'border-gold bg-gold text-white'
                          : 'border-black/8 bg-white text-forest hover:border-gold/40',
                      ].join(' ')}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                  Quantité
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-black/8 bg-white p-1">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full text-xl text-forest"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  >
                    -
                  </button>
                  <span className="min-w-12 text-center text-sm font-semibold">{quantity}</span>
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full text-xl text-forest"
                    onClick={() => setQuantity((value) => value + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <button type="button" className="btn-primary">
                  Ajouter au panier
                </button>
                <Link href="/checkout" className="btn-secondary">
                  Passer à la caisse
                </Link>
              </div>

              <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-black/6 bg-ivory p-6 text-sm leading-7 text-black/65">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-forest">Matière</span>
                  <span className="max-w-xs text-right">{product.material}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-forest">Taille sélectionnée</span>
                  <span>{selectedSize}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-forest">Expérience</span>
                  <span>Essayage conseillé en boutique ou rendez-vous privé.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Complétez le look"
            title="Autres pièces de cet univers."
            description="Une sélection complémentaire pour composer une silhouette cohérente, cérémoniale et élégante."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage
