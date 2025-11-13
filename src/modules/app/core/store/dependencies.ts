import { ISongGateway } from '@/modules/song/core/port/gateway.song'
import { IAuthGateway } from '@/modules/auth/core/port/gateway.auth'

export type Dependencies = {
  songGateway: ISongGateway
  authGateway: IAuthGateway
}
