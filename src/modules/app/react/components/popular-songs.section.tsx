'use client'

import React from 'react'

import { Section } from '@/ui/section'
import { Button } from '@/ui/button'

import { type SongListItem, SongListSection } from '@/modules/shared/react/components/song-list-section'

type PopularSongsSectionProps = {
  songs: SongListItem[]
}

export const PopularSongsSection: React.FC<PopularSongsSectionProps> = ({
  songs,
}: PopularSongsSectionProps): React.JSX.Element => {
  return (
    <Section title="Popular" headerAction={<Button text="Show all" variant="secondary" onClick={() => {}} />}>
      <SongListSection songs={songs} displayMode="tag" />
    </Section>
  )
}
