import type { ComponentProps } from 'react'
import EventPage from '../../resources/js/pages/Event.js'

type Props = ComponentProps<typeof EventPage>

export default function Event(props: Props) {
  return <EventPage {...props} />
}
