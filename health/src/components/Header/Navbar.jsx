import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/l.png'

function Navbar() {
  return (
    <div className=' z-[999] w-full px-20 py-8 font-["Neue Montreal"] text-zinc-900 flex justify-between'>
      <div className='flex justify-center -mt-8 gap-3' >
         {/* <h1 className='text-5xl font-extrabold'>Vision</h1> */}
        <img className='w-32 h-24' src={logo} alt="" />
      </div>

      <div className="links flex font-bold gap-10">
        <NavLink to="/" className='text-lg  capitalize'>Home</NavLink>
        <NavLink to="/services" className='text-lg  capitalize'>Services</NavLink>
        <NavLink to="/about-us" className='text-lg capitalize'>About us</NavLink>
        <NavLink to="/contact" className='text-lg capitalize'>Contact</NavLink>
        <NavLink to="/sign" className='text-lg  capitalize ml-32'>Sign up</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
