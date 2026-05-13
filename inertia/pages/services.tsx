import type { ComponentProps } from 'react'
import ServicesPage from '../../resources/js/pages/Services.js'

type Props = ComponentProps<typeof ServicesPage>

export default function Services(props: Props) {
  return <ServicesPage {...props} />
}
