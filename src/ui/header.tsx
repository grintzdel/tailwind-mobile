import React from "react";

import {CiSearch} from "react-icons/ci";
import {IoMdNotificationsOutline} from "react-icons/io";

import {Avatar} from "@/ui/avatar";
import {IconWithCircle} from "@/ui/icon";

export const Header: React.FC = (): React.JSX.Element => {
    return (
        <header className="flex flex-row justify-between px-5 py-5">
            <Avatar src="/header-avatar.jpg"/>
            <div className="flex flex-row gap-2">
                <IconWithCircle icon={CiSearch} className="h-7 w-8"/>
                <IconWithCircle icon={IoMdNotificationsOutline} className="h-7 w-8"/>
            </div>
        </header>
    )
}
