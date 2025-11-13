import { useMutation } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      return app.dependencies.authGateway.logout()
    },
  })
}
