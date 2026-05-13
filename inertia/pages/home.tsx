import type { ComponentProps } from 'react'
import HomePage from '../../resources/js/pages/Home.js'

type Props = ComponentProps<typeof HomePage>

export default function Home(props: Props) {
  return <HomePage {...props} />
}
