import { ApiService } from './service/api.service'
import { Dependencies } from './store/dependencies'
import { HttpSong } from '@/modules/song/core/adapters/http.song'

export class App {
  private static instance: App
  public readonly api: ApiService
  public readonly dependencies: Dependencies

  private constructor() {
    this.api = new ApiService()

    if (this.api.isTokenExpired()) {
      this.api.clearToken()
    }

    this.dependencies = {
      songGateway: new HttpSong(this.api),
    }
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }
    return App.instance
  }
}

export const app = App.getInstance()
