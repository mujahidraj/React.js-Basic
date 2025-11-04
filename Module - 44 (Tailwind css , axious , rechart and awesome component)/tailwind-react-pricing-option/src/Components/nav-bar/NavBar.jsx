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
      <nav className='flex  mx-10 justify-between items-start'>

        <span className='flex flex-row gap-5 justify-between ' onClick={() => setMenu(!menu)}>

          {

            menu ? <IoClose className='md:hidden'></IoClose>
              : <CiMenuBurger className='md:hidden' />
          }
          {/*  md:hidden */}
          <ul className={`${menu ? "flex flex-col  top-8 absolute " : "hidden"}`}>
          {
            navItems.map(items => <li className=" hover:bg-emerald-600 bg-slate-400 text-black pr-8 pl-2 text-left"><a href={items.path}>{items.name}</a></li>)
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