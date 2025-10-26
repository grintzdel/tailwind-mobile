'use client';

import React from "react";

import {Button} from "@/ui/button";
import {ScrollableHorizontalContainer} from "@/modules/shared/react/components/scrollable-horizontal-container";

export type FilterableItem = {
    value: string;
    label: string;
}

type FilterableSectionProps = {
    items: FilterableItem[];
    activeItem?: string;
    onItemClick: (value: string) => void;
}

export const FilterableSection: React.FC<FilterableSectionProps> = ({
                                                                        items,
                                                                        activeItem,
                                                                        onItemClick
                                                                    }: FilterableSectionProps): React.JSX.Element => {
    return (
        <ScrollableHorizontalContainer>
            {items.map((item) => (
                <Button
                    key={item.value}
                    text={item.label}
                    onClick={() => onItemClick(item.value)}
                    variant={activeItem === item.value ? "primary" : "primary"}
                />
            ))}
        </ScrollableHorizontalContainer>
    );
};
