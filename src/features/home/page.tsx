import React from "react";

import {CategoriesSection} from "@/modules/app/react/components/categories.section";
import {ForYouSection} from "@/modules/app/react/components/for-you.section";
import {PopularSection} from "@/modules/app/react/components/popular.section";

export default function HomePage() {
    return (
        <React.Fragment>
            <CategoriesSection/>
            <ForYouSection/>
            <PopularSection/>
        </React.Fragment>
    )
}
