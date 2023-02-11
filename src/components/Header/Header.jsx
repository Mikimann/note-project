import React from 'react';
import '../Header/Header.css';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
import { useAuth } from '../../providers/useAuth';

export default function Header() {
  const auth = useAuth();
  return (
    <header>
      <h1>
        <HighlightOutlinedIcon />
        Keeper
      </h1>
      <a href="/account">My Account</a>
      {!auth.user && (
        <a className="login" href="/login">
          Login
        </a>
      )}
    </header>
  );
}
