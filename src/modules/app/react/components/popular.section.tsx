'use client'

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

import {SongTile} from "@/modules/song/react/components/song-tile";

export const PopularSection: React.FC = (): React.JSX.Element => {
    return (
        <Section
            title="Popular"
            headerAction={<Button text="Show all" variant="secondary" onClick={() => {
            }}/>}
        >
            <div className="flex flex-col gap-3 px-5">
                <SongTile img="/popular-1.jpg" title="Blinding Light" tag="top hit"/>
                <SongTile img="/popular-2.jpg" title="Ocean Eyes" tag="soft vibe"/>
                <SongTile img="/popular-3.jpg" title="Circle Run" tag="fan fav"/>
                <SongTile img="/popular-1.jpg" title="Random Song" tag="random song"/>
            </div>
        </Section>
    )
}
