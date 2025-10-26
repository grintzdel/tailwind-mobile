import React from "react";

import {SongTile} from "@/modules/song/react/components/song-tile";
import {SongDomainModel} from "@/modules/song/core/model/song.domain-model";

type DisplayMode = 'tag' | 'artist';

export type SongItem = {
    img: string;
    title: string;
    tag?: SongDomainModel.Tag;
    artist?: string;
    duration?: number;
}

type SongListSectionProps = {
    songs: SongItem[];
    displayMode: DisplayMode;
}

export const SongListSection: React.FC<SongListSectionProps> = ({
                                                                    songs,
                                                                    displayMode
                                                                }: SongListSectionProps): React.JSX.Element => {
    return (
        <div className="flex flex-col gap-3 px-5">
            {songs.map((song, index) => (
                <SongTile
                    key={index}
                    img={song.img}
                    title={song.title}
                    tag={song.tag}
                    artist={song.artist}
                    displayMode={displayMode}
                    duration={song.duration}
                />
            ))}
        </div>
    );
};
