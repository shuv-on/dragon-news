import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../../assets/user.png' 

const NavBar = () => {
    const links = <>
        <li>
            <NavLink 
            to ="/"
            className={({isActive}) => 
            `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`}>Home</NavLink>
        </li>
        <li>
            <NavLink
            to ="/about"
            className={({isActive}) => 
            `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`}>About</NavLink>
        </li>
        <li>
            <NavLink 
            to = "/career"
            className={({isActive}) => 
            `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`}>Career</NavLink>
        </li>
    </>
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary">
        {links}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-secondary">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <img src={userImg} className='h-8' />
    <button className='btn bg-primary border-0 text-white'>Login</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;