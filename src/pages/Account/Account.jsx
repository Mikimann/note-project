import { useNavigate } from 'react-router';
import { useAuth } from '../../providers/useAuth';

const Account = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };
  return (
    <div>
      Welcome {auth.user}! This is your account!
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Account;
