export function formatPrice(amount: number, currency: 'USD' | 'EUR' = 'USD') {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
