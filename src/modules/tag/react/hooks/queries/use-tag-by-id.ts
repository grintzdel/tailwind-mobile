import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { TagDomainModel } from '@/modules/tag/core/model/tag.domain-model'

export function useTagById(id: string): UseQueryResult<TagDomainModel.Tag, Error> {
  return useQuery<TagDomainModel.Tag>({
    queryKey: ['tag', id],
    queryFn: async (): Promise<TagDomainModel.Tag> => {
      const data = await app.dependencies.tagGateway.getById(id)
      return data
    },
    enabled: !!id,
  })
}
