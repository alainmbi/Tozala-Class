import { BrandLogo } from './common/BrandLogo.js'

type BrandMarkProps = {
  tone?: 'light' | 'dark'
}

export function BrandMark({ tone = 'dark' }: BrandMarkProps) {
  return <BrandLogo variant={tone} size="lg" />
}
