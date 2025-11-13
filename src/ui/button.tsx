import React, { MouseEventHandler } from 'react'

import { IconType } from 'react-icons'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { GLASS_EFFECT, GRADIENT_BG } from '@/modules/shared/constants/style.constant'

type ButtonVariants = 'primary' | 'secondary'

type ButtonProps = {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
  variant?: ButtonVariants
  isActive?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  variant = 'primary',
  isActive = false,
}) => {
  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        className={`flex flex-row items-center justify-center gap-1 text-sm font-light text-white/50 transition-all duration-300 ${className} `}
      >
        <span>{text}</span>
        <MdKeyboardArrowRight className="text-2xl" />
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`group relative max-w-fit rounded-full px-5 py-2 text-lg font-medium transition-all duration-300 ${isActive ? GRADIENT_BG.className : GLASS_EFFECT.container} ${className} `}
      style={{
        boxShadow: isActive ? GRADIENT_BG.shadow : 'none',
      }}
    >
      {!isActive && (
        <>
          <div
            className="absolute inset-0 rounded-full p-[1px] transition-opacity duration-300"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.5) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          <div
            className={`absolute inset-0 rounded-full ${GRADIENT_BG.className} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />

          <div
            className="absolute inset-0 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {isActive && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
      )}

      <span className="relative z-10 text-sm whitespace-nowrap">{text}</span>
    </button>
  )
}

type ButtonIconVariants = 'lg' | 'sm'

type ButtonIconProps = {
  icon: IconType
  className?: string
  variant?: ButtonIconVariants
  onClick?: MouseEventHandler<HTMLButtonElement>
  href?: string
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  className,
  variant = 'lg',
  onClick,
  href,
}: ButtonIconProps): React.JSX.Element => {
  const padding = variant === 'lg' ? 'p-4' : 'p-2'

  const commonClasses = `group relative flex justify-center content-center items-center ${padding} w-auto max-h-fit rounded-full ${GLASS_EFFECT.container} cursor-pointer`

  const content = (
    <>
      <div
        className="absolute inset-0 rounded-full p-[1px] transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.5) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div
        className={`absolute inset-0 rounded-full ${GRADIENT_BG.className} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div
        className="absolute inset-0 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-50"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Icon width={38} height={32} className={`relative z-10 ${className}`} />
    </>
  )

  if (href) {
    return (
      <a href={href} className={commonClasses}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {content}
    </button>
  )
}
