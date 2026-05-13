import type { Category } from '../data/categories.js'
import { Link } from '@adonisjs/inertia/react'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="group relative overflow-hidden rounded-[2rem] bg-forest text-white shadow-[var(--shadow-soft)]"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="eyebrow !text-white/70">Univers Tozala</p>
        <h3 className="mt-3 font-display text-3xl">{category.name}</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">{category.description}</p>
      </div>
    </Link>
  )
}
