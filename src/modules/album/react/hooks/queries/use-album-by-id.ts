import { AlbumDomainModel } from '@/modules/album/core/model/album.domain-model'
import { app } from '@/modules/app/core/main'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useAlbumById(id: string): UseQueryResult<AlbumDomainModel.Album, Error> {
  return useQuery<AlbumDomainModel.Album>({
    queryKey: ['album', id],
    queryFn: async (): Promise<AlbumDomainModel.Album> => {
      const data = await app.dependencies.albumGateway.getById(id)
      return data
    },
    enabled: !!id,
  })
}
