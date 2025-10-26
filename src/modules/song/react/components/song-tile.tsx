import React from "react";

import Image from "next/image";

import {MdPlayArrow} from "react-icons/md";

import {SongDomainModel} from "@/modules/song/core/model/song.domain-model";
import {IconWithCircle} from "@/ui/icon";

type DisplayMode = 'tag' | 'artist';

type SongTileProps = {
    img: string;
    title: string;
    tag?: SongDomainModel.Tag;
    artist?: string;
    displayMode: DisplayMode;
}

export const SongTile: React.FC<SongTileProps> = ({
                                                      img,
                                                      title,
                                                      tag,
                                                      artist,
                                                      displayMode
                                                  }: SongTileProps): React.JSX.Element => {
    const subtitle = displayMode === 'tag' ? tag : artist;

    return (
        <div className="flex flex-row gap-4 justify-between items-center">
            <div className="flex flex-row gap-3 items-center content-center">
                <div className="rounded-xl h-[60px] w-[60px] flex-shrink-0">
                    <Image src={img} alt={img} height={60} width={60}
                           className="rounded-xl object-cover h-full w-full"/>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-medium">{title}</h3>
                    <p className="font-light text-white/70 text-sm capitalize">{subtitle}</p>
                </div>
            </div>
            <IconWithCircle icon={MdPlayArrow} className="h-7 w-8" variant="sm"/>
        </div>
    )
}
