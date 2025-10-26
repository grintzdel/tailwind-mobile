import React from "react";

import {Section} from "@/ui/section";
import {SongListSection, type SongItem} from "@/modules/shared/react/components/song-list-section";

const LIBRARY_SONGS: SongItem[] = [
    {img: "/song-1.jpeg", title: "Save Your Tears", artist: "The Weeknd", duration: 215},
    {img: "/song-2.jpg", title: "Happier Than Ever", artist: "Billie Eilish", duration: 298},
    {img: "/song-3.jpg", title: "Sunflower", artist: "Post Malone", duration: 158},
    {img: "/song-4.jpeg", title: "Believer", artist: "Imagine Dragons", duration: 204},
    {img: "/song-5.jpg", title: "Position", artist: "Ariana Grande", duration: 172},
    {img: "/song-6.jpg", title: "Shivers", artist: "Ed Sheeran", duration: 207},
    {img: "/song-7.jpeg", title: "Ghost", artist: "Justin Bieber", duration: 153},
    {img: "/popular-1.jpg", title: "Random Song", artist: "Random Artist", duration: 180},
];

export const SongsCollectionSection: React.FC = (): React.JSX.Element => {
    return (
        <Section>
            <SongListSection songs={LIBRARY_SONGS} displayMode="artist"/>
        </Section>
    )
}
