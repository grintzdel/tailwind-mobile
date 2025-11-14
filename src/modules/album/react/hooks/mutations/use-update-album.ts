import { app } from '@/modules/app/core/main'
import { AlbumDomainModel } from '@/modules/album/core/model/album.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useUpdateAlbum(): UseMutationResult<
  AlbumDomainModel.Album,
  Error,
  { id: string; payload: AlbumDomainModel.UpdateAlbumPayload }
> {
  const queryClient = useQueryClient()

  return useMutation<AlbumDomainModel.Album, Error, { id: string; payload: AlbumDomainModel.UpdateAlbumPayload }>({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string
      payload: AlbumDomainModel.UpdateAlbumPayload
    }): Promise<AlbumDomainModel.Album> => {
      const data = await app.dependencies.albumGateway.update(id, payload)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['albums'] })
      queryClient.invalidateQueries({ queryKey: ['album', variables.id] })
    },
  })
}
