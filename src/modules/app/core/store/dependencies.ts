import { ISongGateway } from '@/modules/song/core/port/gateway.song'
import { IAuthGateway } from '@/modules/auth/core/port/gateway.auth'
import { IUserGateway } from '@/modules/user/core/port/gateway.user'
import { ITagGateway } from '@/modules/tag/core/port/gateway.tag'
import { ICategoryGateway } from '@/modules/category/core/port/gateway.category'

export type Dependencies = {
  songGateway: ISongGateway
  authGateway: IAuthGateway
  userGateway: IUserGateway
  tagGateway: ITagGateway
  categoryGateway: ICategoryGateway
}
