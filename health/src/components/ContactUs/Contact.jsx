import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact1 from './Contact1';
import Contact2 from './Contact2';
import Contact3 from './Contact3';
import Contact4 from './Contact4';

function Contact() {
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
      <div data-aos="fade-up">
        <Contact3 />
      </div>
      <div data-aos="fade-up">
        <Contact1 />
      </div>
      <div data-aos="fade-up">
        <Contact4 />
      </div>
      <div data-aos="fade-up">
        <Contact2 />
      </div>
    </div>
  );
}

export default Contact;
