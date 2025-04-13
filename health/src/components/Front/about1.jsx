import React from 'react'
import v1 from '../Images/v.png'
import { NavLink } from 'react-router-dom';

function about1() {
  return (
    <div className='w-full text-black font-["Neue Montreal"] mt-6 p-20 bg-[#8ecae6] rounded-tl-3xl rounded-tr-3xl '>
        <h1 className=' text-[3vw] font-medium leading-[3.5vw] tracking-tight' >Vision Health-Care is more than just a website;
           it's a dedicated platform aimed at providing individuals with the information they need to navigate their health concerns.  </h1>
         <div className='w-full flex border-t-[6px] border-zinc-900 mt-10'>
         <div className='w-1/2 pt-5'>
        <h1 className='text-8xl font-bold'> Our Vision</h1><br />
     <NavLink to='about-us'>    <button className='px-10 py-4 bg-zinc-900 text-white rounded-3xl'>Read More</button></NavLink>

         </div>
         <div className='w-[40%] mt-20 h-[70vh] object-cover ml-16 bg-white rounded-3xl'>
         <img className=' w-full h-full rounded-3xl' src={v1} alt="" />
       </div>
   
         </div>
    </div>
  )
}

export default about1