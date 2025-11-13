import { useLogin } from './mutations/use-login'
import { useRegister } from './mutations/use-register'
import { useLogout } from './mutations/use-logout'
import { app } from '@/modules/app/core/main'

export const useAuth = () => {
  const loginMutation = useLogin()
  const registerMutation = useRegister()
  const logoutMutation = useLogout()

  const isAuthenticated = () => {
    const token = app.api.getToken()
    return token !== null && !app.api.isTokenExpired()
  }

  return {
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    logout: logoutMutation.mutate,
    logoutAsync: logoutMutation.mutateAsync,

    isLoginPending: loginMutation.isPending,
    isRegisterPending: registerMutation.isPending,
    isLogoutPending: logoutMutation.isPending,

    loginError: loginMutation.error,
    registerError: registerMutation.error,
    logoutError: logoutMutation.error,

    isAuthenticated: isAuthenticated(),
  }
}
