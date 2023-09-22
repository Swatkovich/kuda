import { styled } from '@mui/material/styles'

export const MainWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  alignItems: 'center',
  paddingTop: '60vh',
  background: theme.palette.primary.dark,
  zIndex: 2,
  left: 0,
  transition: 'left 0.75s ease-in-out 0s',
}))

export const MainTitleGreet = styled('div')(({ theme }) => ({
  fontSize: '16vw',
  color: 'transparent',
  transition: 'color 2s ease-in-out 0s',
}))
