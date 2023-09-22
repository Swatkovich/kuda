import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

export const AuthWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}))

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    width: '100%',
    height: '7vh',
    fontSize: '5vw',
    borderRadius: '3.5vh',
  },
}))

export const ButtonsWrapper = styled('div')(({ theme }) => ({
  width: '77vw',
  margin: '10vh auto 0 auto',
  alignItems: 'center',
}))

export const AuthTitleBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30vh',
}))

export const AuthTitleGreet = styled('div')(({ theme }) => ({
  fontSize: '8vw',
}))

export const AuthTitleGreetSecind = styled('div')(({ theme }) => ({
  fontSize: '4vw',
  marginTop: '2vh',
}))
