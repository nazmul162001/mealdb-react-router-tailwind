import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='h-[80px] bg-indigo-400 flex justify-between items-center px-10'>
      <div className="logo">
      <Link to="/" className='text-3xl font-mono font-bold'>Logo</Link>
      </div>
      <div className="search-field">
        <input className='md:w-[300px] h-[35px] bg-indigo-300 rounded-r-full rounded-l-full border-0 pr-3 pl-5 placeholder-gray-500' placeholder='search your meal' type="search" name="" id="" />
      </div>
      <div className="nav-menu">
        <Link className='px-2 text-white text-xl' to="/">Home</Link>
        <Link className='px-2 text-white text-xl' to="/meals">Meal</Link>
        <Link className='px-2 text-white text-xl' to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;