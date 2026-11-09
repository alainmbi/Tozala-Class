export type ServiceSlug =
  | 'couture-homme'
  | 'couture-femme'
  | 'pressing'
  | 'decoration-evenement'
  | 'conseil-image'

export type ServicePaymentFlow = 'request' | 'online_after_selection'

export type ServiceTariffItem = {
  label: string
  price: string
}

export type PressingMenuItem = {
  label: string
  image: string
  ironingPrice: string
  cleaningPrice: string
}

export type ServiceItem = {
  id: number
  slug: ServiceSlug
  name: string
  short: string
  description: string
  detailTitle: string
  detailDescription: string
  options: string[]
  tariffTitle?: string
  tariffs?: ServiceTariffItem[]
  pressingMenu?: PressingMenuItem[]
  paymentFlow: ServicePaymentFlow
  reservationNote: string
}

export const pressingLocations = [
  'Gombe',
  'Limete',
  'Kalamu',
  'Ngaliema',
  'Lemba',
  'Matete',
  'Bandalungwa',
  'Kintambo',
] as const

export const kinshasaCommunes = [
  'Gombe',
  'Limete',
  'Kalamu',
  'Ngaliema',
  'Lemba',
  'Matete',
  'Bandalungwa',
  'Kintambo',
  'Masina',
  'Ndjili',
  'Mont Ngafula',
] as const

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: 'couture-homme',
    name: 'Couture homme',
    short: 'Vestiaire masculin sur mesure',
    description:
      'Des lignes structurées, des coupes nettes et un accompagnement atelier pour vos pièces de ville, cérémonie ou business.',
    detailTitle: 'Une couture masculine pensée pour la présence.',
    detailDescription:
      'Nous prenons le temps de comprendre votre usage, votre silhouette et le niveau de formalité souhaité afin de construire un rendu juste, durable et élégant.',
    options: [
      'Costume sur mesure',
      'Chemise personnalisée',
      'Retouche de veste ou pantalon',
      'Finition cérémonie',
    ],
    tariffTitle: 'Repère tarifaire temporaire',
    tariffs: [
      { label: 'Consultation atelier', price: '20 $' },
      { label: 'Retouche simple', price: '35 $' },
      { label: 'Chemise sur mesure', price: '95 $' },
      { label: 'Costume complet', price: '280 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      "Un devis final est confirmé après prise de mesures, choix matière et validation de l'atelier.",
  },
  {
    id: 2,
    slug: 'couture-femme',
    name: 'Couture femme',
    short: "Silhouettes féminines et pièces d'occasion",
    description:
      'Robes, tailleurs, retouches et créations sur mesure pour une allure précise, élégante et adaptée à chaque moment.',
    detailTitle: 'Des volumes féminins ajustés à votre intention.',
    detailDescription:
      'Chaque projet est traité comme une composition complète: coupe, tombé, confort, détails et harmonie des finitions.',
    options: [
      'Robe de cérémonie',
      'Tailleur sur mesure',
      'Retouche de robe',
      'Essayage privé et ajustements',
    ],
    tariffTitle: 'Repère tarifaire temporaire',
    tariffs: [
      { label: 'Consultation silhouette', price: '25 $' },
      { label: 'Retouche simple', price: '30 $' },
      { label: 'Robe sur mesure', price: '180 $' },
      { label: 'Tailleur complet', price: '240 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      'Le montant définitif dépend du patron, des finitions et de la complexité du modèle retenu.',
  },
  {
    id: 3,
    slug: 'pressing',
    name: 'Pressing',
    short: 'Entretien textile premium',
    description:
      'Nettoyage, défroissage et restitution soignée pour les pièces du quotidien comme pour les tenues de cérémonie.',
    detailTitle: 'Un pressing rapide, soigné et parfaitement localisé.',
    detailDescription:
      'Choisissez votre article, votre commune et le point pressing le plus proche pour préparer une prise en charge simple et premium.',
    options: [
      'Nettoyage délicat',
      'Repassage vapeur',
      'Traitement pièces cérémonie',
      'Prise en charge selon la commune',
    ],
    tariffTitle: 'Menu tarifaire temporaire',
    tariffs: [
      { label: 'Chemise', price: '6 $' },
      { label: 'Pantalon', price: '7 $' },
      { label: 'Culotte', price: '3 $' },
      { label: 'Baskets', price: '9 $' },
      { label: 'Ensemble costume', price: '18 $' },
      { label: 'Veste', price: '8 $' },
      { label: 'Robe', price: '12 $' },
      { label: 'Drap', price: '10 $' },
      { label: 'Rideau', price: '16 $' },
      { label: 'Blazer', price: '9 $' },
      { label: 'Manteau', price: '15 $' },
    ],
    pressingMenu: [
      {
        label: 'Chemise',
        image:
          'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '4 $',
        cleaningPrice: '6 $',
      },
      {
        label: 'Pantalon',
        image:
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '5 $',
        cleaningPrice: '7 $',
      },
      {
        label: 'Culotte',
        image:
          'https://images.unsplash.com/photo-1617952236317-12b6d91a8fa8?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '2 $',
        cleaningPrice: '3 $',
      },
      {
        label: 'Baskets',
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '-',
        cleaningPrice: '9 $',
      },
      {
        label: 'Ensemble costume',
        image:
          'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '10 $',
        cleaningPrice: '18 $',
      },
      {
        label: 'Veste',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '5 $',
        cleaningPrice: '8 $',
      },
      {
        label: 'Robe',
        image:
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '7 $',
        cleaningPrice: '12 $',
      },
      {
        label: 'Drap',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '6 $',
        cleaningPrice: '10 $',
      },
      {
        label: 'Rideau',
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '8 $',
        cleaningPrice: '16 $',
      },
      {
        label: 'Blazer',
        image:
          'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '5 $',
        cleaningPrice: '9 $',
      },
      {
        label: 'Manteau',
        image:
          'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=320&q=80',
        ironingPrice: '9 $',
        cleaningPrice: '15 $',
      },
    ],
    paymentFlow: 'online_after_selection',
    reservationNote:
      "Une fois l'article choisi, vous pouvez poursuivre vers la caisse ou envoyer votre demande si vous préférez une confirmation manuelle.",
  },
  {
    id: 4,
    slug: 'decoration-evenement',
    name: 'Décoration événement',
    short: 'Scénographie et ambiance signature',
    description:
      'Une direction visuelle pour vos célébrations, lancements, réceptions et expériences premium.',
    detailTitle: 'Une mise en scène élégante pour chaque moment fort.',
    detailDescription:
      "Nous concevons l'ambiance, les matières, les couleurs et les points focaux pour faire vivre un événement cohérent, fluide et mémorisable.",
    options: [
      'Décoration de mariage',
      'Décoration corporate',
      'Mise en scène table et accueil',
      'Coordination décor et style',
    ],
    tariffTitle: 'Repère tarifaire temporaire',
    tariffs: [
      { label: 'Visite et cadrage', price: '40 $' },
      { label: 'Décoration petit format', price: '160 $' },
      { label: 'Décoration réception', price: '350 $' },
      { label: 'Direction complète', price: '650 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      "Le budget final est ajusté selon le lieu, le nombre d'invités et le niveau de personnalisation.",
  },
  {
    id: 5,
    slug: 'conseil-image',
    name: 'Conseil en image',
    short: 'Style, posture et cohérence visuelle',
    description:
      'Un accompagnement personnalisé pour clarifier votre image, affiner vos choix et renforcer votre présence.',
    detailTitle: 'Un conseil image qui aligne style et impact.',
    detailDescription:
      'Nous travaillons sur la silhouette, les couleurs, les habitudes vestimentaires et les messages que votre image doit porter.',
    options: [
      'Audit de style',
      'Palette de couleurs',
      'Capsule dressing',
      'Préparation image pour événement ou prise de parole',
    ],
    tariffTitle: 'Repère tarifaire temporaire',
    tariffs: [
      { label: 'Session diagnostic', price: '45 $' },
      { label: 'Audit complet', price: '90 $' },
      { label: 'Capsule dressing', price: '130 $' },
      { label: 'Accompagnement premium', price: '220 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      "La prestation est confirmée après échange sur vos objectifs, votre contexte et la durée d'accompagnement.",
  },
]

export function findServiceBySlug(slug: string | null | undefined) {
  if (!slug) {
    return undefined
  }

  return services.find((service) => service.slug === slug)
}
