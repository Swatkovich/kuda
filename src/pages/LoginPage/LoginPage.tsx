import './LoginPage.css';
import { observer } from 'mobx-react';
import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormatMessage from '../../dictionary';

const LoginPage = observer(() => {
  const navigate = useNavigate();

  const changePage = useCallback(
    (route: string) => {
      navigate(route);
    },
    [navigate]
  );

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = useCallback(() => {}, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value);
    }
    if (event.target.id === 'password') {
      setPassword(event.target.value);
    }
  }, []);

  return (
    <div className="loginPage-wrapper">
      <div className="formContainer">
        <form autoComplete="false" onSubmit={handleSubmit}>
          <div className="form">
            <input
              autoComplete="off"
              className="formInput"
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            ></input>
            <div className="password">
              <input
                className="formInput"
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="off"
              ></input>
              <div
                className="showIcon"
                onClick={() => setShowPassword(!showPassword)}
              >
                O
              </div>
            </div>
            <button className="formButton" type="submit">
              {FormatMessage('login.page.login')}
            </button>
            <div className="signUp" onClick={() => changePage('/registration')}>
              {FormatMessage('login.page.signup')}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default LoginPage;
