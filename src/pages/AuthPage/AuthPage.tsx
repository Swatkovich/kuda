import { observer } from 'mobx-react'
import { Box } from '@mui/material'
import FormatMessage from '../../dictionary'
import { AuthTitleBox, AuthTitleGreet, AuthTitleGreetSecind, AuthWrapper, ButtonsWrapper, StyledButton } from './AuthPage.styles'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

const AuthPage = observer(() => {
  const navigate = useNavigate()

  const changePage = useCallback(
    (route: string) => {
      navigate(route)
    },
    [navigate]
  )

  return (
    <AuthWrapper>
      <AuthTitleBox>
        <AuthTitleGreet>Привет!</AuthTitleGreet>
        <AuthTitleGreetSecind>Рады видеть тебя в Kuda</AuthTitleGreetSecind>
      </AuthTitleBox>
      <ButtonsWrapper>
        <StyledButton variant="contained" onClick={() => changePage('/login')}>
          {FormatMessage('login.page.login')}
        </StyledButton>
        <Box mt="5vh">
          <StyledButton variant="outlined" onClick={() => changePage('/registration')}>
            {FormatMessage('login.page.signup')}
          </StyledButton>
        </Box>
      </ButtonsWrapper>
    </AuthWrapper>
  )
})

export default AuthPage
