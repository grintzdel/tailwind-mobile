export namespace UserDomainModel {
  export type Role = 'ROLE_USER' | 'ROLE_ARTIST' | 'ROLE_MODERATOR' | 'ROLE_ADMIN'

  export interface User {
    id: string
    name: string
    email: string
    role: Role
    createdAt: string
    updatedAt: string
  }

  export interface CreateUserPayload {
    name: string
    email: string
    password: string
    role: Role
  }

  export interface UpdateUserPayload {
    name?: string
    email?: string
    role?: Role
  }
}
