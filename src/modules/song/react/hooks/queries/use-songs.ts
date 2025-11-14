import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useSongs(): DefinedUseQueryResult<SongDomainModel.Song[], Error> {
  return useQuery<SongDomainModel.Song[]>({
    queryKey: ['songs'],
    queryFn: async (): Promise<SongDomainModel.Song[]> => {
      const data = await app.dependencies.songGateway.getAll()
      return data
    },
    initialData: () => [],
  })
}
