import { type UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'

export function useDeleteSong(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: async (id: string): Promise<void> => {
      await app.dependencies.songGateway.delete(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })
}
