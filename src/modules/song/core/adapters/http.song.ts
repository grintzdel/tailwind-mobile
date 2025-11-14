import { ISongGateway } from '@/modules/song/core/port/gateway.song'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'
import { ApiService } from '@/modules/app/core/service/api.service'

export class HttpSong implements ISongGateway {
  constructor(private api: ApiService) {}

  async getAll(): Promise<SongDomainModel.Song[]> {
    try {
      const res = await this.api.get<SongDomainModel.Song[]>('/api/songs/songs')

      return res
    } catch (error) {
      throw new Error(`Failed to get all songs: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getById(id: string): Promise<SongDomainModel.Song> {
    try {
      const res = await this.api.get<SongDomainModel.Song>(`/api/songs/songs/${id}`)

      return res
    } catch (error) {
      throw new Error(`Failed to get song with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getByTag(tagId: string): Promise<SongDomainModel.Song[]> {
    try {
      const res = await this.api.get<SongDomainModel.Song[]>(`/api/songs/songs/tag/${tagId}`)

      return res
    } catch (error) {
      throw new Error(`Failed to get songs by tag ${tagId}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getByCategory(categoryId: string): Promise<SongDomainModel.Song[]> {
    try {
      const res = await this.api.get<SongDomainModel.Song[]>(`/api/songs/songs/category/${categoryId}`)

      return res
    } catch (error) {
      throw new Error(
        `Failed to get songs by category ${categoryId}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async getByAlbum(albumId: string): Promise<SongDomainModel.Song[]> {
    try {
      const res = await this.api.get<SongDomainModel.Song[]>(`/api/songs/songs/album/${albumId}`)

      return res
    } catch (error) {
      throw new Error(
        `Failed to get songs by album ${albumId}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async create(payload: SongDomainModel.CreateSongPayload): Promise<SongDomainModel.Song> {
    try {
      const res = await this.api.post<SongDomainModel.Song>('/api/songs/songs', payload)

      return res
    } catch (error) {
      throw new Error(
        `Failed to create song with name ${payload.name}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async update(id: string, payload: SongDomainModel.UpdateSongPayload): Promise<SongDomainModel.Song> {
    try {
      const res = await this.api.put<SongDomainModel.Song>(`/api/songs/songs/${id}`, payload)

      return res
    } catch (error) {
      throw new Error(`Failed to update song with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.api.delete<void>(`/api/songs/songs/${id}`)
    } catch (error) {
      throw new Error(`Failed to delete song with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
