export type Product = {
  id: number
  name: string
  slug: string
  subtitle: string
  category: 'Homme' | 'Femme' | 'Accessoires'
  price: number
  description: string
  material: string
  sizes: string[]
  image: string
  gallery: string[]
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Costume Héritage Anthracite',
    slug: 'costume-heritage-anthracite',
    subtitle: 'Tailoring signature',
    category: 'Homme',
    price: 1280,
    description:
      'Une silhouette structurée pensée pour les grandes entrées, avec un tombé net et une main souple.',
    material: 'Laine super 120s et finitions satinées',
    sizes: ['48', '50', '52', '54'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 2,
    name: 'Robe Aura Émeraude',
    slug: 'robe-aura-emeraude',
    subtitle: 'Couture drapée',
    category: 'Femme',
    price: 1540,
    description:
      'Une robe de réception au drapé sculptural, pensée pour capter la lumière avec noblesse.',
    material: 'Crêpe de soie et doublure satin',
    sizes: ['36', '38', '40', '42'],
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'Blazer Minuit Signature',
    slug: 'blazer-minuit-signature',
    subtitle: 'Ligne cérémoniale',
    category: 'Homme',
    price: 890,
    description:
      'Un blazer à l’épaule franche pour les rendez-vous qui exigent présence, aplomb et raffinement.',
    material: 'Laine froide et revers en soie',
    sizes: ['48', '50', '52'],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a5?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 4,
    name: 'Chemise Atelier Ivoire',
    slug: 'chemise-atelier-ivoire',
    subtitle: 'Essentiel couture',
    category: 'Homme',
    price: 240,
    description:
      'Une chemise précise et légère, pensée pour les superpositions raffinées et l’usage quotidien premium.',
    material: 'Popeline de coton italien',
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 5,
    name: 'Robe Héloïse Sable',
    slug: 'robe-heloise-sable',
    subtitle: 'Fluidité moderne',
    category: 'Femme',
    price: 720,
    description:
      'Une pièce fluide et sophistiquée, idéale pour les célébrations en journée et les réceptions intimes.',
    material: 'Viscose satinée et taille structurée',
    sizes: ['36', '38', '40', '42', '44'],
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 6,
    name: 'Sac Atelier Riviera',
    slug: 'sac-atelier-riviera',
    subtitle: 'Cuir pleine fleur',
    category: 'Accessoires',
    price: 560,
    description:
      'Un sac à main structuré, pensé comme une pièce d’architecture douce au service du quotidien.',
    material: 'Cuir pleine fleur et doublure suédée',
    sizes: ['Unique'],
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 7,
    name: 'Derbies Cuir Opéra',
    slug: 'derbies-cuir-opera',
    subtitle: 'Main de l’atelier',
    category: 'Accessoires',
    price: 410,
    description:
      'Des derbies à la patine profonde, avec une ligne fine pour accompagner les tenues de cérémonie.',
    material: 'Cuir glacé et semelle cousue',
    sizes: ['40', '41', '42', '43', '44'],
    image:
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 8,
    name: 'Étole Nocturne',
    slug: 'etole-nocturne',
    subtitle: 'Accessoire de réception',
    category: 'Accessoires',
    price: 180,
    description:
      'Une étole légère au tombé noble, parfaite pour les soirées et les silhouettes cérémonie.',
    material: 'Mousseline de soie',
    sizes: ['Unique'],
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]
