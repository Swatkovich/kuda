import { styled } from '@mui/material/styles'

export const AuthWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}))

export const AuthTitleBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '60%',
}))

export const AuthTitleGreet = styled('div')(({ theme }) => ({
  fontSize: '6rem',
}))

export const AuthTitleGreetSecind = styled('div')(({ theme }) => ({
  fontSize: '3.33rem',
  marginTop: '5%',
}))
