import React from "react";

import {IconType} from "react-icons";

type IconWithCircleProps = {
    icon: IconType;
    className?: string;
}

export const IconWithCircle: React.FC<IconWithCircleProps> = ({
                                                                  icon: Icon,
                                                                  className
                                                              }: IconWithCircleProps): React.JSX.Element => {
    return (
        <div
            className="group relative flex justify-center content-center items-center py-3 px-3 w-auto max-h-fit rounded-full bg-transparent backdrop-blur-sm">
            <div
                className="absolute inset-0 rounded-full p-[1px] transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.5) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                }}
            />

            <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8031f0] to-[#c231ed] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div
                className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}
            />

            <Icon width={38} height={32} className={`relative z-10 ${className}`}/>
        </div>
    )
}
