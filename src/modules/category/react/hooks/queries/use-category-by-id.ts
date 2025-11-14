import { app } from '@/modules/app/core/main'
import { CategoryDomainModel } from '@/modules/category/core/model/category.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useCategoryById(id: string): UseQueryResult<CategoryDomainModel.Category, Error> {
  return useQuery<CategoryDomainModel.Category>({
    queryKey: ['category', id],
    queryFn: async (): Promise<CategoryDomainModel.Category> => {
      const data = await app.dependencies.categoryGateway.getById(id)
      return data
    },
    enabled: !!id,
  })
}
