import React from 'react'

import { type DisplayMode, SongTile } from '@/modules/song/react/components/song-tile'
import { SongDomainModel } from '@/modules/song/core/model/song.domain-model'

export type SongListItem = SongDomainModel.SongOverviewDto

type SongListSectionProps = {
  songs: SongListItem[]
  displayMode: DisplayMode
}

export const SongListSection: React.FC<SongListSectionProps> = ({
  songs,
  displayMode,
}: SongListSectionProps): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-3 px-5">
      {songs.map((song) => (
        <SongTile
          key={song.id}
          id={song.id}
          img={song.img}
          title={song.title}
          tag={song.tag}
          artist={song.artist}
          displayMode={displayMode}
          duration={song.duration}
        />
      ))}
    </div>
  )
}
