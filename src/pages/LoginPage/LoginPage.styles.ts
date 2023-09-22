import MuiButton from '@mui/material/Button'
import MuiBox from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { mainTheme } from '../../theme/mainTheme'

export const LoginWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}))

export const StyledForm = styled('form')(({ theme }) => ({
  width: '77vw',
  margin: '10vh auto 0 auto',
  alignItems: 'center',
}))

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    width: '100%',
    height: '7vh',
    fontSize: '5vw',
    borderRadius: '3vh',
    marginTop: '5vh',
  },
}))

export const ButtonsWrapper = styled('div')(({ theme }) => ({
  width: '77vw',
  margin: '10vh auto 0 auto',
  alignItems: 'center',
}))

export const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '7vh',
  fontSize: '5vw',
  borderRadius: '3vh',
  background: 'none',
  paddingLeft: '10vw',
  boxSizing: 'border-box',
  boxShadow: 'none',
  border: `0.25vw solid ${mainTheme().palette.primary.dark}`,
  color: theme.palette.text.primary,
}))

export const PasswordWrapper = styled(MuiBox)(() => ({
  marginTop: '3vh',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}))

export const ShowPasswordIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  height: '6vw',
  width: '6vw',
  border: `0.25vw solid ${theme.palette.primary.dark}`,
  marginRight: '4vw',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '4vw',
  color: theme.palette.text.primary,
}))

export const LoginTitleBox = styled('div')(({ theme }) => ({
  marginTop: '25vh',
  color: theme.palette.text.primary,
  fontWeight: '700',
  fontSize: '8vw',
}))

export const RemindWrapper = styled('div')(({ theme }) => ({
  marginTop: '3vh',
  fontSize: '4vw',
}))

export const RemindButton = styled('span')(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer',
}))
