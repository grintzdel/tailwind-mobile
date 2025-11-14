export namespace CategoryDomainModel {
  export type Category = {
    id: string
    name: string
    description: Nullable<string>
    createdAt: string
    updatedAt: string
    deletedAt: Nullable<string>
  }

  export type CreateCategoryPayload = {
    name: string
    description?: Nullable<string>
  }

  export type UpdateCategoryPayload = Partial<CreateCategoryPayload>
}
