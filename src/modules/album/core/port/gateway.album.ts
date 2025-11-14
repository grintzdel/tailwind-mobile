import { AlbumDomainModel } from '../model/album.domain-model'

export interface IAlbumGateway {
  /*
  Queries
   */
  getAll(): Promise<AlbumDomainModel.Album[]>
  getById(id: string): Promise<AlbumDomainModel.Album>

  /*
  Commands
   */
  create(payload: AlbumDomainModel.CreateAlbumPayload): Promise<AlbumDomainModel.Album>
  update(id: string, payload: AlbumDomainModel.UpdateAlbumPayload): Promise<AlbumDomainModel.Album>
  delete(id: string): Promise<void>
}
