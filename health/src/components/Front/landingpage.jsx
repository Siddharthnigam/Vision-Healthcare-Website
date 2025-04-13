import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
// import LocomotiveScroll from 'locomotive-scroll';
import loadingAudio from '../Images/start.mp3'; // Adjust the path to your audio file
import logo from '../Images/l.png'
import { NavLink } from 'react-router-dom';

function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3 // Increased the stagger delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.5 } } // Increased the duration
  };

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <motion.div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen text-zinc-900 pt-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <audio ref={audioRef} src={loadingAudio} />
      <center>
        <div className="textstructure w-[80%] mt-20 px-20">
          {["We provide", "eye-opening", "Health Solutions"].map((item, index) => (
            <motion.div className="masker" key={index} variants={itemVariants}>
              <div className="w-fit flex overflow-hidden items-center">
                {index === 1 && (
                  <motion.img
                  src={logo}
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 3, repeat: Infinity }} // Slower transition
                    className="w-[9vw] h-[6vw] rounded-full  relative"
                  ></motion.img>
                )}
                <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-["Neue Montreal"] font-bold'>
                  {item}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </center>

      <center>
        <hr className="my-4 w-[80%] border-t-4 border-gray-900" />
      </center>

      <div className='mt-5 flex justify-between items-center py-5 px-32'>
        {["For Yourself", "For Your Loved Ones"].map((item, index) => (
          <motion.p
            className='text-[3vh] font-medium tracking-tight leading-none'
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1.5 }} // Slower transition
          >
            {item}
          </motion.p>
        ))}
      
        <NavLink to="/services" >  <div className="start flex items-center gap-2">
          <motion.div
            className='px-3 text-1xl py-1 border-[3px] border-zinc-800 rounded-full font-medium text-small uppercase'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }} // Slower transition
          >
            Get Started
          </motion.div>
          <motion.div
            className='w-8 h-8 flex items-center justify-center border-[3px] border-zinc-700 rounded-full'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }} // Slower transition
          >
            <FaSquareArrowUpRight />
          </motion.div>
        </div></NavLink>
      </div>
    </motion.div>
  );
}

export default LandingPage;
