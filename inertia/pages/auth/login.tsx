import type { ComponentProps } from 'react'
import LoginPage from '../../../resources/js/pages/auth/login.js'

type Props = ComponentProps<typeof LoginPage>

export default function Login(props: Props) {
  return <LoginPage {...props} />
}
