import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'

export function useDeleteTag(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: async (id: string): Promise<void> => {
      await app.dependencies.tagGateway.delete(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
    },
  })
}
