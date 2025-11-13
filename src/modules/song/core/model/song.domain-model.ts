export namespace SongDomainModel {
  export type SongOverviewDto = {
    id: string
    title: string
    artist: string
    duration: number
    img: string
    tag: Tag
  }

  export type CreateSongDto = SongOverviewDto

  export type Tag = 'top hit' | 'soft vibe' | 'fan fav' | 'random song'
}
