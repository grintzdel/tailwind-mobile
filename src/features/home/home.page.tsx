import React from "react";

import {BrowseFiltersSection} from "@/modules/app/react/components/browse-filters.section";
import {ForYouSection} from "@/modules/app/react/components/for-you.section";
import {PopularSection} from "@/modules/app/react/components/popular.section";

export default function HomePage() {
    return (
        <React.Fragment>
            <BrowseFiltersSection/>
            <ForYouSection/>
            <PopularSection/>
        </React.Fragment>
    )
}
