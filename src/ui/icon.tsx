import React from "react";
import {IconType} from "react-icons";

type IconWithCircleProps = {
    icon: IconType;
    className?: string;
}

export const IconWithCircle: React.FC<IconWithCircleProps> = ({icon: Icon, className}: IconWithCircleProps): React.JSX.Element => {
    return (
        <div className="flex justify-center content-center items-center p-5 w-auto border border-white rounded-full bg-transparent">
            <Icon width={10} height={10} className={className} />
        </div>
    )
}
