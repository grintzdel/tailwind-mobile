import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useSongsByAlbum(albumId: string): UseQueryResult<SongDomainModel.Song[], Error> {
  return useQuery<SongDomainModel.Song[]>({
    queryKey: ['songs', 'album', albumId],
    queryFn: async (): Promise<SongDomainModel.Song[]> => {
      const data = await app.dependencies.songGateway.getByAlbum(albumId)
      return data
    },
    enabled: !!albumId,
  })
}
