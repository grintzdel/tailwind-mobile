'use client'

import React from "react";

import {Section} from "@/ui/section";
import {Button} from "@/ui/button";

export const PopularSection: React.FC = (): React.JSX.Element => {
    return (
        <Section
            title="Popular"
            headerAction={<Button text="Show all" variant="secondary" onClick={() => {}} />}
        >
            {/* TODO: Add popular content here */}
        </Section>
    )
}
