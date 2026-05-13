export type SharedUser = {
  id: number
  fullName: string
  email: string
  initials: string
  createdAt: string
  updatedAt: string
}

export type SharedProps = {
  errors: Record<string, string>
  flash: {
    error?: string
    success?: string
  }
  user?: SharedUser
}
