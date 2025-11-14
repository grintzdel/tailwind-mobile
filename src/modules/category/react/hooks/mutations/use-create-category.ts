import { app } from '@/modules/app/core/main'
import { CategoryDomainModel } from '@/modules/category/core/model/category.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateCategory(): UseMutationResult<
  CategoryDomainModel.Category,
  Error,
  CategoryDomainModel.CreateCategoryPayload
> {
  const queryClient = useQueryClient()

  return useMutation<CategoryDomainModel.Category, Error, CategoryDomainModel.CreateCategoryPayload>({
    mutationFn: async (payload: CategoryDomainModel.CreateCategoryPayload): Promise<CategoryDomainModel.Category> => {
      const data = await app.dependencies.categoryGateway.create(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
