import { app } from '@/modules/app/core/main'
import { CategoryDomainModel } from '@/modules/category/core/model/category.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useUpdateCategory(): UseMutationResult<
  CategoryDomainModel.Category,
  Error,
  { id: string; payload: CategoryDomainModel.UpdateCategoryPayload }
> {
  const queryClient = useQueryClient()

  return useMutation<
    CategoryDomainModel.Category,
    Error,
    { id: string; payload: CategoryDomainModel.UpdateCategoryPayload }
  >({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string
      payload: CategoryDomainModel.UpdateCategoryPayload
    }): Promise<CategoryDomainModel.Category> => {
      const data = await app.dependencies.categoryGateway.update(id, payload)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      queryClient.invalidateQueries({ queryKey: ['category', variables.id] })
    },
  })
}
