import { app } from '@/modules/app/core/main'
import { TagDomainModel } from '@/modules/tag/core/model/tag.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useTags(): DefinedUseQueryResult<TagDomainModel.Tag[], Error> {
  return useQuery<TagDomainModel.Tag[]>({
    queryKey: ['tags'],
    queryFn: async (): Promise<TagDomainModel.Tag[]> => {
      const data = await app.dependencies.tagGateway.getAll()
      return data
    },
    initialData: () => [],
  })
}
