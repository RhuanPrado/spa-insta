import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// Theme
import { defaultTheme } from 'src/styles/theme'

// Reducer
import store from '../store/reducers'

type RootProviderProps = {
  children: ReactNode
}

function RootProvider({
  children,
}: RootProviderProps) {

  const theme = defaultTheme

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default RootProvider
