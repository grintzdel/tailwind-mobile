import { useMutation } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'

export const useRegister = () => {
  return useMutation({
    mutationFn: async (credentials: AuthDomainModel.RegisterCredentials) => {
      return app.dependencies.authGateway.register(credentials)
    },
  })
}
