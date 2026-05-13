import { Head, Link, usePage } from '@inertiajs/react'
import { useEffect, useMemo, useState } from 'react'
import { products } from '../data/products.js'
import { formatPrice } from '../lib/format.js'
import type { PageComponent } from '../lib/inertia.js'

type CheckoutItem = {
  productId: number
  quantity: number
}

type ServiceCheckoutSummary = {
  serviceSlug: string
  serviceName: string
  serviceItem: string
  servicePrice: number
  servicePriceLabel: string
  commune: string
  nearestPressing: string
  paymentOption: string
}

type PaymentMethod = 'delivery' | 'digital'
type DigitalPaymentMode = 'mobile' | 'card'
type MobileProvider = 'mpesa' | 'airtel' | 'africell' | 'orange'
type CardProvider = 'visa' | 'gpay' | 'paystore'

const defaultCheckoutItems: CheckoutItem[] = [
  { productId: 1, quantity: 1 },
  { productId: 14, quantity: 1 },
]

function getCheckoutItemsFromUrl(url: string): CheckoutItem[] {
  const params = new URLSearchParams(url.split('?')[1] ?? '')
  const productId = Number(params.get('productId'))
  const quantity = Math.max(1, Number(params.get('quantity') ?? '1'))

  if (!Number.isNaN(productId) && productId > 0) {
    return [{ productId, quantity }]
  }

  return defaultCheckoutItems
}

function getServiceCheckoutFromUrl(url: string): ServiceCheckoutSummary | null {
  const params = new URLSearchParams(url.split('?')[1] ?? '')

  if (params.get('checkoutMode') !== 'service') {
    return null
  }

  const serviceName = params.get('serviceName')
  const serviceItem = params.get('serviceItem')
  const servicePriceLabel = params.get('servicePrice')

  if (!serviceName || !serviceItem || !servicePriceLabel) {
    return null
  }

  const parsedPrice = Number(servicePriceLabel.replace(/[^0-9.]/g, ''))

  return {
    serviceSlug: params.get('serviceSlug') ?? 'pressing',
    serviceName,
    serviceItem,
    servicePrice: Number.isFinite(parsedPrice) ? parsedPrice : 0,
    servicePriceLabel,
    commune: params.get('commune') ?? '',
    nearestPressing: params.get('nearestPressing') ?? '',
    paymentOption: params.get('paymentOption') ?? 'mobile-money',
  }
}

