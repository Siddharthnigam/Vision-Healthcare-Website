import React from 'react'
import {motion} from "framer-motion"
import p1 from '../Images/h6.png'
import p2 from '../Images/h7.png'
import p3 from '../Images/h8.png'
import p4 from '../Images/h9.png'

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full  py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43] '>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap gap-32 overflow-hidden ">
           < motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p1} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p2} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p3} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p4} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p1} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p2} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p3} alt="" />
           <motion.img initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='w-[20vw] rounded-full' src={p4} alt="" />
     
        </div>
        <br /><br />
    </div>
  )
}

export default marquee