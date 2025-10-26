'use client'

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

import {SongListSection, type SongListItem} from "@/modules/shared/react/components/song-list-section";

const POPULAR_SONGS: SongListItem[] = [
    {id: "1", img: "/popular-1.jpg", title: "Blinding Light", tag: "top hit"},
    {id: "2", img: "/popular-2.jpg", title: "Ocean Eyes", tag: "soft vibe"},
    {id: "3", img: "/popular-3.jpg", title: "Circle Run", tag: "fan fav"},
    {id: "4", img: "/popular-1.jpg", title: "Random Song", tag: "random song"},
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
