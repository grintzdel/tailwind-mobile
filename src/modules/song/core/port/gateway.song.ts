import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'

export interface ISongGateway {
  /*
  Queries
   */
  getAll(): Promise<SongDomainModel.Song[]>

  getById(id: string): Promise<SongDomainModel.Song>

  getByTag(tagId: string): Promise<SongDomainModel.Song[]>

  getByCategory(categoryId: string): Promise<SongDomainModel.Song[]>

  getByAlbum(albumId: string): Promise<SongDomainModel.Song[]>

  /*
  Commands
   */
  create(payload: SongDomainModel.CreateSongPayload): Promise<SongDomainModel.Song>

  update(id: string, payload: SongDomainModel.UpdateSongPayload): Promise<SongDomainModel.Song>

  delete(id: string): Promise<void>
}
