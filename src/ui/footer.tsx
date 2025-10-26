'use client';

import React, {useEffect, useState} from "react";

import Link from "next/link";
import {usePathname} from "next/navigation";

import type {IconType} from "react-icons";
import {TiHomeOutline} from "react-icons/ti";
import {CiMusicNote1, CiSettings} from "react-icons/ci";

import {GLASS_EFFECT, ACTIVE_NAV_ITEM, GRADIENT_BG} from "@/modules/shared/constants/style.constant";

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
                className="relative cursor-pointer block p-5 rounded-full"
            >
                <div
                    className={`absolute inset-0 rounded-full ${GRADIENT_BG.className} transition-opacity duration-500 ease-in-out`}
                    style={{
                        opacity: isActive ? 1 : 0,
                    }}
                />
                <div
                    className="absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out"
                    style={{
                        opacity: isActive ? 1 : 0,
                        boxShadow: ACTIVE_NAV_ITEM.style.boxShadow,
                    }}
                />
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

export const Footer: React.FC = (): React.JSX.Element => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="absolute bottom-5 w-full flex justify-center">
            <FooterLinksList>
                <FooterLink
                    icon={TiHomeOutline}
                    href="/"
                    isActive={mounted && pathname === '/'}
                />
                <FooterLink
                    icon={CiMusicNote1}
                    href="/library"
                    isActive={mounted && pathname === '/library'}
                />
                <FooterLink
                    icon={CiSettings}
                    href="/settings"
                    isActive={mounted && pathname === '/settings'}
                />
            </FooterLinksList>
        </footer>
    )
}