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
      'Une silhouette structuree pensee pour les grandes entrees, avec un tombe net et une main souple.',
    material: 'Laine super 120s et finitions satinees',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[0][0],
    gallery: hommeLooks[0],
    featured: true,
  },
  {
    id: 2,
    name: 'Blazer Minuit Signature',
    slug: 'blazer-minuit-signature',
    subtitle: 'Ligne ceremoniale',
    category: 'Homme',
    price: 890,
    description:
      "Un blazer a l'epaule franche pour les rendez-vous qui exigent presence, aplomb et raffinement.",
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
      'Une chemise precise et legere, pensee pour les superpositions raffinees et un usage quotidien premium.',
    material: 'Popeline de coton italien',
    sizes: ['S', 'M', 'L', 'XL'],
    image: hommeLooks[2][0],
    gallery: hommeLooks[2],
  },
  {
    id: 4,
    name: 'Veste Regent Bronze',
    slug: 'veste-regent-bronze',
    subtitle: 'Allure ceremonie',
    category: 'Homme',
    price: 970,
    description:
      'Une veste de soiree a la coupe nette, pensee pour donner de la presence sans surcharge.',
    material: 'Laine froide et satin de viscose',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[3][0],
    gallery: hommeLooks[3],
  },
  {
    id: 5,
    name: 'Pantalon Opera Nuit',
    slug: 'pantalon-opera-nuit',
    subtitle: 'Base structuree',
    category: 'Homme',
    price: 310,
    description:
      'Un pantalon a la ligne sobre pour prolonger les silhouettes premium du matin au gala.',
    material: 'Laine technique et finitions main',
    sizes: ['48', '50', '52', '54'],
    image: hommeLooks[4][0],
    gallery: hommeLooks[4],
  },
  {
    id: 6,
    name: 'Cape Salon Vert Empire',
    slug: 'cape-salon-vert-empire',
    subtitle: 'Edition atelier',
    category: 'Homme',
    price: 1460,
    description:
      'Une piece forte pour les rendez-vous mode et les apparitions ou la coupe devient manifeste.',
    material: 'Velours leger et doublure satin',
    sizes: ['M', 'L', 'XL'],
    image: hommeLooks[5][0],
    gallery: hommeLooks[5],
  },
  {
    id: 7,
    name: 'Robe Aura Emeraude',
    slug: 'robe-aura-emeraude',
    subtitle: 'Couture drapee',
    category: 'Femme',
    price: 1540,
    description:
      'Une robe de reception au drape sculptural, pensee pour capter la lumiere avec noblesse.',
    material: 'Crepe de soie et doublure satin',
    sizes: ['36', '38', '40', '42'],
    image: femmeLooks[0][0],
    gallery: femmeLooks[0],
    featured: true,
  },
  {
    id: 8,
    name: 'Robe Heloise Sable',
    slug: 'robe-heloise-sable',
    subtitle: 'Fluidite moderne',
    category: 'Femme',
    price: 720,
    description:
      'Une piece fluide et sophistiquee, ideale pour les celebrations en journee et les receptions intimes.',
    material: 'Viscose satinee et taille structuree',
    sizes: ['36', '38', '40', '42', '44'],
    image: femmeLooks[1][0],
    gallery: femmeLooks[1],
  },
  {
    id: 9,
    name: 'Robe Soprano Cassis',
    slug: 'robe-soprano-cassis',
    subtitle: 'Soiree couture',
    category: 'Femme',
    price: 1380,
    description:
      'Une silhouette ceremonielle qui allonge la ligne et signe une entree spectaculaire.',
    material: 'Satin lourd et tulle souple',
    sizes: ['36', '38', '40', '42'],
    image: femmeLooks[2][0],
    gallery: femmeLooks[2],
  },
  {
    id: 10,
    name: 'Tailleur Muse Ivoire',
    slug: 'tailleur-muse-ivoire',
    subtitle: 'Presence editoriale',
    category: 'Femme',
    price: 980,
    description:
      'Un tailleur lumineux pour les rendez-vous forts, les prises de parole et les ceremonies civiles.',
    material: 'Crepe couture et doublure soyee',
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
    description: 'Une blouse refinee a mixer avec jupes, tailleurs et pantalons de reception.',
    material: 'Soie legere et poignets finis main',
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
    description: 'Une jupe colonne precise et elegante pour un vestiaire minimaliste et premium.',
    material: 'Crepe dense et zip invisible',
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
      "Un sac a main structure, pense comme une piece d'architecture douce au service du quotidien.",
    material: 'Cuir pleine fleur et doublure suedee',
    sizes: ['Unique'],
    image: accessoireLooks[0][0],
    gallery: accessoireLooks[0],
    featured: true,
  },
  {
    id: 14,
    name: 'Derbies Cuir Opera',
    slug: 'derbies-cuir-opera',
    subtitle: "Main de l'atelier",
    category: 'Accessoires',
    price: 410,
    description:
      'Des derbies a la patine profonde, avec une ligne fine pour accompagner les tenues de ceremonie.',
    material: 'Cuir glace et semelle cousue',
    sizes: ['40', '41', '42', '43', '44'],
    image: accessoireLooks[1][0],
    gallery: accessoireLooks[1],
  },
  {
    id: 15,
    name: 'Etole Nocturne',
    slug: 'etole-nocturne',
    subtitle: 'Accessoire de reception',
    category: 'Accessoires',
    price: 180,
    description:
      'Une etole legere au tombe noble, parfaite pour les soirees et les silhouettes ceremonie.',
    material: 'Mousseline de soie',
    sizes: ['Unique'],
    image: accessoireLooks[2][0],
    gallery: accessoireLooks[2],
  },
  {
    id: 16,
    name: 'Collier Atelier Dore',
    slug: 'collier-atelier-dore',
    subtitle: 'Detail de signature',
    category: 'Accessoires',
    price: 220,
    description:
      'Un bijou discret pour ponctuer la silhouette et illuminer les compositions habillees.',
    material: 'Laiton dore et finitions miroir',
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
    description: 'Une monture structuree pour renforcer la presence avec une note tres urbaine.',
    material: 'Acetate premium et verres fumés',
    sizes: ['Unique'],
    image: accessoireLooks[4][0],
    gallery: accessoireLooks[4],
  },
  {
    id: 18,
    name: 'Montre Empire Acier',
    slug: 'montre-empire-acier',
    subtitle: 'Allure precise',
    category: 'Accessoires',
    price: 520,
    description:
      "Une montre sobre et nette pour conclure le vestiaire avec une note d'autorite calme.",
    material: 'Acier brosse et bracelet cuir',
    sizes: ['Unique'],
    image: accessoireLooks[5][0],
    gallery: accessoireLooks[5],
  },
  {
    id: 19,
    name: 'Ensemble Junior Prestige',
    slug: 'ensemble-junior-prestige',
    subtitle: 'Ceremonie enfant',
    category: 'Enfant',
    price: 360,
    description:
      'Un ensemble pour enfant pense pour les grands jours, avec confort et elegance maitrisee.',
    material: 'Coton noble et doublure legere',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    image: enfantLooks[0][0],
    gallery: enfantLooks[0],
    featured: true,
  },
  {
    id: 20,
    name: 'Robe Mini Gala Rose',
    slug: 'robe-mini-gala-rose',
    subtitle: 'Fete couture',
    category: 'Enfant',
    price: 280,
    description:
      'Une robe de celebration douce et lumineuse pour les anniversaires et moments de famille.',
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
      'Une chemise enfant bien coupee pour les silhouettes sages et les evenements a habiller.',
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
      'Un manteau chic et protecteur pour garder l esprit couture meme aux ages les plus jeunes.',
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
    description: 'Une piece confortable et nette pour les looks enfant premium du quotidien.',
    material: 'Maille coton premium',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    image: enfantLooks[4][0],
    gallery: enfantLooks[4],
  },
  {
    id: 24,
    name: 'Cape Mini Heritage',
    slug: 'cape-mini-heritage',
    subtitle: 'Edition ceremonie',
    category: 'Enfant',
    price: 310,
    description:
      'Une silhouette enfantine a fort impact visuel pour les occasions ou tout se joue dans le detail.',
    material: 'Velours souple et doublure satin',
    sizes: ['6 ans', '8 ans', '10 ans'],
    image: enfantLooks[5][0],
    gallery: enfantLooks[5],
  },
  {
    id: 25,
    name: 'Blouse Medecin Signature',
    slug: 'blouse-medecin-signature',
    subtitle: 'Presence clinique',
    category: 'Medecin',
    price: 210,
    description:
      'Une blouse professionnelle repensee avec des lignes nettes, une tenue parfaite et un confort durable.',
    material: 'Coton technique respirant',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[0][0],
    gallery: medecinLooks[0],
    featured: true,
  },
  {
    id: 26,
    name: 'Scrub Atelier Celadon',
    slug: 'scrub-atelier-celadon',
    subtitle: 'Confort en service',
    category: 'Medecin',
    price: 145,
    description:
      'Un ensemble medical soigne pour allier aisance, hygiene visuelle et identite professionnelle.',
    material: 'Microfibre stretch',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[1][0],
    gallery: medecinLooks[1],
  },
  {
    id: 27,
    name: 'Tunique Bloc Premium',
    slug: 'tunique-bloc-premium',
    subtitle: 'Ligne operative',
    category: 'Medecin',
    price: 165,
    description:
      'Une tunique epuree qui garde une allure impeccable du premier patient au dernier rendez-vous.',
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
      'Un pantalon medical souple et bien construit pour accompagner les longues journees avec elegance.',
    material: 'Poly-coton stretch',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[3][0],
    gallery: medecinLooks[3],
  },
  {
    id: 29,
    name: 'Veste Consultation Ivoire',
    slug: 'veste-consultation-ivoire',
    subtitle: 'Atelier sante',
    category: 'Medecin',
    price: 240,
    description:
      'Une veste medicale claire et precise pour les environnements qui exigent tenue et autorite sereine.',
    material: 'Gabardine legere et doublure respirante',
    sizes: ['S', 'M', 'L', 'XL'],
    image: medecinLooks[4][0],
    gallery: medecinLooks[4],
  },
  {
    id: 30,
    name: 'Ensemble Garde Atelier',
    slug: 'ensemble-garde-atelier',
    subtitle: 'Edition atelier sante',
    category: 'Medecin',
    price: 195,
    description:
      'Une composition medicale complete pour les equipes qui veulent une image nette, fiable et actuelle.',
    material: 'Textile lavable haute frequence',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: medecinLooks[5][0],
    gallery: medecinLooks[5],
  },
]
