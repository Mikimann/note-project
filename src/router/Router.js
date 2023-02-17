import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Account/Account';
import Login from '../pages/Login/Login';
import { ProtectedRoute } from '../containers/ProtectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route
        path="account"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
