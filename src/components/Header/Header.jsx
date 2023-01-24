import React from 'react';
import '../Header/Header.css';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';

export default function Header() {
  return (
    <header>
      <h1>
        <HighlightOutlinedIcon />
        Keeper
      </h1>
      <a href="/account">My Account</a>
    </header>
  );
}
