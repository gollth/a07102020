import React, { useContext } from 'react';
import { ThemeContext } from './contexts';
import { Link } from 'react-router-dom';

const Header = ({ text }) => {
  const { primaryColor } = useContext(ThemeContext);
  return (
    <Link to="/">
      <h1 style={{ color: primaryColor }} >{text}</h1>
    </Link>
  );
};
export default Header;