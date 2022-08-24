import {
  createTheme,
  CustomThemeOptions,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles'
import { red, blue, blueGrey } from '@mui/material/colors'
import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomPaletteColor extends PaletteColor {
    gradient: string
  }
  interface CustomPalette extends Palette {
    primary: CustomPaletteColor
    secondary: CustomPaletteColor
  }

  interface Theme {
    palette: CustomPalette
  }

  interface CustomThemeOptions extends ThemeOptions {
    palette: CustomPalette
  }

  export function createTheme(options: CustomThemeOptions): Theme
}
// Create a theme instance.
const theme = (options?: { darkMode?: boolean }) =>
  createTheme({
    typography: {
      fontFamily: ['DM Sans', 'Montserrat', 'Arial', 'sans-serif'].join(','),
      // fontSize: 12,
      allVariants: {
        letterSpacing: -0.8,
        lineHeight: 'normal',
      },
      fontSize: 12,
    },
    palette: {
      // mode: "dark",
      mode: options?.darkMode ? 'dark' : 'light',
      primary: {
        // main: "#ff6c00",
        // main: red['A400'],
        // main: '#182848',
        main: '#50e3c2',
        gradient: `linear-gradient(45deg, #00C9FF 0%, #92FE9D 100%)`,
      },

      secondary: {
        // main: "#1C2A4A",
        // main: blueGrey['A400'],
        // main: '#50e3c2',
        main: '#182848',
        gradient: `linear-gradient(45deg, #4b6cb7 0%, #182848 100%)`,
      },
      error: {
        main: red.A400,
      },
      background: {
        // paper: options?.darkMode ? 'red' : '#f8f8f8',
        default: options?.darkMode ? '#182848' : '#f8f8f8',
      },
    },

    shape: {
      borderRadius: 24,
    },
  } as CustomThemeOptions)

export default theme
