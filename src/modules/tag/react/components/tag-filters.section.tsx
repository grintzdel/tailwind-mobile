'use client'

import React, { useState } from 'react'

import { type FilterableItem, FilterableSection } from '@/modules/shared/react/components/filterable-section'
import { Section } from '@/ui/section'

type BrowseFiltersSectionProps = {
  userName: string
  tags: FilterableItem[]
}

export const TagFiltersSection: React.FC<BrowseFiltersSectionProps> = ({
  userName,
  tags,
}: BrowseFiltersSectionProps): React.JSX.Element => {
  const [activeTag, setActiveTag] = useState<string>('all')

  const handleTagClick = (value: string): void => {
    setActiveTag(value)
  }

  const allTags: FilterableItem[] = [{ value: 'all', label: 'All' }, ...tags]

  return (
    <Section title={`Hello, ${userName}`} titleSize="2xl">
      <FilterableSection items={allTags} activeItem={activeTag} onItemClick={handleTagClick} />
    </Section>
  )
}
