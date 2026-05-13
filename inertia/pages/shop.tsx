import type { ComponentProps } from 'react'
import ShopPage from '../../resources/js/pages/Shop.js'

type Props = ComponentProps<typeof ShopPage>

export default function Shop(props: Props) {
  return <ShopPage {...props} />
}
