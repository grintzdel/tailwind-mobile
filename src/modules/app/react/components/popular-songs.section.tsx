'use client'

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

import {SongListSection, SongItem} from "@/modules/shared/react/components/song-list-section";

const POPULAR_SONGS: SongItem[] = [
    {img: "/popular-1.jpg", title: "Blinding Light", tag: "top hit"},
    {img: "/popular-2.jpg", title: "Ocean Eyes", tag: "soft vibe"},
    {img: "/popular-3.jpg", title: "Circle Run", tag: "fan fav"},
    {img: "/popular-1.jpg", title: "Random Song", tag: "random song"},
];

export const PopularSongsSection: React.FC = (): React.JSX.Element => {
    return (
        <Section
            title="Popular"
            headerAction={<Button text="Show all" variant="secondary" onClick={() => {
            }}/>}
        >
            <SongListSection songs={POPULAR_SONGS} displayMode="tag"/>
        </Section>
    )
}
