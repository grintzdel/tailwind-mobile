import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useSongsByCategory(categoryId: string): UseQueryResult<SongDomainModel.Song[], Error> {
  return useQuery<SongDomainModel.Song[]>({
    queryKey: ['songs', 'category', categoryId],
    queryFn: async (): Promise<SongDomainModel.Song[]> => {
      const data = await app.dependencies.songGateway.getByCategory(categoryId)
      return data
    },
    enabled: !!categoryId,
  })
}
