import React from "react";

import Link from "next/link";

import type {IconType} from "react-icons";
import {TiHomeOutline} from "react-icons/ti";
import {CiMusicNote1, CiSettings} from "react-icons/ci";

import {GLASS_EFFECT, ACTIVE_NAV_ITEM, GRADIENT_BG} from "@/modules/app/react/constants/style.constant";

type FooterLinkProps = {
    icon: IconType;
    href: string;
    isActive: boolean;
};

const FooterLink: React.FC<FooterLinkProps> = ({icon: Icon, href, isActive}: FooterLinkProps): React.JSX.Element => {
    return (
        <li>
            <Link
                href={href}
                className={`
                    relative cursor-pointer transition-all duration-300 block p-5
                    ${isActive ? `rounded-full ${GRADIENT_BG.className}` : ''}
                `}
                style={isActive ? ACTIVE_NAV_ITEM.style : undefined}
            >
                <Icon className="relative z-10 text-white text-3xl"/>
            </Link>
        </li>
    );
};

type FooterLinksListProps = {
    children: React.ReactNode;
};

const FooterLinksList: React.FC<FooterLinksListProps> = ({children}: FooterLinksListProps): React.JSX.Element => {
    return (
        <nav>
            <ul className={`relative rounded-full ${GLASS_EFFECT.container} p-1`}>
                <div
                    className={GLASS_EFFECT.border}
                    style={GLASS_EFFECT.borderStyle}
                />
                <div className="relative z-10 flex flex-row gap-1 items-center">
                    {children}
                </div>
            </ul>
        </nav>
    );
};

type FooterProps = {
    activePage?: string;
};

export const Footer: React.FC<FooterProps> = ({activePage = 'home'}): React.JSX.Element => {
    return (
        <footer className="absolute bottom-5 w-full flex justify-center">
            <FooterLinksList>
                <FooterLink
                    icon={TiHomeOutline}
                    href="/"
                    isActive={activePage === 'home'}
                />
                <FooterLink
                    icon={CiMusicNote1}
                    href="/songs"
                    isActive={activePage === 'songs'}
                />
                <FooterLink
                    icon={CiSettings}
                    href="/settings"
                    isActive={activePage === 'settings'}
                />
            </FooterLinksList>
        </footer>
    )
}