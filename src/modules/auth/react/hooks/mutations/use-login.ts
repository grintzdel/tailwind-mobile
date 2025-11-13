import { useMutation } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: AuthDomainModel.LoginCredentials) => {
      return app.dependencies.authGateway.login(credentials)
    },
  })
}
