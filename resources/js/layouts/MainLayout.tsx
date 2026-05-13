import { BrandMark } from '../components/BrandMark.js'
import { Form, Link } from '@adonisjs/inertia/react'
import { toast, Toaster } from 'sonner'
import { usePage } from '@inertiajs/react'
import { useEffect, useState, type ReactNode } from 'react'
import type { SharedProps } from '../lib/shared.js'

const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Événementiel', href: '/event' },
  { label: 'Services', href: '/services' },
  { label: 'Caisse', href: '/checkout' },
]

const footerColumns = [
  {
    title: 'Maison',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Univers', href: '/#univers' },
      { label: 'Pièces maîtresses', href: '/#pieces' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Pressing', href: '/services' },
      { label: 'Retouche', href: '/services' },
      { label: 'Conseil image', href: '/services' },
    ],
  },
  {
    title: 'Expérience',
    links: [
      { label: 'Événementiel', href: '/event' },
      { label: 'Boutique', href: '/shop' },
      { label: 'Passer à la caisse', href: '/checkout' },
    ],
  },
]

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M6 9h12l-1 10H7L6 9Z" />
      <path d="M9 10V8a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  )
}

export default function MainLayout({ children }: { children: ReactNode }) {
  const page = usePage<SharedProps>()
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentPath = page.url.split('?')[0]

  useEffect(() => {
    setMobileOpen(false)
    toast.dismiss()
  }, [page.url])

  useEffect(() => {
    if (page.props.flash.error) {
      toast.error(page.props.flash.error)
    }

    if (page.props.flash.success) {
      toast.success(page.props.flash.success)
    }
  }, [page.props.flash.error, page.props.flash.success])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-black/6 bg-ivory/90 backdrop-blur">
        <div className="shell">
          <div className="flex h-20 items-center justify-between gap-6">
            <Link href="/" className="shrink-0">
              <BrandMark />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => {
                const isActive =
                  item.href === '/' ? currentPath === item.href : currentPath.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'text-xs font-semibold tracking-[0.28em] uppercase transition',
                      isActive ? 'text-gold' : 'text-forest/72 hover:text-forest',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest">
                <SearchIcon />
              </span>
              <Link
                href="/checkout"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest"
              >
                <BagIcon />
              </Link>
              {page.props.user ? (
                <Form route="session.destroy" className="flex items-center gap-3">
                  <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-2 text-xs font-semibold tracking-[0.25em] text-forest uppercase">
                    {page.props.user.initials}
                  </span>
                  <button type="submit" className="btn-secondary !px-4 !py-2">
                    Logout
                  </button>
                </Form>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" className="btn-secondary !px-4 !py-2">
                    Login
                  </Link>
                  <Link href="/signup" className="btn-primary !px-4 !py-2">
                    Signup
                  </Link>
                </div>
              )}
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/10 text-forest lg:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Ouvrir le menu"
            >
              <MenuIcon />
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-black/6 py-5 lg:hidden">
              <div className="grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-black/6 bg-white px-4 py-3 text-sm font-semibold tracking-[0.2em] text-forest uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
                {page.props.user ? (
                  <Form route="session.destroy">
                    <button type="submit" className="btn-secondary w-full">
                      Logout
                    </button>
                  </Form>
                ) : (
                  <div className="grid gap-3">
                    <Link href="/login" className="btn-secondary w-full">
                      Login
                    </Link>
                    <Link href="/signup" className="btn-primary w-full">
                      Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-10 bg-forest text-white">
        <div className="shell py-14">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <BrandMark tone="light" />
              <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
                TozalaClass signe un art de vivre entre mode premium, entretien textile, cérémonies
                et conseil en image.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold tracking-[0.28em] text-gold uppercase">
                  {column.title}
                </p>
                <div className="mt-5 grid gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>TozalaClass, Kinshasa. Style en temps réel.</p>
            <p>contact@tozalaclass.com</p>
          </div>
        </div>
      </footer>

      <Toaster position="top-center" richColors />
    </div>
  )
}
