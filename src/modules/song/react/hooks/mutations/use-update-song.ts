import { type UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'

export function useUpdateSong(): UseMutationResult<
  SongDomainModel.Song,
  Error,
  { id: string; payload: SongDomainModel.UpdateSongPayload }
> {
  const queryClient = useQueryClient()

  return useMutation<SongDomainModel.Song, Error, { id: string; payload: SongDomainModel.UpdateSongPayload }>({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string
      payload: SongDomainModel.UpdateSongPayload
    }): Promise<SongDomainModel.Song> => {
      const data = await app.dependencies.songGateway.update(id, payload)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      queryClient.invalidateQueries({ queryKey: ['song', variables.id] })
    },
  })
}
