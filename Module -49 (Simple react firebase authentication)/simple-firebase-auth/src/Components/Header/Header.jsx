import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </div>
  );
};

export default Header;