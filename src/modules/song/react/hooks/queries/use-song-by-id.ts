import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'

export function useSongById(id: string): UseQueryResult<SongDomainModel.Song, Error> {
  return useQuery<SongDomainModel.Song>({
    queryKey: ['song', id],
    queryFn: async (): Promise<SongDomainModel.Song> => {
      const data = await app.dependencies.songGateway.getById(id)
      return data
    },
    enabled: !!id,
  })
}
