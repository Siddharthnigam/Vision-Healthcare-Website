import React from 'react';


const VisionHealthCare = () => {
  return (
    <div    data-scroll
    data-scroll-section
    data-scroll-speed="-.3" className="vision-health-care h-[auto] py-5 text-zinc-900 px-5">
        <br /><br /><br />

      <section className="our-story flex w-full">
        <div className="left flex justify-end w-2/5 pr-7 pl-12">
          <h1 className="text-6xl border-r-4 border-blue-500 pr-2 font-bold">Our <br /> Story</h1>
        </div>
        <div className="right w-1/2">
          <h2 className="text-5xl font-bold underline">Vision Health-Care</h2><br />
          <p className="text-lg leading-tight font-normal">
            Vision Health-Care is more than just a website; it's a dedicated platform aimed at providing individuals with the information they need to navigate their health concerns. With a user-friendly interface and a wealth of resources, our goal is to help you find answers to your health questions and connect you with the right information. Whether you're seeking to understand a specific condition or looking for general health advice, we invite you to explore our extensive database and empower your health journey.
          </p>
        </div>
      </section>
      <br /><br />
      <center><hr className="custom-hr mx-auto border-t-4 border-blue-700 bg-blue-900 h-2/5 w-4/5" /></center><br /><br />
    </div>
  );
};

export default VisionHealthCare;
