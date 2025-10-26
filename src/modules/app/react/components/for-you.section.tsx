'use client'

import React from "react";

import {ScrollableHorizontalContainer} from "@/modules/app/react/components/components/scrollable-horizontal-container";
import {Card} from "@/ui/card";

export const ForYouSection: React.FC = (): React.JSX.Element => {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="px-5 font-bold text-xl">For you</h2>
            <ScrollableHorizontalContainer>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
            </ScrollableHorizontalContainer>
        </section>
    )
}