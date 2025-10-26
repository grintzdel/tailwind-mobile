import React from "react";

import {LibraryFiltersSection} from "@/modules/library/react/components/library-filters.section";
import {SongsCollectionSection} from "@/modules/library/react/components/songs-collection.section";

export default function LibraryPage() {
    return (
        <React.Fragment>
            <LibraryFiltersSection/>
            <SongsCollectionSection/>
        </React.Fragment>
    )
}
