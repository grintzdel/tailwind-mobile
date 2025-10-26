'use client';

import React from "react";

import {IoIosArrowBack} from "react-icons/io";
import {RiShareBoxFill} from "react-icons/ri";

import {ButtonIcon} from "@/ui/button";

export const SongHeader: React.FC = (): React.JSX.Element => {
    return (
        <div className="flex flex-row justify-between items-center gap-3 p-5">
            <ButtonIcon icon={IoIosArrowBack} href="/library" variant="lg" className="h-7 w-8"/>
            <h1>Now Playing</h1>
            <ButtonIcon icon={RiShareBoxFill} onClick={() => {
            }} variant="lg" className="h-7 w-8"/>
        </div>
    );
};