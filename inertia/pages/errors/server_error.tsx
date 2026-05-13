import type { ComponentProps } from 'react'
import ServerErrorPage from '../../../resources/js/pages/errors/server_error.js'

type Props = ComponentProps<typeof ServerErrorPage>

export default function ServerError(props: Props) {
  return <ServerErrorPage {...props} />
}
