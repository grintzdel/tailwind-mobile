'use client'

import React from "react";

import {ScrollableHorizontalContainer} from "@/modules/shared/react/components/scrollable-horizontal-container";
import {Card} from "@/ui/card";
import {Section} from "@/ui/section";

export const ForYouSection: React.FC = (): React.JSX.Element => {
    return (
        <Section title="For you">
            <ScrollableHorizontalContainer>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
                <Card title="Feel the Beat" subtitle="Explore trending tracks and hidden gems curated just for you."
                      href="#" bgImage="/card-1-media.jpg"/>
            </ScrollableHorizontalContainer>
        </Section>
    )
}