import { products, productCategorySlugMap, type ProductCategorySlug } from './products.js'

export type ShopGalleryCategory = 'all' | ProductCategorySlug

export type ShopGalleryItem = {
  id: number
  title: string
  category: ProductCategorySlug
  image: string
  alt: string
}

export const shopGalleryItems: ShopGalleryItem[] = products.map((product) => ({
  id: product.id,
  title: product.name,
  category: productCategorySlugMap[product.category],
  image: product.image,
  alt: `${product.name} TozalaClass`,
}))
