import React from "react";

type SectionProps = {
    title?: string;
    titleSize?: 'xl' | '2xl' | '3xl';
    headerAction?: React.ReactNode;
    children?: Readonly<React.ReactNode>;
}

export const Section: React.FC<SectionProps> = ({
                                                    title,
                                                    titleSize = 'xl',
                                                    headerAction,
                                                    children
                                                }: SectionProps): React.JSX.Element => {
    const titleSizeClasses = {
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl'
    };

    return (
        <section className="flex flex-col gap-3">
            {title && (
                <div className={headerAction ? "flex flex-row justify-between items-center px-5" : "px-5"}>
                    <h2 className={`font-bold ${titleSizeClasses[titleSize]}`}>{title}</h2>
                    {headerAction && headerAction}
                </div>
            )}
            {children}
        </section>
    );
}

