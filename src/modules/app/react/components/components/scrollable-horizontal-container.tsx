import React from "react";

type ScrollableHorizontalContainerProps = {
    children: React.ReactNode
}

export const ScrollableHorizontalContainer: React.FC<ScrollableHorizontalContainerProps> = (
    {children}: ScrollableHorizontalContainerProps): React.JSX.Element => {
    return (
        <div
            className="flex flex-row gap-2 overflow-x-auto w-full scroll-smooth snap-mandatory overscroll-contain px-5 no-scrollbar">
            {children}
        </div>
    )
}