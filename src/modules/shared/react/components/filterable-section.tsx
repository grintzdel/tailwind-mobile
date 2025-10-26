'use client';

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

import {ScrollableHorizontalContainer} from "@/modules/shared/react/components/scrollable-horizontal-container";

export type FilterableItem = {
    value: string;
    label: string;
}

type FilterableSectionProps = {
    title: string;
    titleSize?: 'xl' | '2xl' | '3xl';
    items: FilterableItem[];
    activeItem?: string;
    onItemClick: (value: string) => void;
}

export const FilterableSection: React.FC<FilterableSectionProps> = ({
                                                                        title,
                                                                        titleSize = '2xl',
                                                                        items,
                                                                        activeItem,
                                                                        onItemClick
                                                                    }: FilterableSectionProps): React.JSX.Element => {
    return (
        <Section title={title} titleSize={titleSize}>
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
        </Section>
    );
};
