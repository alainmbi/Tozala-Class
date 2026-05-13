/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')
router.on('/shop').renderInertia('shop', {}).as('shop')
router.on('/services').renderInertia('services', {}).as('services')
router.on('/services/reservation').renderInertia('service_booking', {}).as('service.booking')
router.on('/event').renderInertia('event', {}).as('event')
router.on('/checkout').renderInertia('checkout', {}).as('checkout')
router
  .get('/product/:id', async ({ inertia, params }) => {
    return inertia.render('product', {
      productId: Number(params.id),
    })
  })
  .as('product.show')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
