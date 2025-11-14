'use client'

import { app } from '@/modules/app/core/main'
import { useAppDispatch } from '@/modules/app/core/store/store'
import { setUser } from '@/modules/auth/core/store/auth.slice'
import { useCurrentUser } from '@/modules/user/react/hooks/queries/use-current-user'
import React, { useEffect } from 'react'

export const AuthInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { data: user, refetch } = useCurrentUser()

  useEffect(() => {
    const initAuth = async () => {
      const token = app.api.getToken()
      const isExpired = app.api.isTokenExpired()

      if (token && !isExpired) {
        const { data: currentUser } = await refetch()
        if (currentUser) {
          dispatch(setUser(currentUser))
        }
      }
    }

    initAuth()
  }, [dispatch, refetch])

  return <>{children}</>
}
