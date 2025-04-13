import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full h-[70vh] bg-zinc-900 flex'>
      <div className='w-1/2 font-["Neue Montreal"] pl-10'>
        <h1 className='text-[8vw] font-semibold uppercase leading-none mt-10'>Eye-</h1>
        <h1 className='text-[8vw] font-semibold uppercase leading-none'>Opening</h1>
      </div>
      <div className='w-1/2 font-["Neue Montreal"]'>
        <div className='w-full flex justify-center'>
          <h1 className='text-[8vw] font-semibold uppercase leading-none mt-10'>Vision</h1>
        </div>
        <div className='w-full flex justify-end'>
          <h1 className='text-[3vw] pr-10'>HEALTH-CARE</h1>
        </div>
        <div className='w-full flex'>
          <div className='det w-1/2 grid text-xl mt-20 leading-none'>
            <h1>Social:</h1>
            <br />
            <a href='#'>Instagram</a>
            <a href='#'>Facebook</a>
            <a href='#'>LinkedIn</a>
          </div>
          <div className='det w-1/2 grid gap-1 text-xl px-20 mt-20 leading-none'>
            <h1>Menu:</h1>
            <br />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
  
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
