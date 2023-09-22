import { observer } from 'mobx-react'
import { ChangeEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormatMessage from '../../dictionary'
import {
  PasswordWrapper,
  RegistrationTitleBox,
  RegistrationWrapper,
  ShowPasswordIcon,
  StyledButton,
  StyledForm,
  StyledInput,
} from './RegistrationPage.styles'
import { Box } from '@mui/material'

const RegistrationPage = observer(() => {
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

  return (
    <RegistrationWrapper>
      <RegistrationTitleBox>KUDA</RegistrationTitleBox>
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
        <Box mt="3vh">
          <StyledInput
            className="formInput"
            type={showPassword ? 'text' : 'password'}
            id="passwordConfirm"
            value={password}
            onChange={handleChange}
            placeholder="Повторите пароль"
            autoComplete="off"
          ></StyledInput>
        </Box>
        <StyledButton variant="contained" className="formButton" type="submit" onClick={() => changePage('/')}>
          {FormatMessage('login.page.signup')}
        </StyledButton>
      </StyledForm>
    </RegistrationWrapper>
  )
})

export default RegistrationPage
