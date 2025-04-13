import React, { useEffect, useRef } from "react";
import AOS from "aos";
import LocomotiveScroll from "locomotive-scroll";
import "aos/dist/aos.css";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure styles are imported

import Landing from "./landingpage";
import Marquee from "./marquee";
import About1 from "./about1";
import Eyes from "./eyes";
import Featured from "./featured";
import Marquee1 from "../AboutUs/About2";
import Slider from "./slider";

function Front() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'easeInOutBounce',
    });

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <div data-aos="fade-up">
        <Landing />
      </div>
      <div data-aos="fade-up">
        <Marquee />
      </div>
      <div data-aos="fade-up">
        <Featured />
      </div>
      <div data-aos="fade-up">
        <Eyes />
      </div>
      <div data-aos="fade-up">
        <About1 />
      </div>
      <div data-aos="fade-up">
        <Slider />
      </div>
      <div data-aos="fade-up">
        <Marquee1 />
      </div>
    </div>
  );
}

export default Front;
