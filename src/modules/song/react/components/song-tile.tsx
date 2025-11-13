import React from 'react'

import Image from 'next/image'

import { MdPlayArrow } from 'react-icons/md'

import { ButtonIcon } from '@/ui/button'
import { formatDuration } from '@/modules/song/react/utils/duration.utils'
import { SongListItem } from '@/modules/shared/react/components/song-list-section'

type DisplayMode = 'tag' | 'artist'

type SongTileProps = SongListItem & {
  displayMode: DisplayMode
}

export const SongTile: React.FC<SongTileProps> = ({
  id,
  img,
  title,
  tag,
  artist,
  displayMode,
  duration,
}: SongTileProps): React.JSX.Element => {
  const subtitle = displayMode === 'tag' ? tag : artist

  return (
    <div className="flex flex-row items-center justify-between gap-4">
      <div className="flex flex-row content-center items-center gap-3">
        <div className="h-[60px] w-[60px] flex-shrink-0 rounded-xl">
          <Image src={img} alt={img} height={60} width={60} className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm font-light text-white/50 capitalize">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        {duration && <span className="text-sm font-light text-white/50">{formatDuration(duration)}</span>}
        <ButtonIcon icon={MdPlayArrow} href={`/song/${id}`} className="h-7 w-8" variant="sm" />
      </div>
    </div>
  )
}
