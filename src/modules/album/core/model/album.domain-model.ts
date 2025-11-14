export namespace AlbumDomainModel {
  export type Album = {
    id: string
    artistId: string
    name: string
    categoryId: Nullable<string>
    coverImage: Nullable<string>
    createdAt: string
    updatedAt: string
    deletedAt: Nullable<string>
  }

  export type CreateAlbumPayload = {
    artistId: string
    name: string
    categoryId?: Nullable<string>
    coverImage?: Nullable<string>
  }

  export type UpdateAlbumPayload = Partial<Exclude<CreateAlbumPayload, 'artistId'>>
}
