export namespace SongDomainModel {
  export type Song = {
    id: string
    artistId: string
    name: string
    categoryId: string
    tagId: Nullable<string>
    duration: number
    coverImage: Nullable<string>
    durationFormatted: string
    createdAt: string
    updatedAt: string
    deletedAt: Nullable<string>
  }

  export type Tag = string

  export type SongOverviewDto = {
    id: string
    img: string
    title: string
    duration?: number
    tag?: Tag
    artist?: string
  }

  export type CreateSongPayload = {
    artistId: string
    name: string
    categoryId: string
    tagId?: Nullable<string>
    duration: number
    coverImage?: Nullable<string>
  }

  export type UpdateSongPayload = Partial<Exclude<CreateSongPayload, 'aristId'>>
}
