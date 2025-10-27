'use client';

import React from "react";

import {RxLoop} from "react-icons/rx";
import {IoPlayBack} from "react-icons/io5";
import {CiPause1} from "react-icons/ci";
import {IoPlayForward} from "react-icons/io5";
import {ButtonIcon} from "@/ui/button";
import {LuListMusic} from "react-icons/lu";

const PlayBack: React.FC = (): React.JSX.Element => {
    const playback = () => {
        // TODO: add play back logic here
    }

    return (
        <button onClick={playback}><RxLoop/></button>
    )
}

const SongControls: React.FC = (): React.JSX.Element => {
    return (
        <div className="flex flex-rox gap-5">
            <button onClick={() => {
            }}><IoPlayBack/></button>
            <ButtonIcon icon={CiPause1} onClick={() => {
            }}/>
            <button onClick={() => {
            }}><IoPlayForward/></button>
        </div>
    )
}

const PlayForward: React.FC = (): React.JSX.Element => {
    const playForward = () => {
        // TODO: add play forward logic here
    }

    return (
        <button onClick={playForward}><LuListMusic/></button>
    )
}

export const SongFooter: React.FC = (): React.JSX.Element => {
    return (
        <footer className="flex flex-row gap-3 justify-between absolute bottom-5 w-full px-5">
            <PlayBack/>
            <SongControls/>
            <PlayForward/>
        </footer>
    );
}