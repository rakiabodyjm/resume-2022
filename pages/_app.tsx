import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
// import { CssVarsProvider } from "@mui/joy";
import DarkModeSwitch from 'src/components/common/DarkModeSwitch'
import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { RootState } from 'src/redux/store'
import {
  colorSchemeSelector,
  DarkOrLight,
  setColorScheme,
} from 'src/redux/colorScheme'
import GlobalContainer from 'src/components/common/GlobalContainer'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

/**
 * Aopllo GraphQL client
 */
const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const runColorSchemeDetect = () => {
  if (
    window &&
    window?.matchMedia &&
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    store.dispatch(setColorScheme('dark'))
  }
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  // const darkMode = useSelector((state: RootState) => state.colorScheme);
  // const darkMode = store.getState().colorScheme;
  const [darkMode, setDarkMode] = useState<RootState['colorScheme']>(
    store.getState().colorScheme
  )

  store.subscribe(() => {
    if (store.getState().colorScheme !== darkMode) {
      setDarkMode(store.getState().colorScheme)
    }
  })

  /**
   * startup functions
   */
  useEffect(() => {
    // runColorSchemeDetect()
    store.dispatch(setColorScheme('light'))
  }, [])

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ApolloProvider client={apolloClient}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <ThemeProvider
            theme={theme({
              darkMode: darkMode === ('dark' as DarkOrLight),
            })}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

            <CssBaseline />
            <GlobalContainer>
              {/* <Header /> */}
              <Component {...pageProps} />
            </GlobalContainer>
          </ThemeProvider>
        </ApolloProvider>
      </CacheProvider>
    </Provider>
  )
}

const Header = () => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          px: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          margin: 'auto',
        }}
      >
        <DarkModeSwitchWrapper />
      </Box>
    </>
  )
}

const DarkModeSwitchWrapper = () => {
  // const [darkMode, setDarkMode] = useState<boolean>(false);

  const darkMode = useSelector(colorSchemeSelector)
  const dispatch = useDispatch()

  return (
    <DarkModeSwitch
      checked={darkMode === ('dark' as DarkOrLight)}
      onChange={(_, checked: boolean) => {
        dispatch(setColorScheme(checked ? 'dark' : 'light'))
      }}
    />
  )
}
