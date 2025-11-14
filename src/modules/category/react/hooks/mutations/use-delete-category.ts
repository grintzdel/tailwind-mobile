import { app } from '@/modules/app/core/main'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useDeleteCategory(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: async (id: string): Promise<void> => {
      await app.dependencies.categoryGateway.delete(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
