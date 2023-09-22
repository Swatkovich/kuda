import { observer } from 'mobx-react'
import { Box } from '@mui/material'
import FormatMessage from '../../dictionary'
import { AuthTitleBox, AuthTitleGreet, AuthTitleGreetSecind, AuthWrapper, ButtonsWrapper, StyledButton } from './MainPage.styles'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

const MainPage = observer(() => {
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
        <AuthTitleGreet>A NIKUDA</AuthTitleGreet>
        <AuthTitleGreetSecind>Все сидим дома</AuthTitleGreetSecind>
      </AuthTitleBox>
      {/* <ButtonsWrapper>
        <StyledButton variant="contained" onClick={() => changePage('/login')}>
          {FormatMessage('login.page.login')}
        </StyledButton>
        <Box mt="5vh">
          <StyledButton variant="outlined">{FormatMessage('login.page.signup')}</StyledButton>
        </Box>
      </ButtonsWrapper> */}
    </AuthWrapper>
  )
})

export default MainPage
