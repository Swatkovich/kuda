import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'

import { FC, useState } from 'react'
import LoginPage from './pages/LoginPage'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme/mainTheme'
import { Button } from '@mui/material'
import { AppWrapper } from './App.styles'
import AuthPage from './pages/AuthPage'

const App: FC = observer(() => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mainTheme(isDarkTheme)}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/profile" element={<UserPage />} /> */}
            {/* <Route path="/registration" element={<RegisterPage />}></Route> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Button
            variant="outlined"
            style={{
              position: 'absolute',
              top: '0px',
              width: '25%',
              height: '5%',
            }}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Theme change button
          </Button>
        </AppWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  )
})

export default App
