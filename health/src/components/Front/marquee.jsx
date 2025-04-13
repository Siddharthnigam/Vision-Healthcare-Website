import React from 'react'
import {motion} from "framer-motion"

function marquee() {
  return (

<div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full -mt-40  py-10 rounded-tr-3xl rounded-tl-3xl bg-[#023047] '>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='text-[11vw] pr-20 leading-none font-["Neue Montreal"] font-bold uppercase  -mb-1 '>we are visionary</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='text-[11vw] pr-20 leading-none font-["Neue Montreal"] font-bold uppercase  -mb-1 '>we are visionary</motion.h1>

        </div>
    </div>
  )
}

export default marquee