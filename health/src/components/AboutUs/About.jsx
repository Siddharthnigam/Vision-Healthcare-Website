import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure styles are imported

function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000,
      easing: 'easeInOutBounce',
    });

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div data-aos="fade-up">
        <About1 />
      </div>
      <div data-aos="fade-up">
        <About2 />
      </div>
      <div data-aos="fade-up">
        <About4 />
      </div>
      <div data-aos="fade-up">
        <About3 />
      </div>
    </div>
  );
}

export default About;
