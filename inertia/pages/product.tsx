import type { ComponentProps } from 'react'
import ProductPage from '../../resources/js/pages/Product.js'

type Props = ComponentProps<typeof ProductPage>

export default function Product(props: Props) {
  return <ProductPage {...props} />
}
