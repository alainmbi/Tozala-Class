import './css/app.css'
import { client } from './client.js'
import { BrandLoader } from './components/common/BrandLoader.js'
import type { PageComponent } from './lib/inertia.js'
import MainLayout from './layouts/MainLayout.js'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'TozalaClass'
const pages = import.meta.glob('./pages/**/*.tsx')
const pagePathMap: Record<string, string> = {
  home: './pages/Home.tsx',
  shop: './pages/Shop.tsx',
  product: './pages/Product.tsx',
  event: './pages/Event.tsx',
  services: './pages/Services.tsx',
  checkout: './pages/Checkout.tsx',
}
const loaderHost = document.getElementById('brand-loader-root')
const loaderRoot = loaderHost ? createRoot(loaderHost) : null

loaderRoot?.render(<BrandLoader />)

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    const page = (await resolvePageComponent(
      pagePathMap[name] ?? `./pages/${name}.tsx`,
      pages
    )) as {
      default: PageComponent
    }

    page.default.layout ??= (pageNode) => <MainLayout>{pageNode}</MainLayout>
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <TuyauProvider client={client}>
        <App {...props} />
      </TuyauProvider>
    )

    if (loaderHost) {
      loaderHost.classList.add('brand-loader-exit')
      window.setTimeout(() => {
        loaderRoot?.unmount()
        loaderHost.remove()
      }, 420)
    }
  },
  progress: {
    color: '#AE8044',
  },
})
