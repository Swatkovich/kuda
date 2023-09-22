import { styled } from '@mui/material/styles'

export const MainWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}))

export const MainTitleBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30vh',
}))

export const MainTitleGreet = styled('div')(({ theme }) => ({
  fontSize: '8vw',
}))

export const MainTitleGreetSecind = styled('div')(({ theme }) => ({
  fontSize: '4vw',
  marginTop: '2vh',
}))
