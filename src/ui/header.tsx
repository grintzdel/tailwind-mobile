import React from "react";
import {Avatar} from "@/ui/avatar";
import {IconWithCircle} from "@/ui/icon";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Header: React.FC = (): React.JSX.Element => {
    return (
        <header className="flex flex-row justify-between p-7">
            <Avatar src="/header-avatar.jpg" />
            <div className="flex flex-row gap-2">
                <IconWithCircle icon={CiSearch} className="h-4 w-4" />
                <IconWithCircle icon={IoMdNotificationsOutline} className="h-4 w-4" />
            </div>
        </header>
    )
}