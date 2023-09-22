import { observer } from 'mobx-react'
import { Button } from '@mui/material'
import FormatMessage from '../../dictionary'
import { AuthTitleBox, AuthTitleGreet, AuthTitleGreetSecind, AuthWrapper } from './AuthPage.styles'

const AuthPage = observer(() => {
  return (
    <AuthWrapper>
      <AuthTitleBox>
        <AuthTitleGreet>Привет!</AuthTitleGreet>
        <AuthTitleGreetSecind>Рады видеть тебя в Kuda</AuthTitleGreetSecind>
      </AuthTitleBox>
      <Button style={{ width: '60rem', height: '9rem', fontSize: '3rem', margin: '30% auto 0 auto', borderRadius: '3.5rem' }} variant="contained">
        {FormatMessage('login.page.login')}
      </Button>
      <Button style={{ width: '60rem', height: '9rem', fontSize: '3rem', margin: '10% auto 0 auto', borderRadius: '3.5rem' }} variant="outlined">
        {FormatMessage('login.page.signup')}
      </Button>
    </AuthWrapper>
  )
})

export default AuthPage
