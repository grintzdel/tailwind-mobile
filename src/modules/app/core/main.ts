import { ApiService } from './service/api.service'
import { Dependencies } from './store/dependencies'
import { HttpSong } from '@/modules/song/core/adapters/http.song'
import { HttpAuth } from '@/modules/auth/core/adapters/http.auth'
import { HttpUser } from '@/modules/user/core/adapters/http.user'
import { HttpTag } from '@/modules/tag/core/adapters/http.tag'
import { HttpCategory } from '@/modules/category/core/adapters/http.category'
import { HttpAlbum } from '@/modules/album/core/adapters/http.album'
import { AppStore, createStore } from '@/modules/app/core/store/store'

export class App {
  private static instance: App
  public readonly api: ApiService
  public readonly dependencies: Dependencies
  public readonly store: AppStore

  private constructor() {
    this.api = new ApiService()

    if (this.api.isTokenExpired()) {
      this.api.clearToken()
    }

    this.dependencies = {
      songGateway: new HttpSong(this.api),
      authGateway: new HttpAuth(this.api),
      userGateway: new HttpUser(this.api),
      tagGateway: new HttpTag(this.api),
      categoryGateway: new HttpCategory(this.api),
      albumGateway: new HttpAlbum(this.api),
    }

    this.store = createStore({ dependencies: this.dependencies })
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }
    return App.instance
  }
}

export const app = App.getInstance()
