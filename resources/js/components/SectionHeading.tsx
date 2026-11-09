import { useLanguage } from '../lib/preferences.js'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const { t } = useLanguage()

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{t(eyebrow)}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-forest sm:text-4xl lg:text-5xl">
        {t(title)}
      </h2>
      <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">{t(description)}</p>
    </div>
  )
}
