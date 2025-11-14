export namespace SongDomainModel {
  export interface Song {
    id: string
    artistId: string
    name: string
    categoryId: string
    tagId: string | null
    duration: number
    coverImage: string | null
    durationFormatted: string
    createdAt: string
    updatedAt: string
    deletedAt: string | null
  }

  export interface CreateSongPayload {
    artistId: string
    name: string
    categoryId: string
    tagId?: string | null
    duration: number
    coverImage?: string | null
  }

  export interface UpdateSongPayload {
    name?: string
    categoryId?: string
    tagId?: string | null
    duration?: number
    coverImage?: string | null
  }
}
