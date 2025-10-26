import React, {MouseEventHandler} from 'react';

import {MdKeyboardArrowRight} from 'react-icons/md';

import {GRADIENT_BG, GLASS_EFFECT} from '@/modules/shared/constants/style.constant';

type ButtonVariants = 'primary' | 'secondary';

type ButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    variant?: ButtonVariants;
    isActive?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  className = '',
                                                  variant = 'primary',
                                                  isActive = false
                                              }) => {
    if (variant === 'secondary') {
        return (
            <button
                onClick={onClick}
                className={`
          flex flex-row gap-1 justify-center items-center
          font-light text-white/70 text-sm
          transition-all duration-300
          ${className}
        `}
            >
                <span>{text}</span>
                <MdKeyboardArrowRight className="text-2xl"/>
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`
        group relative px-5 py-2 rounded-full max-w-fit
        font-medium text-white text-lg
        transition-all duration-300
        ${isActive ? GRADIENT_BG.className : GLASS_EFFECT.container}
        ${className}
      `}
            style={{
                boxShadow: isActive
                    ? GRADIENT_BG.shadow
                    : 'none'
            }}
        >
            {!isActive && (
                <>
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
                        className={`absolute inset-0 rounded-full ${GRADIENT_BG.className} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div
                        className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                            pointerEvents: 'none'
                        }}
                    />
                </>
            )}

            {isActive && (
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }}
                />
            )}

            <span className="relative z-10 whitespace-nowrap text-sm">
        {text}
      </span>
        </button>
    );
};
