import { styled } from '@mui/material/styles';

export const LoginWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  width: '100vw',
  height: '100vh',
}));

// (({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: theme
//   // justifyContent: 'flex-start',
// }));
