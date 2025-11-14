import { TagDomainModel } from '../model/tag.domain-model'

export interface ITagGateway {
  /*
  Queries
   */
  getAll(): Promise<TagDomainModel.Tag[]>
  getById(id: string): Promise<TagDomainModel.Tag>

  /*
  Commands
   */
  create(payload: TagDomainModel.CreateTagPayload): Promise<TagDomainModel.Tag>
  update(id: string, payload: TagDomainModel.UpdateTagPayload): Promise<TagDomainModel.Tag>
  delete(id: string): Promise<void>
}
