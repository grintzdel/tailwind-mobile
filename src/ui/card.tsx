import React from "react";

import Image from "next/image";

import {Button} from "./button";

type CardProps = {
    title: string;
    subtitle: string;
    bgImage: string;
    href: string;
    className?: string;
};

export const Card: React.FC<CardProps> = ({
                                              title,
                                              subtitle,
                                              bgImage,
                                              href,
                                              className = ""
                                          }): React.JSX.Element => {
    return (
        <div className={`relative rounded-3xl w-[84vw] flex-shrink-0 ${className}`}>
            <Image
                src={bgImage}
                alt={bgImage}
                width={400}
                height={500}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />

            <div className="relative z-10 flex flex-col gap-7 px-5 py-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold">{title}</h3>
                    <p className="text-white/80 text-sm max-w-[64%]">{subtitle}</p>
                </div>

                <Button
                    text="Start Listening"
                    variant="primary"
                    onClick={() => window.location.href = href}
                />
            </div>
        </div>
    );
}