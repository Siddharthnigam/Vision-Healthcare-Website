import React from 'react';

const OurVision = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.07" className="our-vision h-auto py-5 text-zinc-900 px-5">
      <br /><br /><br />
      <section className="vision-section flex w-full">
        <div className="left flex justify-end w-2/5 pr-7 pl-12">
          <h1 className="text-6xl border-r-4 border-blue-500 pr-2 font-bold">Our <br /> Vision</h1>
        </div>
        <div className="right w-1/2">
          <h2 className="text-5xl font-bold underline">Vision Health-Care</h2><br />
          <p className="text-lg leading-tight font-normal">
            At Vision Health-Care, our vision is to transform the healthcare landscape by leveraging technology and innovation. We strive to create a world where everyone has access to accurate, reliable, and comprehensive health information. Our platform is dedicated to empowering individuals to take control of their health, make informed decisions, and lead healthier lives. We believe that by providing valuable resources and personalized support, we can make a positive impact on the well-being of individuals and communities.
          </p>
        </div>
      </section>
      <br /><br />
      <center><hr className="custom-hr mx-auto border-t-4 border-blue-700 bg-blue-900 h-2/5 w-4/5" /></center><br /><br />
    </div>
  );
};

export default OurVision;
