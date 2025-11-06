import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import MainContent from '../MainContent/MainContent';
import MainContent2 from '../MainContent2/MainContent2';

const Navbar = () => {
  return (
    <div>
      <h2>My name is navbar</h2>
      {/* <a href="/">Home</a><a href="/MainContent">Main Content</a><a href="MainContent2">Main Content 2</a> */}
     
      {/* <Link to="MainContent">Main Contain</Link>
      <Link to="MainContent2">Main Contain 2</Link>
      <Link to="/">Home Contain</Link> */}

      <NavLink to="/">Home Content</NavLink>
      <NavLink to="MainContent">Main Content</NavLink>
      <NavLink to="MainContent2">Main Content 2</NavLink>

      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;