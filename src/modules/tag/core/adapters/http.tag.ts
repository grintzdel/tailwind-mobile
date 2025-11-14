import { ApiService } from '@/modules/app/core/service/api.service'
import { TagDomainModel } from '../model/tag.domain-model'
import { ITagGateway } from '../port/gateway.tag'

export class HttpTag implements ITagGateway {
  constructor(private api: ApiService) {}

  async getAll(): Promise<TagDomainModel.Tag[]> {
    try {
      const res = await this.api.get<TagDomainModel.Tag[]>('/api/tags')
      return res
    } catch (error) {
      throw new Error(`Failed to get all tags: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getById(id: string): Promise<TagDomainModel.Tag> {
    try {
      const res = await this.api.get<TagDomainModel.Tag>(`/api/tags/${id}`)
      return res
    } catch (error) {
      throw new Error(`Failed to get tag with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async create(payload: TagDomainModel.CreateTagPayload): Promise<TagDomainModel.Tag> {
    try {
      const res = await this.api.post<TagDomainModel.Tag>('/api/tags', payload)
      return res
    } catch (error) {
      throw new Error(
        `Failed to create tag with name ${payload.name}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async update(id: string, payload: TagDomainModel.UpdateTagPayload): Promise<TagDomainModel.Tag> {
    try {
      const res = await this.api.put<TagDomainModel.Tag>(`/api/tags/${id}`, payload)
      return res
    } catch (error) {
      throw new Error(`Failed to update tag with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.api.delete<void>(`/api/tags/${id}`)
    } catch (error) {
      throw new Error(`Failed to delete tag with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
