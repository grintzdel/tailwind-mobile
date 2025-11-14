import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'

export function useCreateSong(): UseMutationResult<SongDomainModel.Song, Error, SongDomainModel.CreateSongPayload> {
  const queryClient = useQueryClient()

  return useMutation<SongDomainModel.Song, Error, SongDomainModel.CreateSongPayload>({
    mutationFn: async (payload: SongDomainModel.CreateSongPayload): Promise<SongDomainModel.Song> => {
      const data = await app.dependencies.songGateway.create(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })
}
