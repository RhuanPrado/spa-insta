import { useRouter } from 'next/router'
import {
  ReactNode, useEffect, useState,
} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies

// Store
import { useAppSelector } from 'src/store/reducers'



type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps) {

  const { push, pathname } = useRouter()

  // States
  const [loading, setLoading] = useState(true)

  const user = useAppSelector(state => state.user)

  const privateRoutes = {
    '/posts': '/posts',
  }

  useEffect(() => {
    if (!!privateRoutes[pathname] && typeof window !== 'undefined') {
      const token = localStorage?.getItem('token') || ''
      if (!user && !!token) push('/posts')
      if (!user && !token) push('/login')
    } else {
      setTimeout(() => setLoading(false), 1000)
    }
  }, [pathname])

  return loading ? (<>loading...</>
  ) : children as JSX.Element
}
export default AuthProvider
