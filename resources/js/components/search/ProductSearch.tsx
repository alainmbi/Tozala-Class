import { Link } from '@adonisjs/inertia/react'
import { useEffect, useMemo, useState } from 'react'
import { products } from '../../data/products.js'
import { formatPrice } from '../../lib/format.js'

type ProductSearchProps = {
  open: boolean
  onClose: () => void
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
    </svg>
  )
}

export function ProductSearch({ open, onClose }: ProductSearchProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  const trimmedQuery = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!trimmedQuery) {
      return products.slice(0, 5)
    }

    return products.filter((product) =>
      [product.name, product.category, product.description, product.subtitle]
        .join(' ')
        .toLowerCase()
        .includes(trimmedQuery)
    )
  }, [trimmedQuery])

  if (!open) {
    return null
  }

  return (
    <div className="border-t border-black/6 bg-ivory/95 py-5 backdrop-blur">
      <div className="shell">
        <div className="rounded-[2rem] border border-black/6 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Recherche TozalaClass
              </p>
              <input
                type="text"
                value={query}
                onChange={(event) =>
                  setQuery((event as unknown as { target: { value: string } }).target.value)
                }
                placeholder="Rechercher un article, une categorie ou une description..."
                className="field mt-3"
                autoFocus
              />
            </div>
            <button type="button" onClick={onClose} className="btn-secondary !px-4 !py-3">
              <span className="mr-2">
                <CloseIcon />
              </span>
              Fermer
            </button>
          </div>

          <div className="mt-6 grid gap-4">
            {results.length > 0 ? (
              results.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex flex-col gap-4 rounded-[1.5rem] border border-black/6 bg-ivory/70 p-4 transition hover:border-gold/35 hover:bg-white sm:flex-row"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-full rounded-[1.25rem] object-cover sm:w-24"
                  />
                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                        {product.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-forest">{product.name}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-black/65">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-black/10 bg-ivory/60 px-5 py-6 text-sm text-black/60">
                Aucun article trouve
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
