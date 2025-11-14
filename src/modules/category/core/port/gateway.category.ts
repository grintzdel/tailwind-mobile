import { CategoryDomainModel } from '../model/category.domain-model'

export interface ICategoryGateway {
  /*
  Queries
   */
  getAll(): Promise<CategoryDomainModel.Category[]>
  getById(id: string): Promise<CategoryDomainModel.Category>

  /*
  Commands
   */
  create(payload: CategoryDomainModel.CreateCategoryPayload): Promise<CategoryDomainModel.Category>
  update(id: string, payload: CategoryDomainModel.UpdateCategoryPayload): Promise<CategoryDomainModel.Category>
  delete(id: string): Promise<void>
}
