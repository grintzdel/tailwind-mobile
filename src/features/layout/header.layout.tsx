'use client'

import { app } from '@/modules/app/core/main'
import { useAppDispatch } from '@/modules/app/core/store/store'
import { clearUser } from '@/modules/auth/core/store/auth.slice'
import { useLogout } from '@/modules/auth/react/hooks/mutations/use-logout'
import { useAuthState } from '@/modules/auth/react/hooks/use-auth-state'
import { Header } from '@/ui/header'
import React, { useState } from 'react'

export const HeaderLayout: React.FC = () => {
  const { isAuthenticated } = useAuthState()
  const [showDropdown, setShowDropdown] = useState(false)
  const { mutate: logout } = useLogout()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        app.api.clearToken()
        dispatch(clearUser())
        setShowDropdown(false)
        window.location.href = '/'
      },
    })
  }

  const handleUserIconClick = () => {
    if (!isAuthenticated) {
      window.location.href = '/login'
    } else {
      setShowDropdown(!showDropdown)
    }
  }

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <Header
      isAuthenticated={isAuthenticated}
      showDropdown={showDropdown}
      onUserIconClick={handleUserIconClick}
      onAvatarClick={handleAvatarClick}
      onLogout={handleLogout}
    />
  )
}
