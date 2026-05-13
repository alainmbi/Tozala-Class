export type ShopGalleryCategory = 'all' | 'homme' | 'femme' | 'accessoires'

export type ShopGalleryItem = {
  id: number
  title: string
  category: Exclude<ShopGalleryCategory, 'all'>
  image: string
  alt: string
}

export const shopGalleryItems: ShopGalleryItem[] = [
  {
    id: 1,
    title: 'Costume vert signature',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
    alt: 'Costume homme elegant TozalaClass',
  },
  {
    id: 2,
    title: 'Blazer ceremonie minuit',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    alt: 'Blazer homme premium TozalaClass',
  },
  {
    id: 3,
    title: 'Chemise atelier ivoire',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
    alt: 'Chemise homme haut de gamme TozalaClass',
  },
  {
    id: 4,
    title: 'Silhouette tailoring bronze',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Look homme tailoring luxe TozalaClass',
  },
  {
    id: 5,
    title: 'Vestiaire gala anthracite',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Tenue homme de gala TozalaClass',
  },
  {
    id: 6,
    title: 'Ensemble soiree heritage',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=900&q=80',
    alt: 'Ensemble homme sophistique TozalaClass',
  },
  {
    id: 7,
    title: 'Robe aura emeraude',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    alt: 'Robe femme elegante TozalaClass',
  },
  {
    id: 8,
    title: 'Robe Heloise sable',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    alt: 'Robe femme couture TozalaClass',
  },
  {
    id: 9,
    title: 'Drape lumiere couture',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Silhouette femme haut de gamme TozalaClass',
  },
  {
    id: 10,
    title: 'Silhouette reception rose the',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    alt: 'Silhouette femme reception TozalaClass',
  },
  {
    id: 11,
    title: 'Capsule atelier satin',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    alt: 'Look femme raffine TozalaClass',
  },
  {
    id: 12,
    title: 'Elegance soiree moderne',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    alt: 'Tenue femme evenementielle TozalaClass',
  },
  {
    id: 13,
    title: 'Sac atelier Riviera',
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    alt: 'Sac accessoire premium TozalaClass',
  },
  {
    id: 14,
    title: 'Derbies cuir opera',
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    alt: 'Chaussures accessoires homme TozalaClass',
  },
  {
    id: 15,
    title: 'Etole nocturne',
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    alt: 'Etole accessoire luxe TozalaClass',
  },
  {
    id: 16,
    title: "Bijou d'atelier dore",
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    alt: 'Bijou accessoire elegant TozalaClass',
  },
  {
    id: 17,
    title: 'Lunettes silhouette noire',
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    alt: 'Lunettes accessoires haut de gamme TozalaClass',
  },
  {
    id: 18,
    title: 'Montre heritage acier',
    category: 'accessoires',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    alt: 'Montre accessoire premium TozalaClass',
  },
  {
    id: 19,
    title: 'Portrait editorial signature',
    category: 'homme',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait editorial luxe homme TozalaClass',
  },
  {
    id: 20,
    title: 'Ambiance suite couture',
    category: 'femme',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    alt: 'Ambiance editoriale luxe TozalaClass',
  },
]
