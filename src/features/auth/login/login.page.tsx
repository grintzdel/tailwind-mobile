'use client'

import { app } from '@/modules/app/core/main'
import { useAppDispatch } from '@/modules/app/core/store/store'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { setUser } from '@/modules/auth/core/store/auth.slice'
import { LoginForm } from '@/modules/auth/react/components/login-form'
import { useLogin } from '@/modules/auth/react/hooks/mutations/use-login'
import { useCurrentUser } from '@/modules/user/react/hooks/queries/use-current-user'

export default function LoginPage() {
  const { mutate: login, isPending, error } = useLogin()
  const { refetch: refetchCurrentUser } = useCurrentUser()
  const dispatch = useAppDispatch()

  const handleLogin = (credentials: AuthDomainModel.LoginCredentials) => {
    login(credentials, {
      onSuccess: async (data) => {
        app.api.setToken(data.token, data.expiresIn)
        const { data: user } = await refetchCurrentUser()
        if (user) {
          dispatch(setUser(user))
        }
        window.location.href = '/'
      },
    })
  }

  return <LoginForm onSubmit={handleLogin} isPending={isPending} error={error} />
}
