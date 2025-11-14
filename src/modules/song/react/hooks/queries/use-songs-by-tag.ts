import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useSongsByTag(tagId: string): UseQueryResult<SongDomainModel.Song[], Error> {
  return useQuery<SongDomainModel.Song[]>({
    queryKey: ['songs', 'tag', tagId],
    queryFn: async (): Promise<SongDomainModel.Song[]> => {
      const data = await app.dependencies.songGateway.getByTag(tagId)
      return data
    },
    enabled: !!tagId,
  })
}
