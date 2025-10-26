'use client';

import React, {useState} from "react";

import {FilterableSection, type FilterableItem} from "@/modules/shared/react/components/filterable-section";
import {BrowseDomainModel} from "@/modules/browse/core/model/browse.domain-model";

const BROWSE_CATEGORIES: FilterableItem[] = [
    {value: 'all', label: 'All'},
    {value: 'new artist', label: 'New Artist'},
    {value: 'hot tracks', label: 'Hot Tracks'},
    {value: 'editor\'s picks', label: 'Editor\'s Picks'},
    {value: 'random', label: 'Random Button'},
];

export const BrowseFiltersSection: React.FC = (): React.JSX.Element => {
    const [activeCategory, setActiveCategory] = useState<BrowseDomainModel.Filter>('all');

    const handleCategoryClick = (value: string): void => {
        setActiveCategory(value as BrowseDomainModel.Filter);
    };

    return (
        <FilterableSection
            title="Hello, Alex"
            titleSize="2xl"
            items={BROWSE_CATEGORIES}
            activeItem={activeCategory}
            onItemClick={handleCategoryClick}
        />
    );
}