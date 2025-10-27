import React from "react";

import {SongHeader} from "@/modules/song/react/layout/song-header";
import {SongFooter} from "@/modules/song/react/layout/song-footer";

export default function SongLayout({children}: { children: React.ReactNode }) {
    return (
        <div
            className="min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #662d99 0%, #241a33 45%, #141318 100%)'
            }}
        >
            <SongHeader/>
            <main className="max-h-dvh">
                {children}
            </main>
            <SongFooter/>
        </div>
    );
}