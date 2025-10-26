'use client';

import React from "react";

import {FilterableSection, type FilterableItem} from "@/modules/shared/react/components/filterable-section";
import {LibraryDomainModel} from "@/modules/library/core/model/library.domain-model";

const LIBRARY_FILTERS: FilterableItem[] = [
    {value: 'all', label: 'All'},
    {value: 'liked songs', label: 'Liked Songs'},
    {value: 'playlists', label: 'Playlists'},
    {value: 'downloads', label: 'Downloads'},
];

export const LibraryFiltersSection: React.FC = (): React.JSX.Element => {
    const [activeFilter, setActiveFilter] = React.useState<LibraryDomainModel.Filter>('all');

    const handleFilterClick = (value: string): void => {
        setActiveFilter(value as LibraryDomainModel.Filter);
    };

    return (
        <FilterableSection
            title="Your Library"
            titleSize="2xl"
            items={LIBRARY_FILTERS}
            activeItem={activeFilter}
            onItemClick={handleFilterClick}
        />
    );
};