import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
// import { CssVarsProvider } from "@mui/joy";
import DarkModeSwitch from "src/components/common/DarkModeSwitch";
import { Box, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@data/redux/store";
import colorScheme, {
  colorSchemeSelector,
  DarkOrLight,
  setColorScheme,
} from "@data/redux/colorScheme";
import GlobalContainer from "src/components/common/GlobalContainer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const runColorSchemeDetect = () => {
  if (
    window &&
    window?.matchMedia &&
    window?.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    store.dispatch(setColorScheme("dark"));
  }
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const darkMode = useSelector((state: RootState) => state.colorScheme);
  // const darkMode = store.getState().colorScheme;
  const [darkMode, setDarkMode] = useState<RootState["colorScheme"]>(
    store.getState().colorScheme
  );

  store.subscribe(() => {
    if (store.getState().colorScheme !== darkMode) {
      setDarkMode(store.getState().colorScheme);
    }
  });

  /**
   * startup functions
   */
  useEffect(() => {
    runColorSchemeDetect();
  }, []);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider
          theme={theme({
            darkMode: darkMode === ("dark" as DarkOrLight),
          })}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

          <CssBaseline />
          <GlobalContainer>
            <Header />
            <Component {...pageProps} />
          </GlobalContainer>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

const Header = () => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          px: 0,
          display: "flex",
          justifyContent: "flex-end",
          margin: "auto",
          maxWidth: (theme) => theme.breakpoints.values.md,
        }}
      >
        <DarkModeSwitchWrapper />
      </Box>
    </>
  );
};

const DarkModeSwitchWrapper = () => {
  // const [darkMode, setDarkMode] = useState<boolean>(false);

  const darkMode = useSelector(colorSchemeSelector);
  const dispatch = useDispatch();

  return (
    <DarkModeSwitch
      checked={darkMode === ("dark" as DarkOrLight)}
      onChange={(_, checked: boolean) => {
        dispatch(setColorScheme(checked ? "dark" : "light"));
      }}
    />
  );
};