const CheckoutPage: PageComponent = () => {
  const page = usePage()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('digital')
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [digitalPaymentMode, setDigitalPaymentMode] = useState<DigitalPaymentMode>('mobile')
  const [mobileProvider, setMobileProvider] = useState<MobileProvider>('mpesa')
  const [cardProvider, setCardProvider] = useState<CardProvider>('visa')
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [serviceCheckout, setServiceCheckout] = useState<ServiceCheckoutSummary | null>(() =>
    getServiceCheckoutFromUrl(page.url)
  )
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>(() =>
    getCheckoutItemsFromUrl(page.url)
  )

  useEffect(() => {
    setCheckoutItems(getCheckoutItemsFromUrl(page.url))
    setServiceCheckout(getServiceCheckoutFromUrl(page.url))
  }, [page.url])

  useEffect(() => {
    if (!serviceCheckout) {
      return
    }

    setPaymentMethod('digital')
    setDigitalPaymentMode(serviceCheckout.paymentOption === 'card-virement' ? 'card' : 'mobile')
  }, [serviceCheckout])

  const selectedProducts = useMemo(
    () =>
      checkoutItems
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId)

          if (!product) {
            return null
          }

          return {
            product,
            quantity: item.quantity,
            lineTotal: product.price * item.quantity,
          }
        })
        .filter((item): item is NonNullable<typeof item> => item !== null),
    [checkoutItems]
  )

  const subtotal = serviceCheckout
    ? serviceCheckout.servicePrice
    : selectedProducts.reduce((sum, item) => sum + item.lineTotal, 0)
  const shipping = serviceCheckout ? 0 : selectedProducts.length > 0 ? 35 : 0
  const total = subtotal + shipping
  const buttonLabel = serviceCheckout
    ? 'PAYER LE SERVICE EN SECURITE'
    : paymentMethod === 'delivery'
      ? 'PASSER LA COMMANDE EN SECURITE'
      : 'PAYER EN SECURITE'

  function updateQuantity(productId: number, direction: 'increase' | 'decrease') {
    setCheckoutItems((items) =>
      items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity:
                direction === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  function handlePrimaryAction() {
    if (serviceCheckout) {
      setFeedbackMessage('')
      setPaymentModalOpen(true)
      return
    }

    if (paymentMethod === 'delivery') {
      setPaymentModalOpen(false)
      setFeedbackMessage(
        "Commande preparee. L'atelier confirmera la livraison ou la mise a disposition en boutique."
      )
      return
    }

    setFeedbackMessage('')
    setPaymentModalOpen(true)
  }

  function confirmMobilePayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Connecter ici le futur prestataire de paiement mobile depuis AdonisJS.
    setFeedbackMessage(
      serviceCheckout
        ? `Paiement ${mobileProvider.toUpperCase()} prepare pour ${serviceCheckout.serviceItem}. Une integration reelle pourra etre branchee plus tard sans changer l'interface.`
        : `Demande ${mobileProvider.toUpperCase()} preparee. Une integration reelle pourra etre branchee plus tard sans changer l'interface.`
    )
    setPaymentModalOpen(false)
  }

  function confirmCardPayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Brancher ici une vraie passerelle de paiement carte ou wallet.
    setFeedbackMessage(
      serviceCheckout
        ? `Confirmation ${cardProvider.toUpperCase()} simulee pour ${serviceCheckout.serviceItem}. Aucune donnee n'est envoyee a ce stade.`
        : `Confirmation ${cardProvider.toUpperCase()} simulee. Aucune donnee n'est envoyee a ce stade.`
    )
    setPaymentModalOpen(false)
  }

  return (
    <>
      <Head title="Checkout" />

      <section className="section-space pt-10">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="card-surface p-8 sm:p-10">
              <p className="eyebrow">
                {serviceCheckout ? 'Payer un service' : 'Passer a la caisse'}
              </p>
              <h1 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
                {serviceCheckout
                  ? 'Finaliser votre reservation pressing.'
                  : 'Finaliser votre selection.'}
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
                  <input className="field" type="tel" placeholder="Telephone" />
                </section>

                <section className="grid gap-4">
                  <h2 className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                    {serviceCheckout ? '02. Localisation' : '02. Adresse de livraison'}
                  </h2>
                  {serviceCheckout ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className="field"
                        type="text"
                        defaultValue={serviceCheckout.commune}
                        placeholder="Commune"
                      />
                      <input
                        className="field"
                        type="text"
                        defaultValue={serviceCheckout.nearestPressing}
                        placeholder="Pressing le plus proche"
                      />
                    </div>
                  ) : (
                    <>
                      <input className="field" type="text" placeholder="Adresse" />
                      <div className="grid gap-4 md:grid-cols-3">
                        <input className="field" type="text" placeholder="Ville" />
                        <input className="field" type="text" placeholder="Commune" />
                        <input className="field" type="text" placeholder="Code postal" />
                      </div>
                    </>
                  )}
                </section>

                <section className="grid gap-4">
                  <h2 className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                    03. Methode de paiement
                  </h2>
                  {serviceCheckout ? (
                    <div className="rounded-[1.5rem] border border-gold/20 bg-gold/8 p-4 text-sm leading-7 text-forest">
                      Paiement en ligne requis pour ce pressing. Le mode choisi lors de la
                      reservation est{' '}
                      <span className="font-semibold">
                        {serviceCheckout.paymentOption === 'card-virement'
                          ? 'Carte / virement'
                          : 'Mobile Money'}
                      </span>
                      .
                    </div>
                  ) : (
                    <>
                      <label className="flex items-center gap-3 rounded-[1.5rem] border border-black/8 p-4">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'delivery'}
                          onChange={() => setPaymentMethod('delivery')}
                        />
                        <span className="text-sm text-black/70">
                          Paiement a la livraison ou en boutique
                        </span>
                      </label>
                      <label className="flex items-center gap-3 rounded-[1.5rem] border border-black/8 p-4">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'digital'}
                          onChange={() => setPaymentMethod('digital')}
                        />
                        <span className="text-sm text-black/70">
                          Mobile money ou virement confirme par l'atelier
                        </span>
                      </label>
                    </>
                  )}
                </section>

                {feedbackMessage ? (
                  <div className="rounded-[1.5rem] border border-gold/25 bg-gold/8 px-5 py-4 text-sm leading-7 text-forest">
                    {feedbackMessage}
                  </div>
                ) : null}

                <button type="button" className="btn-primary" onClick={handlePrimaryAction}>
                  {buttonLabel}
                </button>
              </form>
            </div>

            <aside className="card-surface h-fit p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Votre choix</p>
                  <h2 className="mt-3 font-display text-3xl text-forest">
                    {serviceCheckout ? 'Resume du service' : 'Resume de commande'}
                  </h2>
                </div>
                <Link
                  href={
                    serviceCheckout
                      ? `/services/reservation?service=${serviceCheckout.serviceSlug}`
                      : '/shop'
                  }
                  className="text-xs font-semibold tracking-[0.22em] text-gold uppercase"
                >
                  Modifier
                </Link>
              </div>

              <div className="mt-8 space-y-5">
                {serviceCheckout ? (
                  <div className="rounded-[1.75rem] bg-ivory p-5">
                    <p className="font-display text-2xl text-forest">
                      {serviceCheckout.serviceName}
                    </p>
                    <p className="mt-3 text-sm text-black/62">{serviceCheckout.serviceItem}</p>
                    <div className="mt-5 grid gap-3 text-sm text-black/68">
                      <div className="flex items-center justify-between rounded-[1.2rem] bg-white px-4 py-3">
                        <span>Commune</span>
                        <span className="font-semibold text-forest">{serviceCheckout.commune}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-[1.2rem] bg-white px-4 py-3">
                        <span>Pressing</span>
                        <span className="font-semibold text-forest">
                          {serviceCheckout.nearestPressing}
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-[1.2rem] bg-white px-4 py-3">
                        <span>Tarif</span>
                        <span className="font-semibold uppercase tracking-[0.14em] text-gold">
                          {serviceCheckout.servicePriceLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  selectedProducts.map(({ product, quantity, lineTotal }) => (
                    <div key={product.id} className="rounded-[1.75rem] bg-ivory p-4">
                      <div className="flex gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-24 w-20 rounded-[1.25rem] object-cover"
                        />
                        <div className="flex flex-1 items-start justify-between gap-4">
                          <div>
                            <p className="font-display text-xl text-forest">{product.name}</p>
                            <p className="mt-2 text-sm text-black/60">{product.subtitle}</p>
                            <div className="mt-4 inline-flex items-center rounded-full border border-black/8 bg-white p-1">
                              <button
                                type="button"
                                className="h-9 w-9 rounded-full text-lg text-forest"
                                onClick={() => updateQuantity(product.id, 'decrease')}
                              >
                                -
                              </button>
                              <span className="min-w-10 text-center text-sm font-semibold">
                                {quantity}
                              </span>
                              <button
                                type="button"
                                className="h-9 w-9 rounded-full text-lg text-forest"
                                onClick={() => updateQuantity(product.id, 'increase')}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold tracking-[0.22em] text-forest uppercase">
                              {formatPrice(product.price)}
                            </p>
                            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                              Total article
                            </p>
                            <p className="mt-1 font-display text-2xl text-forest">
                              {formatPrice(lineTotal)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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

      {paymentModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-[2rem] bg-[#F7F4EF] p-4 sm:p-6">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Paiement dynamique</p>
                  <h2 className="mt-3 font-display text-4xl text-forest">
                    Choisissez votre mode de paiement
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="btn-secondary !px-4 !py-2"
                >
                  Fermer
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: 'Mobile Money', value: 'mobile' as const },
                  { label: 'Virement / Carte', value: 'card' as const },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setDigitalPaymentMode(option.value)}
                    className={[
                      'rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition',
                      digitalPaymentMode === option.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-black/10 bg-white text-forest',
                    ].join(' ')}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {digitalPaymentMode === 'mobile' ? (
                <form className="mt-8 grid gap-6" onSubmit={confirmMobilePayment}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Mobile Money
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { label: 'M-Pesa', value: 'mpesa' as const },
                        { label: 'Airtel Money', value: 'airtel' as const },
                        { label: 'Africell Money', value: 'africell' as const },
                        { label: 'Orange Money', value: 'orange' as const },
                      ].map((provider) => (
                        <button
                          key={provider.value}
                          type="button"
                          onClick={() => setMobileProvider(provider.value)}
                          className={[
                            'rounded-[1.35rem] border px-4 py-4 text-left text-sm font-semibold transition',
                            mobileProvider === provider.value
                              ? 'border-gold bg-gold/10 text-forest'
                              : 'border-black/8 bg-[#F7F4EF] text-black/70',
                          ].join(' ')}
                        >
                          {provider.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input className="field" type="tel" placeholder="Numero de telephone" />
                    <input className="field" type="text" placeholder="Nom complet" />
                  </div>

                  <button type="submit" className="btn-primary">
                    Confirmer le paiement mobile
                  </button>
                </form>
              ) : (
                <form className="mt-8 grid gap-6" onSubmit={confirmCardPayment}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Virement / Carte
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        { label: 'Visa', value: 'visa' as const },
                        { label: 'Google Pay', value: 'gpay' as const },
                        { label: 'Pay Store', value: 'paystore' as const },
                      ].map((provider) => (
                        <button
                          key={provider.value}
                          type="button"
                          onClick={() => setCardProvider(provider.value)}
                          className={[
                            'rounded-[1.35rem] border px-4 py-4 text-left text-sm font-semibold transition',
                            cardProvider === provider.value
                              ? 'border-gold bg-gold/10 text-forest'
                              : 'border-black/8 bg-[#F7F4EF] text-black/70',
                          ].join(' ')}
                        >
                          {provider.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      className="field md:col-span-2"
                      type="text"
                      placeholder="Numero de carte"
                    />
                    <input className="field" type="text" placeholder="Nom sur la carte" />
                    <div className="grid grid-cols-2 gap-4">
                      <input className="field" type="text" placeholder="MM/AA" />
                      <input className="field" type="text" placeholder="CVV" />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary">
                    Confirmer le paiement par carte
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CheckoutPage
