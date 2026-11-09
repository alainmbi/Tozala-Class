export type ProductCategory = 'Homme' | 'Femme' | 'Accessoires' | 'Enfant' | 'Medecin'
export type ProductCategorySlug = 'homme' | 'femme' | 'accessoires' | 'enfant' | 'medecin'

export type Product = {
  id: number
  name: string
  slug: string
  subtitle: string
  category: ProductCategory
  price: number
  description: string
  material: string
  sizes: string[]
  image: string
  gallery: string[]
  featured?: boolean
}

export const productCategorySlugMap: Record<ProductCategory, ProductCategorySlug> = {
  Homme: 'homme',
  Femme: 'femme',
  Accessoires: 'accessoires',
  Enfant: 'enfant',
  Medecin: 'medecin',
}

const hommeLooks = [
  [
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a5?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80',
  ],
]

const femmeLooks = [
  [
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
  ],
]

const accessoireLooks = [
  [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80',
  ],
]

const enfantLooks = [
  [
    'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80',
  ],
]

const medecinLooks = [
  [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1612531385441-8a2b506e0a0d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
  ],
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Costume Heritage Anthracite',
    slug: 'costume-heritage-anthracite',
    subtitle: 'Tailoring signature',
    category: 'Homme',
    price: 1280,
    description:
      'Une silhouette structurée pensée pour les grandes entrées, avec un tombé net et une main souple.',
    material: 'Laine super 120s et finitions satinées',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[0][0],
    gallery: hommeLooks[0],
    featured: true,
  },
  {
    id: 2,
    name: 'Blazer Minuit Signature',
    slug: 'blazer-minuit-signature',
    subtitle: 'Ligne cérémoniale',
    category: 'Homme',
    price: 890,
    description:
      "Un blazer à l'épaule franche pour les rendez-vous qui exigent présence, aplomb et raffinement.",
    material: 'Laine froide et revers en soie',
    sizes: ['48', '50', '52'],
    image: hommeLooks[1][0],
    gallery: hommeLooks[1],
  },
  {
    id: 3,
    name: 'Chemise Atelier Ivoire',
    slug: 'chemise-atelier-ivoire',
    subtitle: 'Essentiel couture',
    category: 'Homme',
    price: 240,
    description:
      'Une chemise précise et légère, pensée pour les superpositions raffinées et un usage quotidien premium.',
    material: 'Popeline de coton italien',
    sizes: ['S', 'M', 'L', 'XL'],
    image: hommeLooks[2][0],
    gallery: hommeLooks[2],
  },
  {
    id: 4,
    name: 'Veste Régent Bronze',
    slug: 'veste-regent-bronze',
    subtitle: 'Allure cérémonie',
    category: 'Homme',
    price: 970,
    description:
      'Une veste de soirée à la coupe nette, pensée pour donner de la présence sans surcharge.',
    material: 'Laine froide et satin de viscose',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[3][0],
    gallery: hommeLooks[3],
  },
  {
    id: 5,
    name: 'Pantalon Opéra Nuit',
    slug: 'pantalon-opera-nuit',
    subtitle: 'Base structurée',
    category: 'Homme',
    price: 310,
    description:
      'Un pantalon à la ligne sobre pour prolonger les silhouettes premium du matin au gala.',
    material: 'Laine technique et finitions main',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[4][0],
    gallery: hommeLooks[4],
  },
  {
    id: 6,
    name: 'Cape Salon Vert Empire',
    slug: 'cape-salon-vert-empire',
    subtitle: 'Édition atelier',
    category: 'Homme',
    price: 1460,
    description:
      'Une pièce forte pour les rendez-vous mode et les apparitions où la coupe devient manifeste.',
    material: 'Velours léger et doublure satin',
    sizes: ['M', 'L', 'XL'],
    image: hommeLooks[5][0],
    gallery: hommeLooks[5],
  },
  {
    id: 7,
    name: 'Robe Aura Émeraude',
    slug: 'robe-aura-emeraude',
    subtitle: 'Couture drapée',
    category: 'Femme',
    price: 1540,
    description:
      'Une robe de réception au drapé sculptural, pensée pour capter la lumière avec noblesse.',
    material: 'Crêpe de soie et doublure satin',
    sizes: ['36', '38', '40', '42'],
    image: femmeLooks[0][0],
    gallery: femmeLooks[0],
    featured: true,
  },
  {
    id: 8,
    name: 'Robe Héloïse Sable',
    slug: 'robe-heloise-sable',
    subtitle: 'Fluidité moderne',
    category: 'Femme',
    price: 720,
    description:
      'Une pièce fluide et sophistiquée, idéale pour les célébrations en journée et les réceptions intimes.',
    material: 'Viscose satinée et taille structurée',
    sizes: ['36', '38', '40', '42', '44'],
    image: femmeLooks[1][0],
    gallery: femmeLooks[1],
  },
  {
    id: 9,
    name: 'Robe Soprano Cassis',
    slug: 'robe-soprano-cassis',
    subtitle: 'Soirée couture',
    category: 'Femme',
    price: 1380,
    description:
      'Une silhouette cérémonielle qui allonge la ligne et signe une entrée spectaculaire.',
    material: 'Satin lourd et tulle souple',
    sizes: ['36', '38', '40', '42'],
    image: femmeLooks[2][0],
    gallery: femmeLooks[2],
  },
  {
    id: 10,
    name: 'Tailleur Muse Ivoire',
    slug: 'tailleur-muse-ivoire',
    subtitle: 'Présence éditoriale',
    category: 'Femme',
    price: 980,
    description:
      'Un tailleur lumineux pour les rendez-vous forts, les prises de parole et les cérémonies civiles.',
    material: 'Crêpe couture et doublure soyeuse',
    sizes: ['36', '38', '40', '42', '44'],
    image: femmeLooks[3][0],
    gallery: femmeLooks[3],
  },
  {
    id: 11,
    name: 'Blouse Lys Champagne',
    slug: 'blouse-lys-champagne',
    subtitle: 'Atelier quotidien',
    category: 'Femme',
    price: 280,
    description: 'Une blouse raffinée à mixer avec jupes, tailleurs et pantalons de réception.',
    material: 'Soie légère et poignets finis main',
    sizes: ['S', 'M', 'L'],
    image: femmeLooks[4][0],
    gallery: femmeLooks[4],
  },
  {
    id: 12,
    name: 'Jupe Riviera Noire',
    slug: 'jupe-riviera-noire',
    subtitle: 'Ligne couture',
    category: 'Femme',
    price: 410,
    description: 'Une jupe colonne précise et élégante pour un vestiaire minimaliste et premium.',
    material: 'Crêpe dense et zip invisible',
    sizes: ['36', '38', '40', '42'],
    image: femmeLooks[5][0],
    gallery: femmeLooks[5],
  },
  {
    id: 13,
    name: 'Sac Atelier Riviera',
    slug: 'sac-atelier-riviera',
    subtitle: 'Cuir pleine fleur',
    category: 'Accessoires',
    price: 560,
    description:
      "Un sac à main structuré, pensé comme une pièce d'architecture douce au service du quotidien.",
    material: 'Cuir pleine fleur et doublure suédée',
    sizes: ['Unique'],
    image: accessoireLooks[0][0],
    gallery: accessoireLooks[0],
    featured: true,
  },
  {
    id: 14,
    name: 'Derbies Cuir Opéra',
    slug: 'derbies-cuir-opera',
    subtitle: "Main de l'atelier",
    category: 'Accessoires',
    price: 410,
    description:
      'Des derbies à la patine profonde, avec une ligne fine pour accompagner les tenues de cérémonie.',
    material: 'Cuir glacé et semelle cousue',
    sizes: ['40', '41', '42', '43', '44'],
    image: accessoireLooks[1][0],
    gallery: accessoireLooks[1],
  },
  {
    id: 15,
    name: 'Étole Nocturne',
    slug: 'etole-nocturne',
    subtitle: 'Accessoire de réception',
    category: 'Accessoires',
    price: 180,
    description:
      'Une étole légère au tombé noble, parfaite pour les soirées et les silhouettes cérémonie.',
    material: 'Mousseline de soie',
    sizes: ['Unique'],
    image: accessoireLooks[2][0],
    gallery: accessoireLooks[2],
  },
  {
    id: 16,
    name: 'Collier Atelier Doré',
    slug: 'collier-atelier-dore',
    subtitle: 'Détail de signature',
    category: 'Accessoires',
    price: 220,
    description:
      'Un bijou discret pour ponctuer la silhouette et illuminer les compositions habillées.',
    material: 'Laiton doré et finitions miroir',
    sizes: ['Unique'],
    image: accessoireLooks[3][0],
    gallery: accessoireLooks[3],
  },
  {
    id: 17,
    name: 'Lunettes Maison Graphite',
    slug: 'lunettes-maison-graphite',
    subtitle: 'Ligne contemporaine',
    category: 'Accessoires',
    price: 260,
    description: 'Une monture structurée pour renforcer la présence avec une note très urbaine.',
    material: 'Acétate premium et verres fumés',
    sizes: ['Unique'],
    image: accessoireLooks[4][0],
    gallery: accessoireLooks[4],
  },
  {
    id: 18,
    name: 'Montre Empire Acier',
    slug: 'montre-empire-acier',
    subtitle: 'Allure précise',
    category: 'Accessoires',
    price: 520,
    description:
      "Une montre sobre et nette pour conclure le vestiaire avec une note d'autorité calme.",
    material: 'Acier brossé et bracelet cuir',
    sizes: ['Unique'],
    image: accessoireLooks[5][0],
    gallery: accessoireLooks[5],
  },
  {
    id: 19,
    name: 'Ensemble Junior Prestige',
    slug: 'ensemble-junior-prestige',
    subtitle: 'Cérémonie enfant',
    category: 'Enfant',
    price: 360,
    description:
      'Un ensemble pour enfant pensé pour les grands jours, avec confort et élégance maîtrisée.',
    material: 'Coton noble et doublure légère',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    image: enfantLooks[0][0],
    gallery: enfantLooks[0],
    featured: true,
  },
  {
    id: 20,
    name: 'Robe Mini Gala Rose',
    slug: 'robe-mini-gala-rose',
    subtitle: 'Fête couture',
    category: 'Enfant',
    price: 280,
    description:
      'Une robe de célébration douce et lumineuse pour les anniversaires et moments de famille.',
    material: 'Tulle souple et satin de coton',
    sizes: ['4 ans', '6 ans', '8 ans'],
    image: enfantLooks[1][0],
    gallery: enfantLooks[1],
  },
  {
    id: 21,
    name: 'Chemise Petit Atelier',
    slug: 'chemise-petit-atelier',
    subtitle: 'Vestiaire essentiel',
    category: 'Enfant',
    price: 120,
    description:
      'Une chemise enfant bien coupée pour les silhouettes sages et les événements à habiller.',
    material: 'Popeline de coton',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    image: enfantLooks[2][0],
    gallery: enfantLooks[2],
  },
  {
    id: 22,
    name: 'Manteau Courtoisie Bleu',
    slug: 'manteau-courtoisie-bleu',
    subtitle: 'Sortie de saison',
    category: 'Enfant',
    price: 430,
    description:
      "Un manteau chic et protecteur pour garder l'esprit couture même aux âges les plus jeunes.",
    material: 'Laine douce et doublure chaude',
    sizes: ['6 ans', '8 ans', '10 ans', '12 ans'],
    image: enfantLooks[3][0],
    gallery: enfantLooks[3],
  },
  {
    id: 23,
    name: 'Polo Petit Cercle',
    slug: 'polo-petit-cercle',
    subtitle: 'Style du quotidien',
    category: 'Enfant',
    price: 95,
    description: 'Une pièce confortable et nette pour les looks enfant premium du quotidien.',
    material: 'Maille coton premium',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    image: enfantLooks[4][0],
    gallery: enfantLooks[4],
  },
  {
    id: 24,
    name: 'Cape Mini Heritage',
    slug: 'cape-mini-heritage',
    subtitle: 'Édition cérémonie',
    category: 'Enfant',
    price: 310,
    description:
      'Une silhouette enfantine à fort impact visuel pour les occasions où tout se joue dans le détail.',
    material: 'Velours souple et doublure satin',
    sizes: ['6 ans', '8 ans', '10 ans'],
    image: enfantLooks[5][0],
    gallery: enfantLooks[5],
  },
  {
    id: 25,
    name: 'Blouse Médecin Signature',
    slug: 'blouse-medecin-signature',
    subtitle: 'Présence clinique',
    category: 'Medecin',
    price: 210,
    description:
      'Une blouse professionnelle repensée avec des lignes nettes, une tenue parfaite et un confort durable.',
    material: 'Coton technique respirant',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[0][0],
    gallery: medecinLooks[0],
    featured: true,
  },
  {
    id: 26,
    name: 'Scrub Atelier Céladon',
    slug: 'scrub-atelier-celadon',
    subtitle: 'Confort en service',
    category: 'Medecin',
    price: 145,
    description:
      'Un ensemble médical soigné pour allier aisance, hygiène visuelle et identité professionnelle.',
    material: 'Microfibre stretch',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[1][0],
    gallery: medecinLooks[1],
  },
  {
    id: 27,
    name: 'Tunique Bloc Premium',
    slug: 'tunique-bloc-premium',
    subtitle: 'Ligne opérative',
    category: 'Medecin',
    price: 165,
    description:
      'Une tunique épurée qui garde une allure impeccable du premier patient au dernier rendez-vous.',
    material: 'Textile anti-froissage',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[2][0],
    gallery: medecinLooks[2],
  },
  {
    id: 28,
    name: 'Pantalon Clinique Noble',
    slug: 'pantalon-clinique-noble',
    subtitle: 'Mouvement fluide',
    category: 'Medecin',
    price: 110,
    description:
      'Un pantalon médical souple et bien construit pour accompagner les longues journées avec élégance.',
    material: 'Poly-coton stretch',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[3][0],
    gallery: medecinLooks[3],
  },
  {
    id: 29,
    name: 'Veste Consultation Ivoire',
    slug: 'veste-consultation-ivoire',
    subtitle: 'Atelier santé',
    category: 'Medecin',
    price: 240,
    description:
      'Une veste médicale claire et précise pour les environnements qui exigent tenue et autorité sereine.',
    material: 'Gabardine légère et doublure respirante',
    sizes: ['S', 'M', 'L', 'XL'],
    image: medecinLooks[4][0],
    gallery: medecinLooks[4],
  },
  {
    id: 30,
    name: 'Ensemble Garde Atelier',
    slug: 'ensemble-garde-atelier',
    subtitle: 'Édition atelier santé',
    category: 'Medecin',
    price: 195,
    description:
      'Une composition médicale complète pour les équipes qui veulent une image nette, fiable et actuelle.',
    material: 'Textile lavable haute fréquence',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[5][0],
    gallery: medecinLooks[5],
  },
]
