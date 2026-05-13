import type { ComponentProps } from 'react'
import SignupPage from '../../../resources/js/pages/auth/signup.js'

type Props = ComponentProps<typeof SignupPage>

export default function Signup(props: Props) {
  return <SignupPage {...props} />
}
