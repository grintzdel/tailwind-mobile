import React from 'react'

import { BrowseFiltersSection } from '@/modules/app/react/components/browse-filters.section'
import { ForYouSection } from '@/modules/app/react/components/for-you.section'
import { PopularSongsSection } from '@/modules/app/react/components/popular-songs.section'

export default function HomePage() {
  return (
    <React.Fragment>
      <BrowseFiltersSection />
      <ForYouSection />
      <PopularSongsSection />
    </React.Fragment>
  )
}
