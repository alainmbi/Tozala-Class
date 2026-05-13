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
      'Des lignes structurees, des coupes nettes et un accompagnement atelier pour vos pieces de ville, ceremonie ou business.',
    detailTitle: 'Une couture masculine pensee pour la presence.',
    detailDescription:
      'Nous prenons le temps de comprendre votre usage, votre silhouette et le niveau de formalite souhaite afin de construire un rendu juste, durable et elegant.',
    options: [
      'Costume sur mesure',
      'Chemise personnalisee',
      'Retouche de veste ou pantalon',
      'Finition ceremonie',
    ],
    tariffTitle: 'Repere tarifaire temporaire',
    tariffs: [
      { label: 'Consultation atelier', price: '20 $' },
      { label: 'Retouche simple', price: '35 $' },
      { label: 'Chemise sur mesure', price: '95 $' },
      { label: 'Costume complet', price: '280 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      "Un devis final est confirme apres prise de mesures, choix matiere et validation de l'atelier.",
  },
  {
    id: 2,
    slug: 'couture-femme',
    name: 'Couture femme',
    short: 'Silhouettes feminines et pieces d occasion',
    description:
      'Robes, tailleurs, retouches et creations sur mesure pour une allure precise, elegante et adaptee a chaque moment.',
    detailTitle: 'Des volumes feminins ajustes a votre intention.',
    detailDescription:
      'Chaque projet est traite comme une composition complete: coupe, tombe, confort, details et harmonie des finitions.',
    options: [
      'Robe de ceremonie',
      'Tailleur sur mesure',
      'Retouche de robe',
      'Essayage prive et ajustements',
    ],
    tariffTitle: 'Repere tarifaire temporaire',
    tariffs: [
      { label: 'Consultation silhouette', price: '25 $' },
      { label: 'Retouche simple', price: '30 $' },
      { label: 'Robe sur mesure', price: '180 $' },
      { label: 'Tailleur complet', price: '240 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      'Le montant definitif depend du patron, des finitions et de la complexite du modele retenu.',
  },
  {
    id: 3,
    slug: 'pressing',
    name: 'Pressing',
    short: 'Entretien textile premium',
    description:
      'Nettoyage, defroissage et restitution soignee pour les pieces du quotidien comme pour les tenues de ceremonie.',
    detailTitle: 'Un pressing rapide, soigne et parfaitement localise.',
    detailDescription:
      'Choisissez votre article, votre commune et le point pressing le plus proche pour preparer une prise en charge simple et premium.',
    options: [
      'Nettoyage delicat',
      'Repassage vapeur',
      'Traitement pieces ceremonie',
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
      "Une fois l'article choisi, vous pouvez poursuivre vers la caisse ou envoyer votre demande si vous preferez une confirmation manuelle.",
  },
  {
    id: 4,
    slug: 'decoration-evenement',
    name: 'Decoration evenement',
    short: 'Scenographie et ambiance signature',
    description:
      'Une direction visuelle pour vos celebrations, lancements, receptions et experiences premium.',
    detailTitle: 'Une mise en scene elegante pour chaque moment fort.',
    detailDescription:
      "Nous concevons l'ambiance, les matieres, les couleurs et les points focaux pour faire vivre un evenement coherent, fluide et memorisable.",
    options: [
      'Decoration de mariage',
      'Decoration corporate',
      'Mise en scene table et accueil',
      'Coordination decor et style',
    ],
    tariffTitle: 'Repere tarifaire temporaire',
    tariffs: [
      { label: 'Visite et cadrage', price: '40 $' },
      { label: 'Decoration petit format', price: '160 $' },
      { label: 'Decoration reception', price: '350 $' },
      { label: 'Direction complete', price: '650 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      'Le budget final est ajuste selon le lieu, le nombre de invites et le niveau de personnalisation.',
  },
  {
    id: 5,
    slug: 'conseil-image',
    name: 'Conseil en image',
    short: 'Style, posture et coherence visuelle',
    description:
      'Un accompagnement personnalise pour clarifier votre image, affiner vos choix et renforcer votre presence.',
    detailTitle: 'Un conseil image qui aligne style et impact.',
    detailDescription:
      'Nous travaillons sur la silhouette, les couleurs, les habitudes vestimentaires et les messages que votre image doit porter.',
    options: [
      'Audit de style',
      'Palette de couleurs',
      'Capsule dressing',
      'Preparation image pour evenement ou prise de parole',
    ],
    tariffTitle: 'Repere tarifaire temporaire',
    tariffs: [
      { label: 'Session diagnostic', price: '45 $' },
      { label: 'Audit complet', price: '90 $' },
      { label: 'Capsule dressing', price: '130 $' },
      { label: 'Accompagnement premium', price: '220 $' },
    ],
    paymentFlow: 'request',
    reservationNote:
      "La prestation est confirmee apres echange sur vos objectifs, votre contexte et la duree d'accompagnement.",
  },
]

export function findServiceBySlug(slug: string | null | undefined) {
  if (!slug) {
    return undefined
  }

  return services.find((service) => service.slug === slug)
}
