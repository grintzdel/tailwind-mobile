import { ApiService } from '@/modules/app/core/service/api.service'
import { CategoryDomainModel } from '../model/category.domain-model'
import { ICategoryGateway } from '../port/gateway.category'

export class HttpCategory implements ICategoryGateway {
  constructor(private api: ApiService) {}

  async getAll(): Promise<CategoryDomainModel.Category[]> {
    try {
      const res = await this.api.get<CategoryDomainModel.Category[]>('/api/categories')
      return res
    } catch (error) {
      throw new Error(`Failed to get all categories: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getById(id: string): Promise<CategoryDomainModel.Category> {
    try {
      const res = await this.api.get<CategoryDomainModel.Category>(`/api/categories/${id}`)
      return res
    } catch (error) {
      throw new Error(`Failed to get category with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async create(payload: CategoryDomainModel.CreateCategoryPayload): Promise<CategoryDomainModel.Category> {
    try {
      const res = await this.api.post<CategoryDomainModel.Category>('/api/categories', payload)
      return res
    } catch (error) {
      throw new Error(
        `Failed to create category with name ${payload.name}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async update(id: string, payload: CategoryDomainModel.UpdateCategoryPayload): Promise<CategoryDomainModel.Category> {
    try {
      const res = await this.api.put<CategoryDomainModel.Category>(`/api/categories/${id}`, payload)
      return res
    } catch (error) {
      throw new Error(
        `Failed to update category with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.api.delete<void>(`/api/categories/${id}`)
    } catch (error) {
      throw new Error(
        `Failed to delete category with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }
}
