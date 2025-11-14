export namespace TagDomainModel {
  export type Tag = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
  }

  export type CreateTagPayload = {
    name: string
  }

  export type UpdateTagPayload = Partial<CreateTagPayload>
}
