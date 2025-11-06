import React from 'react';
import { Outlet } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <h2>My name is navbar</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;