import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import One from './Services1'
import Two from './Services2'
import Three from './Services3'
import Four from './Services4'


function Services() {
useEffect(() => {
    AOS.init({
      duration: 2500, // Duration of animation (in milliseconds)
      easing: 'ease-out-cubic', // Easing function for the animation
 
      offset: 120, // Offset (in pixels) from the original trigger point
    });
    AOS.refresh(); // Refresh animations after initialization
  }, []);

  return (
     <div>
      {/* <div data-aos="fade-up">
        <One />
      </div> */}
      <div data-aos="fade-up">
        <Two />
      </div>
    
      <div data-aos="fade-up">
        <Four />
      </div>

      <div data-aos="fade-up">
        <Three />
      </div>
      </div>

  )
}

export default Services