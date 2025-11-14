import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useCurrentUser(): UseQueryResult<UserDomainModel.User, Error> {
  const userId = app.api.getUserIdFromToken()

  return useQuery<UserDomainModel.User>({
    queryKey: ['currentUser', userId],
    queryFn: async (): Promise<UserDomainModel.User> => {
      if (!userId) {
        throw new Error('No user ID found in token')
      }
      const data = await app.dependencies.userGateway.getById(userId)
      return data
    },
    enabled: !!userId,
  })
}
