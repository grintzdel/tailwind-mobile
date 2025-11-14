import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { TagDomainModel } from '@/modules/tag/core/model/tag.domain-model'

export function useUpdateTag(): UseMutationResult<
  TagDomainModel.Tag,
  Error,
  { id: string; payload: TagDomainModel.UpdateTagPayload }
> {
  const queryClient = useQueryClient()

  return useMutation<TagDomainModel.Tag, Error, { id: string; payload: TagDomainModel.UpdateTagPayload }>({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string
      payload: TagDomainModel.UpdateTagPayload
    }): Promise<TagDomainModel.Tag> => {
      const data = await app.dependencies.tagGateway.update(id, payload)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
      queryClient.invalidateQueries({ queryKey: ['tag', variables.id] })
    },
  })
}
