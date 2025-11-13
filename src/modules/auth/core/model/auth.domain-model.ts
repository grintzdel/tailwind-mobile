export namespace AuthDomainModel {
  export interface TokenResponse {
    token: string
    expiresIn: number
  }

  export interface LoginCredentials {
    email: string
    password: string
  }

  export interface RegisterCredentials {
    name: string
    email: string
    password: string
  }
}
