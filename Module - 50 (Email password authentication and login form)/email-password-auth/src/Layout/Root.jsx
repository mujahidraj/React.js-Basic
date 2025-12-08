import React from 'react';
import { Outlet } from 'react-router';
import Navabr from '../Components/Navbar/Navabr';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <div>
      
      <Navabr></Navabr>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;