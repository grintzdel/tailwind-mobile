'use client'

import { app } from '@/modules/app/core/main'
import { useAppDispatch } from '@/modules/app/core/store/store'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { setUser } from '@/modules/auth/core/store/auth.slice'
import { RegisterForm } from '@/modules/auth/react/components/register-form'
import { useRegister } from '@/modules/auth/react/hooks/mutations/use-register'
import { useCurrentUser } from '@/modules/user/react/hooks/queries/use-current-user'

export default function RegisterPage() {
  const { mutate: register, isPending, error } = useRegister()
  const { refetch: refetchCurrentUser } = useCurrentUser()
  const dispatch = useAppDispatch()

  const handleRegister = (credentials: AuthDomainModel.RegisterCredentials) => {
    register(credentials, {
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

  return <RegisterForm onSubmit={handleRegister} isPending={isPending} error={error} />
}
