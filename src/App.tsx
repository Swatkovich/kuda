import './App.css';
import './assets/colors.scss';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';

import { FC, useState } from 'react';
import LoginPage from './pages/LoginPage';
// import { ThemeProvider } from '@material-ui/core/styles'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './theme/mainTheme';
import { Button } from '@mui/material';

const App: FC = observer(() => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mainTheme(isDarkTheme)}>
        <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>123</Button>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/profile" element={<UserPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/registration" element={<RegisterPage />}></Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
});

export default App;
