import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../providers/useAuth';

export const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/account';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label htmlFor="">
        Username:{''}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <br />
        Password:
        <input type="password" name="" id="" />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
