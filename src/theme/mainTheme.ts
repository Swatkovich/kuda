// import { mainTheme } from './mainTheme';
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

function mainThemeBase(isDarkTheme?: boolean): Theme {
  return createTheme({
    palette: {
      primary: {
        main: isDarkTheme ? '#1B1B1B' : '#ffffff',
        light: '#6F1E1E',
        dark: '#64313E',
      },
      secondary: {
        main: '#333333',
      },
      error: {
        main: '#DB4A4A',
      },
      text: {
        primary: isDarkTheme ? '#d4d4d4' : '#262323',
        secondary: '#424242',
        disabled: '#797979',
      },
    },
    typography: {
      fontFamily: ['Gilroy', 'sans-serif'].join(','),
    },
    components: {},
  })
}

export function mainTheme(isDarkTheme?: boolean): Theme {
  return createTheme({
    ...mainThemeBase(isDarkTheme),
    components: {
      MuiButton: {
        defaultProps: {
          disableTouchRipple: true,
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            transition: 'color 0.05s ease-in-out 0s, background-color 0.5s ease-in-out 0s',
            fontSize: '3vw',
            textTransform: 'none',
          },
          contained: {
            boxShadow: 'none',
            background: mainThemeBase(isDarkTheme).palette.primary.dark,
            color: mainThemeBase(true).palette.text.primary,
            '&:hover': {
              boxShadow: 'none',
              background: mainThemeBase(isDarkTheme).palette.primary.dark,
            },
          },
          outlined: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            border: `0.25vw solid ${mainThemeBase(isDarkTheme).palette.primary.dark}`,
            '&:hover': {
              borderColor: mainThemeBase(isDarkTheme).palette.primary.dark,
            },
          },
        },
      },
    },
  })
}
