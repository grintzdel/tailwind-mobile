import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { TagDomainModel } from '@/modules/tag/core/model/tag.domain-model'

export function useCreateTag(): UseMutationResult<TagDomainModel.Tag, Error, TagDomainModel.CreateTagPayload> {
  const queryClient = useQueryClient()

  return useMutation<TagDomainModel.Tag, Error, TagDomainModel.CreateTagPayload>({
    mutationFn: async (payload: TagDomainModel.CreateTagPayload): Promise<TagDomainModel.Tag> => {
      const data = await app.dependencies.tagGateway.create(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
    },
  })
}
