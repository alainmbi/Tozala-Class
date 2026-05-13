type BrandMarkProps = {
  tone?: 'light' | 'dark'
}

export function BrandMark({ tone = 'dark' }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          'h-10 w-10 rounded-full border text-xs font-semibold tracking-[0.35em] uppercase',
          'flex items-center justify-center',
          tone === 'light'
            ? 'border-white/20 bg-white/10 text-white'
            : 'border-forest/15 bg-forest text-white',
        ].join(' ')}
      >
        TC
      </div>
      <div className={tone === 'light' ? 'text-white' : 'text-forest'}>
        <p className="font-display text-xl leading-none tracking-[0.28em] uppercase">TozalaClass</p>
        <p className="mt-1 text-[10px] font-medium tracking-[0.4em] uppercase text-gold">
          Maison de style
        </p>
      </div>
    </div>
  )
}
