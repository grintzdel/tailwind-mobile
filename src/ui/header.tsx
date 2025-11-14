import React from 'react'

import { CiSearch } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'

import { Avatar } from '@/ui/avatar'
import { ButtonIcon } from '@/ui/button'

type HeaderProps = {
  isAuthenticated: boolean
  showDropdown: boolean
  onUserIconClick: () => void
  onAvatarClick: () => void
  onLogout: () => void
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  showDropdown,
  onUserIconClick,
  onAvatarClick,
  onLogout,
}): React.JSX.Element => {
  return (
    <header className="flex flex-row justify-between p-5">
      <div className="relative">
        {isAuthenticated ? (
          <>
            <div onClick={onAvatarClick} className="cursor-pointer">
              <Avatar src="/header-avatar.jpg" />
            </div>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-white/10 bg-black/80 shadow-lg backdrop-blur-xl">
                <button
                  onClick={onLogout}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm text-white transition-colors hover:bg-white/10"
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </>
        ) : (
          <ButtonIcon icon={FiUser} className="h-7 w-8" onClick={onUserIconClick} />
        )}
      </div>
      <div className="flex flex-row gap-2">
        <ButtonIcon icon={CiSearch} className="h-7 w-8" />
        <ButtonIcon icon={IoMdNotificationsOutline} className="h-7 w-8" />
      </div>
    </header>
  )
}
