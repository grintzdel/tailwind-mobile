'use client'

import React from 'react'

import { ForYouSection } from '@/modules/app/react/components/for-you.section'
import { PopularSongsSection } from '@/modules/app/react/components/popular-songs.section'
import { type FilterableItem } from '@/modules/shared/react/components/filterable-section'
import { type SongListItem } from '@/modules/shared/react/components/song-list-section'
import { useSongs } from '@/modules/song/react/hooks/queries/use-songs'
import { TagFiltersSection } from '@/modules/tag/react/components/tag-filters.section'
import { useTags } from '@/modules/tag/react/hooks/queries/use-tags'
import { useCurrentUser } from '@/modules/user/react/hooks/queries/use-current-user'

export default function HomePage() {
  const { data: currentUser } = useCurrentUser()
  const { data: tags } = useTags()
  const { data: songs } = useSongs()

  const userName = currentUser?.name ?? 'Guest'

  const tagsAsFilterableItems: FilterableItem[] = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }))

  const songsAsSongListItems: SongListItem[] = songs.map((song) => {
    const tagName = song.tagId ? tags.find((tag) => tag.id === song.tagId)?.name : undefined

    return {
      id: song.id,
      img: song.coverImage ?? '/default-cover.jpg',
      title: song.name,
      duration: song.duration,
      tag: tagName,
    }
  })

  return (
    <React.Fragment>
      <TagFiltersSection userName={userName} tags={tagsAsFilterableItems} />
      <ForYouSection />
      <PopularSongsSection songs={songsAsSongListItems} />
    </React.Fragment>
  )
}
