// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion, useAnimation } from 'framer-motion';

// function Featured() {
//   const [cards] = useState([useAnimation(), useAnimation()]);

//   const handleHover = (index) => {
//     cards[index].start({ y: "0" });
//   };

//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%" });
//   };

//   return (
//     <div className='w-full  text-zinc-900'><br />
     

//       <div className='px-20'>
//         <div className="cards w-full flex gap-10 ">
//           <div
//             onMouseEnter={() => handleHover(0)}
//             onMouseLeave={() => handleHoverEnd(0)}
//             className="card-container relative w-1/2 h-auto"
//           >
//             <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vh] font-bold font-["Neue Montreal"]'>
//               {"BMI".split('').map((item, index) =>
//                 <motion.span
//                   key={index}
//                   initial={{ y: "100%" }}
//                   animate={cards[0]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   className='inline-block'
//                 >
//                   {item}
//                 </motion.span>
//               )}
//             </h1>
//             <div className="card w-full h-auto px-8 bg-[#004D43]  text-zinc-50 rounded-2xl overflow-hidden">
//             <center> <h1 className='text-[8vh] font-["Neue Montreal"] font-semibold tracking-tight' >Bmi Calculater</h1></center> 
//             <h1  className='text-[3vh] font-["Neue Montreal"] font-semibold tracking-tight'>One such tool is our BMI (Body Mass Index) Calculator. This easy-to-use calculator helps you understand your body weight in relation to your height, giving you insights into your overall health status. Learn how to use the BMI Calculator and discover the benefits it offers in managing your health.</h1>
//      <br />  <center>  <NavLink to="/bmi" >     <button class="bg-zinc-100 hover:bg-blue-100 text-zinc-950 text-[3vh] font-bold py-2 px-12 rounded">
//     Click To Use
// </button></NavLink></center>
// <br />
//             </div>
//           </div>

//           <div
//             onMouseEnter={() => handleHover(1)}
//             onMouseLeave={() => handleHoverEnd(1)}
//             className="card-container relative w-1/2 h-auto"
//           >
//             <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[12vh] font-bold  font-["Neue Montreal"]'>
//               {"Videos".split('').map((item, index) =>
//                 <motion.span
//                   key={index}
//                   initial={{ y: "100%" }}
//                   animate={cards[1]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   className='inline-block'
//                 >
//                   {item}
//                 </motion.span>
//               )}
//             </h1>
//             <div className="card w-full h-auto px-8 bg-[#004D43]  text-zinc-50 rounded-2xl overflow-hidden">
//             <center> <h1 className='text-[8vh] font-["Neue Montreal"] font-semibold tracking-tight' >Healthcare-videos</h1></center> 
//             <h1  className='text-[3vh] font-["Neue Montreal"] font-semibold tracking-tight'> the most effective tools we've integrated into our platform is healthcare videos. These videos serve as a  resource, offering easy-to-understand treatments, and wellness tips. Discover how healthcare videos can enhance your understanding and empower you to make informed decisions.</h1>
//      <br />  <center> <NavLink to="/bmi" >    <button class="bg-zinc-100 hover:bg-blue-100 text-zinc-950 text-[3vh] font-bold py-2 px-12 rounded">
//     Click To Use
// </button> </NavLink> </center><br />
//             </div>
//           </div>
//         </div>
//       </div><br /><br />
//     </div>
//   );
// }

// export default Featured;

import Carousel from 'react-bootstrap/Carousel';
import ai from '../Images/ai.png';
import yt from '../Images/y2.png';
import bmi from '../Images/bmi.png';

function NoTransitionExample() {
  return (
    <>
    <center> <br /><br />   <Carousel style={{width: "70%" , backgroundColor: "#1b263b" , marginBottom: "100px"}} slide={true}>
      <Carousel.Item >
  <center>  <img
          className="d-block "
          style={{width:"60%" , height: "70vh"}}
          src={ai}
          alt="First slide"
        /></center>    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          style={{width:"60%" , height: "70vh"}}
          src={yt}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          style={{width:"60%" , height: "70vh"}}
          src={bmi}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>

    </>
  );
}

export default NoTransitionExample;
