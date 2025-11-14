import { AlbumDomainModel } from '@/modules/album/core/model/album.domain-model'
import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useAlbums(): DefinedUseQueryResult<AlbumDomainModel.Album[], Error> {
  return useQuery<AlbumDomainModel.Album[]>({
    queryKey: ['albums'],
    queryFn: async (): Promise<AlbumDomainModel.Album[]> => {
      const data = await app.dependencies.albumGateway.getAll()
      return data
    },
    initialData: () => [],
  })
}
