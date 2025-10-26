'use client'

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

import {SongTile} from "@/modules/app/react/components/components/song-tile";

export const PopularSection: React.FC = (): React.JSX.Element => {
    return (
        <Section
            title="Popular"
            headerAction={<Button text="Show all" variant="secondary" onClick={() => {
            }}/>}
        >
            <div className="flex flex-col gap-3 px-5">
                <SongTile img="/popular-1.jpg" title="Blinding Light" tag="Top Hit"/>
                <SongTile img="/popular-2.jpg" title="Ocean Eyes" tag="Soft Vibe"/>
                <SongTile img="/popular-3.jpg" title="Circle Run" tag="Fan Fav"/>
                <SongTile img="/popular-1.jpg" title="Random Song" tag="Random Song"/>
            </div>
        </Section>
    )
}
