'use client';

import React from "react";

import {Button} from "@/ui/button";
import {ScrollableHorizontalContainer} from "@/modules/app/react/components/components/scrollable-horizontal-container";
import {Section} from "@/ui/section";

const voidOnClick = (): void => {
    return
}

export const CategoriesSection: React.FC = (): React.JSX.Element => {
    return (
        <Section title="Hello, Alex" titleSize="3xl">
            <ScrollableHorizontalContainer>
                <Button text="All" onClick={voidOnClick} variant="primary"/>
                <Button text="New Artist" onClick={voidOnClick} variant="primary"/>
                <Button text="Hot Tracks" onClick={voidOnClick} variant="primary"/>
                <Button text="Editor's Picks" onClick={voidOnClick} variant="primary"/>
                <Button text="Random Button" onClick={voidOnClick} variant="primary"/>
            </ScrollableHorizontalContainer>
        </Section>
    )
}