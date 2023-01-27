import { useNavigate } from 'react-router';

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div>
      Welcome! This is your account!
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Account;
