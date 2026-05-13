import { products } from '../data/products.js'

export function getProductById(id: number) {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(category: string, productId: number) {
  return products
    .filter((product) => product.category === category && product.id !== productId)
    .slice(0, 4)
}
