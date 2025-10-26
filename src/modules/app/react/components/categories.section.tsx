'use client';

import React from "react";

import {Button} from "@/ui/button";
import {ScrollableHorizontalContainer} from "@/modules/app/react/components/components/scrollable-horizontal-container";

const voidOnClick = (): void => {
    return
}

export const CategoriesSection: React.FC = (): React.JSX.Element => {
    return (
        <section className="flex flex-col gap-4 py-8">
            <h1 className="px-5 font-bold text-3xl">Hello, Alex</h1>
            <ScrollableHorizontalContainer>
                <Button text="All" onClick={voidOnClick} variant="primary"/>
                <Button text="New Artist" onClick={voidOnClick} variant="primary"/>
                <Button text="Hot Tracks" onClick={voidOnClick} variant="primary"/>
                <Button text="Editor's Picks" onClick={voidOnClick} variant="primary"/>
                <Button text="Random Button" onClick={voidOnClick} variant="primary"/>
            </ScrollableHorizontalContainer>
        </section>
    )
}