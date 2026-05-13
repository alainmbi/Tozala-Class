import type { ComponentProps } from 'react'
import NotFoundPage from '../../../resources/js/pages/errors/not_found.js'

type Props = ComponentProps<typeof NotFoundPage>

export default function NotFound(props: Props) {
  return <NotFoundPage {...props} />
}
