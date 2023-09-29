import { observer } from 'mobx-react'
import { ChangeEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormatMessage from '../../dictionary'
import {
  LoginTitleBox,
  LoginWrapper,
  PasswordWrapper,
  RemindButton,
  RemindWrapper,
  ShowPasswordIcon,
  StyledButton,
  StyledForm,
  StyledInput,
} from './LoginPage.styles'
import { useKeycloak } from '@react-keycloak/web'

const LoginPage = observer(() => {
  const { keycloak } = useKeycloak()
  const navigate = useNavigate()

  const changePage = useCallback(
    (route: string) => {
      navigate(route)
    },
    [navigate]
  )

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSubmit = useCallback(() => {}, [])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value)
    }
    if (event.target.id === 'password') {
      setPassword(event.target.value)
    }
  }, [])

  const loginAccount = useCallback(() => {
    keycloak.login()
    changePage('/main')
  }, [changePage, keycloak])

  return (
    <LoginWrapper>
      <LoginTitleBox>KUDA</LoginTitleBox>
      <StyledForm autoComplete="false" onSubmit={handleSubmit}>
        <StyledInput
          autoComplete="off"
          className="formInput"
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          placeholder="Введите логин"
        ></StyledInput>
        <PasswordWrapper>
          <StyledInput
            className="formInput"
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Введите пароль"
            autoComplete="off"
          ></StyledInput>
          <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>O</ShowPasswordIcon>
        </PasswordWrapper>
        {!keycloak.authenticated && (
          <StyledButton variant="contained" className="formButton" type="submit" onClick={loginAccount}>
            {FormatMessage('login.page.login')}
          </StyledButton>
        )}
      </StyledForm>
      <RemindWrapper>
        Забыли пароль? <RemindButton onClick={() => changePage('/main')}>Напомнить</RemindButton>
      </RemindWrapper>
    </LoginWrapper>
  )
})

export default LoginPage
