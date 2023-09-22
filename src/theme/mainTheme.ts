import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

export function mainTheme(isDarkTheme: boolean): Theme {
  return createTheme({
    palette: {
      primary: {
        main: isDarkTheme ? '#1B1B1B' : '#ffffff',
        // light: isDarkTheme ? '#eaf3ff' : '',
        // dark: isDarkTheme ? '#2862AF' : '',
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
  })
}
