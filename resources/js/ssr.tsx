import { client } from './client.js'
import type { PageComponent } from './lib/inertia.js'
import MainLayout from './layouts/MainLayout.js'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
const pagePathMap: Record<string, string> = {
  home: './pages/Home.tsx',
  shop: './pages/Shop.tsx',
  product: './pages/Product.tsx',
  event: './pages/Event.tsx',
  services: './pages/Services.tsx',
  service_booking: './pages/ServiceBooking.tsx',
  checkout: './pages/Checkout.tsx',
}

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const resolvedPage = resolvePageComponent(
        pagePathMap[name] ?? `./pages/${name}.tsx`,
        pages
      ) as unknown as {
        default: PageComponent
      }

      resolvedPage.default.layout ??= (pageNode) => <MainLayout>{pageNode}</MainLayout>
      return resolvedPage
    },
    setup: ({ App, props }: any) => {
      return (
        <TuyauProvider client={client}>
          <App {...props} />
        </TuyauProvider>
      )
    },
  })
}
