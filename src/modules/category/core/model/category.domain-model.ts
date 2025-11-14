export namespace CategoryDomainModel {
  export type Category = {
    id: string
    name: string
    description: string | null
    createdAt: string
    updatedAt: string
    deletedAt: string | null
  }

  export type CreateCategoryPayload = {
    name: string
    description?: string | null
  }

  export type UpdateCategoryPayload = {
    name?: string
    description?: string | null
  }
}
