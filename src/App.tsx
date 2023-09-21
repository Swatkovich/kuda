import './App.css';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';

import { FC } from 'react';
import LoginPage from './pages/LoginPage';

const App: FC = observer(() => {
  return (
    <div className="allApp">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/profile" element={<UserPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/registration" element={<RegisterPage />}></Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
});

export default App;
