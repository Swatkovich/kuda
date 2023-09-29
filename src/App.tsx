import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'

import { FC, useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme/mainTheme'
import { Button } from '@mui/material'
import { AppWrapper } from './App.styles'
import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import StartScreen from './pages/StartScreen'
import RegistrationPage from './pages/RegistrationPage'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloak'
import PrivateRoute from './helpers/PrivateRoute'

const App: FC = observer(() => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const [showText, setShowText] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setShowText(false)
    }, 3250)
  }, [])

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={mainTheme(isDarkTheme)}>
          <AppWrapper>
            {showText && <StartScreen />}
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/main"
                element={
                  <PrivateRoute>
                    <MainPage />
                  </PrivateRoute>
                }
              />
              <Route path="/registration" element={<RegistrationPage />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Button
              variant="outlined"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '25%',
                height: '5%',
                fontSize: '2vw',
              }}
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
              Theme change button
            </Button>
          </AppWrapper>
        </ThemeProvider>
      </StyledEngineProvider>
    </ReactKeycloakProvider>
  )
})

export default App
