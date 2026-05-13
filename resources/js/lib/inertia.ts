import type { FC, ReactNode } from 'react'
import type { JSONDataTypes } from '@adonisjs/core/types/transformers'
import type { SharedProps } from './shared.js'

export type InertiaProps<T extends JSONDataTypes = {}> = SharedProps & T

export type PageComponent<T extends JSONDataTypes = {}> = FC<InertiaProps<T>> & {
  layout?: (page: ReactNode) => ReactNode
}
