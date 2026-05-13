import type { ComponentProps } from 'react'
import ServiceBookingPage from '../../resources/js/pages/ServiceBooking.js'

type Props = ComponentProps<typeof ServiceBookingPage>

export default function ServiceBooking(props: Props) {
  return <ServiceBookingPage {...props} />
}
