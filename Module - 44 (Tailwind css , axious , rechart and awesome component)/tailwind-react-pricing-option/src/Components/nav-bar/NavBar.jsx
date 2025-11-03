import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";



const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Services',
    path: '/services'
  },
  {
    id: 4,
    name: 'Portfolio',
    path: '/portfolio'
  },
  {
    id: 5,
    name: 'Blog',
    path: '/blog'
  },
  {
    id: 6,
    name: 'Contact',
    path: '/contact'
  }
];

const NavBar = () => {

  const [menu, setMenu] = useState(false)


  return (
    <div>
      <nav className='flex justify-between mx-10 items-center'>

        <span className='flex flex-row gap-5 justify-between items-center' onClick={() => setMenu(!menu)}>

          {

            menu ? <IoClose className='md:hidden'></IoClose>
              : <CiMenuBurger className='md:hidden' />
          }
          <ul className='flex flex-col md:hidden'>
          {
            navItems.map(items => <li className="ml-6"><a href={items.path}>{items.name}</a></li>)
          }
        </ul>
          <h3>My NavBar</h3>
        </span>



        <ul className='md:flex hidden'>
          {
            navItems.map(items => <li className='ml-6'><a href={items.path}>{items.name}</a></li>)
          }
        </ul>
        <button>
          login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;