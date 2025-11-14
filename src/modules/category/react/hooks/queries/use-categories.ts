import { app } from '@/modules/app/core/main'
import { CategoryDomainModel } from '@/modules/category/core/model/category.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useCategories(): DefinedUseQueryResult<CategoryDomainModel.Category[], Error> {
  return useQuery<CategoryDomainModel.Category[]>({
    queryKey: ['categories'],
    queryFn: async (): Promise<CategoryDomainModel.Category[]> => {
      const data = await app.dependencies.categoryGateway.getAll()
      return data
    },
    initialData: () => [],
  })
}
