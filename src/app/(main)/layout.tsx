import React from "react";

import {Header} from "@/ui/header";
import {Footer} from "@/ui/footer";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #662d99 0%, #241a33 45%, #141318 100%)',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Header/>
            <main className="flex flex-col gap-4">
                {children}
            </main>
            <Footer/>
        </div>
    );
}