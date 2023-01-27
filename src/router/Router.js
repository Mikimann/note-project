import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Account/Account';

const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="account" element={<Profile />} />
    </Routes>
  );
};

export default Router;
