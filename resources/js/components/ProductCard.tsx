import type { Product } from '../data/products.js'
import { formatPrice } from '../lib/format.js'
import { Link } from '@adonisjs/inertia/react'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white">
      <Link href={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] overflow-hidden bg-forest/5">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{product.category}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-forest">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-black/60">{product.subtitle}</p>
            </div>
            <p className="text-sm font-semibold tracking-[0.22em] text-gold uppercase">
              {formatPrice(product.price)}
            </p>
          </div>
          <p className="text-sm leading-7 text-black/62">{product.description}</p>
        </div>
      </Link>
    </article>
  )
}
