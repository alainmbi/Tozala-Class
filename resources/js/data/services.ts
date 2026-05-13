export type ServiceItem = {
  id: number
  name: string
  short: string
  description: string
  priceFrom: string
  features: string[]
}

export const services: ServiceItem[] = [
  {
    id: 1,
    name: 'Pressing Signature',
    short: 'Entretien d’exception',
    description:
      'Nettoyage, défroissage et restitution premium pour préserver la coupe, la matière et l’allure.',
    priceFrom: 'à partir de 25 $',
    features: ['Diagnostic textile', 'Traitement délicat', 'Finition vapeur atelier'],
  },
  {
    id: 2,
    name: 'Retouche Couture',
    short: 'Précision millimétrée',
    description:
      'Ajustements de taille, longueurs et reprises ciblées pour que chaque vêtement tombe juste.',
    priceFrom: 'à partir de 40 $',
    features: ['Essayage guidé', 'Retouche discrète', 'Délai express disponible'],
  },
  {
    id: 3,
    name: 'Confection Sur Mesure',
    short: 'Pièces pensées pour vous',
    description:
      'De la prise de mesure au dernier bouton, nous façonnons un vestiaire qui porte votre nom.',
    priceFrom: 'à partir de 320 $',
    features: ['Rendez-vous matière', 'Patron personnalisé', 'Suivi atelier'],
  },
  {
    id: 4,
    name: 'Conseil en Image',
    short: 'Style stratégique',
    description:
      'Une direction esthétique complète pour harmoniser silhouette, couleurs, attitude et impact.',
    priceFrom: 'à partir de 95 $',
    features: ['Audit de style', 'Palette personnalisée', 'Capsule dressing'],
  },
]
