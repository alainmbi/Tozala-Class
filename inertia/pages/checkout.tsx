import type { ComponentProps } from 'react'
import CheckoutPage from '../../resources/js/pages/Checkout.js'

type Props = ComponentProps<typeof CheckoutPage>

export default function Checkout(props: Props) {
  return <CheckoutPage {...props} />
}
