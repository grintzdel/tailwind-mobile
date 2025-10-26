import React from "react";

import {Section} from "@/ui/section";
import {SongListSection, type SongItem} from "@/modules/shared/react/components/song-list-section";

const LIBRARY_SONGS: SongItem[] = [
    {img: "/song-1.jpeg", title: "Save Your Tears", artist: "The Weeknd"},
    {img: "/song-2.jpg", title: "Happier Than Ever", artist: "Billie Eilish"},
    {img: "/song-3.jpg", title: "Sunflower", artist: "Post Malone"},
    {img: "/song-4.jpeg", title: "Believer", artist: "Imagine Dragons"},
    {img: "/song-5.jpg", title: "Position", artist: "Ariana Grande"},
    {img: "/song-6.jpg", title: "Shivers", artist: "Ed Sheeran"},
    {img: "/song-7.jpeg", title: "Ghost", artist: "Justin Bieber"},
    {img: "/popular-1.jpg", title: "Random Song", artist: "Random Artist"},
];

export const SongsCollectionSection: React.FC = (): React.JSX.Element => {
    return (
        <Section>
            <SongListSection songs={LIBRARY_SONGS} displayMode="artist"/>
        </Section>
    )
}
