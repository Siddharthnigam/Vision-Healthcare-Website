import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';


function Featured() {
  const [cards] = useState([useAnimation(), useAnimation()]);

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className='w-full  text-zinc-900'><br />
      <div className='w-full px-20  pb-10'>
        <h1 className='text-[11vh] font-["Neue Montreal"] font-semibold tracking-tight'>Our services</h1>
         <hr class=" w-[35%]  border-t-8 border-gray-900" />
      </div>

      <div className='px-20'>
        <div className="cards w-full flex gap-10 ">
          <div
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHoverEnd(0)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vh] font-bold font-["Neue Montreal"]'>
              {"Asistant".split('').map((item, index) =>
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              )}
            </h1>
            <div className="card w-full h-full px-8 bg-[#004D43]  text-zinc-50 rounded-2xl overflow-hidden">
            <center> <h1 className='text-[8vh] font-["Neue Montreal"] font-semibold tracking-tight' >Ai Assistant</h1></center> 
            <h1  className='text-[4vh] font-["Neue Montreal"] font-semibold tracking-tight'>Artificial Intelligence (AI), a technology that is transforming the healthcare industry by providing unprecedented levels of efficiency, accuracy, and personalized care. Explore how AI is shaping the future of healthcare and discover the myriad benefits it brings to patients, healthcare providers, and the entire medical ecosystem</h1>
     <br />  <center>  <NavLink to='services'>   <button class="bg-zinc-100 hover:bg-blue-100 text-zinc-950 text-[3vh] font-bold py-2 px-12 rounded">
    Click To Use
</button></NavLink></center>

            </div>
          </div>

          <div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHoverEnd(1)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vh] font-bold  font-["Neue Montreal"]'>
              {"Videos".split('').map((item, index) =>
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              )}
            </h1>
            <div className="card w-full h-full px-8 bg-[#004D43]  text-zinc-50 rounded-2xl overflow-hidden">
            <center> <h1 className='text-[8vh] font-["Neue Montreal"] font-semibold tracking-tight' >Healthcare-videos</h1></center> 
            <h1  className='text-[4vh] font-["Neue Montreal"] font-semibold tracking-tight'>One of the most effective tools we've integrated into our platform is healthcare videos. These videos serve as a valuable resource, offering easy-to-understand treatments, and wellness tips. Discover how healthcare videos can enhance your understanding and empower you to make informed decisions.</h1>
     <br />  <center>   <NavLink to='services'> <button class="bg-zinc-100 hover:bg-blue-100 text-zinc-950 text-[3vh] font-bold py-2 px-12 rounded">
    Click To Use
</button></NavLink>   </center>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  );
}

export default Featured;
