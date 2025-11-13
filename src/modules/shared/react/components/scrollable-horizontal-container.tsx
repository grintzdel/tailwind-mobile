import React from 'react'

type ScrollableHorizontalContainerProps = {
  children: React.ReactNode
}

export const ScrollableHorizontalContainer: React.FC<ScrollableHorizontalContainerProps> = ({
  children,
}: ScrollableHorizontalContainerProps): React.JSX.Element => {
  return (
    <div className="no-scrollbar flex w-full snap-mandatory flex-row gap-2 overflow-x-auto overscroll-contain scroll-smooth px-5">
      {children}
    </div>
  )
}
