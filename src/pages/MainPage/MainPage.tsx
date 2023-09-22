import { observer } from 'mobx-react'
import { Box } from '@mui/material'
import FormatMessage from '../../dictionary'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { MainTitleBox, MainTitleGreet, MainTitleGreetSecind, MainWrapper } from './MainPage.styles'

const MainPage = observer(() => {
  const navigate = useNavigate()

  const changePage = useCallback(
    (route: string) => {
      navigate(route)
    },
    [navigate]
  )

  return (
    <MainWrapper>
      <MainTitleBox>
        <MainTitleGreet>A NIKUDA</MainTitleGreet>
        <MainTitleGreetSecind>Все сидим дома</MainTitleGreetSecind>
      </MainTitleBox>
      {/* <ButtonsWrapper>
        <StyledButton variant="contained" onClick={() => changePage('/login')}>
          {FormatMessage('login.page.login')}
        </StyledButton>
        <Box mt="5vh">
          <StyledButton variant="outlined">{FormatMessage('login.page.signup')}</StyledButton>
        </Box>
      </ButtonsWrapper> */}
    </MainWrapper>
  )
})

export default MainPage
