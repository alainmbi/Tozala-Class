import { Head, Link } from '@inertiajs/react'
import { products } from '../data/products.js'
import { formatPrice } from '../lib/format.js'
import type { PageComponent } from '../lib/inertia.js'

const checkoutProducts = [products[0], products[6]]
const subtotal = checkoutProducts.reduce((sum, product) => sum + product.price, 0)
const shipping = 35
const total = subtotal + shipping

const CheckoutPage: PageComponent = () => {
  return (
    <>
      <Head title="Checkout" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="card-surface p-8 sm:p-10">
              <p className="eyebrow">Passer à la caisse</p>
              <h1 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
                Finaliser votre sélection.
              </h1>

              <form className="mt-10 grid gap-8">
                <section className="grid gap-4">
                  <h2 className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                    01. Contact information
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input className="field" type="text" placeholder="Nom complet" />
                    <input className="field" type="email" placeholder="Adresse email" />
                  </div>
                  <input className="field" type="tel" placeholder="Téléphone" />
                </section>

                <section className="grid gap-4">
                  <h2 className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                    02. Adresse de livraison
                  </h2>
                  <input className="field" type="text" placeholder="Adresse" />
                  <div className="grid gap-4 md:grid-cols-3">
                    <input className="field" type="text" placeholder="Ville" />
                    <input className="field" type="text" placeholder="Commune" />
                    <input className="field" type="text" placeholder="Code postal" />
                  </div>
                </section>

                <section className="grid gap-4">
                  <h2 className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                    03. Méthode de paiement
                  </h2>
                  <label className="flex items-center gap-3 rounded-[1.5rem] border border-black/8 p-4">
                    <input type="radio" name="payment" defaultChecked />
                    <span className="text-sm text-black/70">
                      Paiement à la livraison ou en boutique
                    </span>
                  </label>
                  <label className="flex items-center gap-3 rounded-[1.5rem] border border-black/8 p-4">
                    <input type="radio" name="payment" />
                    <span className="text-sm text-black/70">
                      Mobile money ou virement confirmé par l’atelier
                    </span>
                  </label>
                </section>

                <button type="button" className="btn-primary">
                  Payer en sécurité
                </button>
              </form>
            </div>

            <aside className="card-surface h-fit p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Votre choix</p>
                  <h2 className="mt-3 font-display text-3xl text-forest">Résumé de commande</h2>
                </div>
                <Link
                  href="/shop"
                  className="text-xs font-semibold tracking-[0.22em] text-gold uppercase"
                >
                  Modifier
                </Link>
              </div>

              <div className="mt-8 space-y-5">
                {checkoutProducts.map((product) => (
                  <div key={product.id} className="flex gap-4 rounded-[1.75rem] bg-ivory p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-20 rounded-[1.25rem] object-cover"
                    />
                    <div className="flex flex-1 items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-xl text-forest">{product.name}</p>
                        <p className="mt-2 text-sm text-black/60">{product.subtitle}</p>
                        <p className="mt-3 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                          Quantité 1
                        </p>
                      </div>
                      <p className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-black/6 pt-6 text-sm text-black/65">
                <div className="flex items-center justify-between">
                  <span>Sous-total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Livraison</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-base font-semibold text-forest">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckoutPage
