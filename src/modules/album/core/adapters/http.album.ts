import { ApiService } from '@/modules/app/core/service/api.service'
import { AlbumDomainModel } from '../model/album.domain-model'
import { IAlbumGateway } from '../port/gateway.album'

export class HttpAlbum implements IAlbumGateway {
  constructor(private api: ApiService) {}

  async getAll(): Promise<AlbumDomainModel.Album[]> {
    try {
      const res = await this.api.get<AlbumDomainModel.Album[]>('/api/albums')
      return res
    } catch (error) {
      throw new Error(`Failed to get all albums: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getById(id: string): Promise<AlbumDomainModel.Album> {
    try {
      const res = await this.api.get<AlbumDomainModel.Album>(`/api/albums/${id}`)
      return res
    } catch (error) {
      throw new Error(`Failed to get album by id: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async create(payload: AlbumDomainModel.CreateAlbumPayload): Promise<AlbumDomainModel.Album> {
    try {
      const res = await this.api.post<AlbumDomainModel.Album>('/api/albums', payload)
      return res
    } catch (error) {
      throw new Error(`Failed to create album: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async update(id: string, payload: AlbumDomainModel.UpdateAlbumPayload): Promise<AlbumDomainModel.Album> {
    try {
      const res = await this.api.put<AlbumDomainModel.Album>(`/api/albums/${id}`, payload)
      return res
    } catch (error) {
      throw new Error(`Failed to update album: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.api.delete(`/api/albums/${id}`)
    } catch (error) {
      throw new Error(`Failed to delete album: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
