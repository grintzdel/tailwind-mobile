import { ISongGateway } from '@/modules/song/core/port/gateway.song'
import { IAuthGateway } from '@/modules/auth/core/port/gateway.auth'
import { IUserGateway } from '@/modules/user/core/port/gateway.user'

export type Dependencies = {
  songGateway: ISongGateway
  authGateway: IAuthGateway
  userGateway: IUserGateway
}
