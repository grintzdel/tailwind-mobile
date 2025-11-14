import { AlbumDomainModel } from '@/modules/album/core/model/album.domain-model'
import { app } from '@/modules/app/core/main'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateAlbum(): UseMutationResult<
  AlbumDomainModel.Album,
  Error,
  AlbumDomainModel.CreateAlbumPayload
> {
  const queryClient = useQueryClient()

  return useMutation<AlbumDomainModel.Album, Error, AlbumDomainModel.CreateAlbumPayload>({
    mutationFn: async (payload: AlbumDomainModel.CreateAlbumPayload): Promise<AlbumDomainModel.Album> => {
      const data = await app.dependencies.albumGateway.create(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['albums'] })
    },
  })
}
