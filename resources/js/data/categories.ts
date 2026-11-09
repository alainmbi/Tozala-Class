import type { ProductCategory, ProductCategorySlug } from './products.js'

export type Category = {
  id: number
  name: ProductCategory
  slug: ProductCategorySlug
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Homme',
    slug: 'homme',
    description:
      'Vestiaires sculptés, coupes nettes et élégance contemporaine pour les silhouettes qui commandent la pièce.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Femme',
    slug: 'femme',
    description:
      'Des drapés couture, des matières lumineuses et une allure pensée pour révéler la présence.',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Accessoires',
    slug: 'accessoires',
    description: "Cuirs, bijoux d'atelier et détails précieux pour signer un style avec retenue.",
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Enfant',
    slug: 'enfant',
    description:
      "Des silhouettes enfant premium pour les moments de fête, les cortèges et l'élégance en famille.",
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Medecin',
    slug: 'medecin',
    description:
      'Une ligne médicale contemporaine pour unir confort, présence professionnelle et finition nette.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },
]
