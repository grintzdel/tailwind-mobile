import React from "react";

type SectionProps = {
    children: Readonly<React.ReactNode>
}

const SectionHeader: React.FC = (): React.JSX.Element => {
    return (
        <h1>TODO : Title here</h1>
    )
}

export const Section: React.FC<SectionProps> = ({children}: SectionProps): React.JSX.Element => {
    return (
        <section className="flex flex-col gap-3">
            {children}
        </section>
    )
}