export type Category = {
  id: number
  name: 'Homme' | 'Femme' | 'Accessoires'
  slug: 'homme' | 'femme' | 'accessoires'
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
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Femme',
    slug: 'femme',
    description:
      'Des drapés couture, des matières lumineuses et une allure pensée pour révéler la présence.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Accessoires',
    slug: 'accessoires',
    description: 'Cuirs, bijoux d’atelier et détails précieux pour signer un style avec retenue.',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
]
