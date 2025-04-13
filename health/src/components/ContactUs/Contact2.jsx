import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-[#023047] mb-10 mt-10  w-full h-auto p-5 font-sans">
      <h1 className="text-white-900 font-bold text-[10vh]">Testimonials</h1>
      <p className="text-white-900  text-[5vh] ">Client Experiences</p><br />
      <h2 className="text-white-900 text-2xl">Our users share their positive experiences</h2>
      <hr className="border-zinc-500 mt-6"  />
      <div className="flex justify-between py-6">
        <p className="text-white-900 text-[5vh]">Megan's Testimonial</p>
        <p className="text-white-900 text-[4vh]">Vision Health-Care transformed my approach to health</p>
      </div>
      <hr className="border-zinc-500" />
      <div className="flex justify-between py-6">
        <p className="text-white-900 text-[5vh]">David's Testimonial</p>
        <p className="text-white-900 text-[4vh]">The AI assistant was a game-changer for me</p>
      </div>
      <hr className="border-zinc-500" />
      <div className="flex justify-between py-6">
        <p className="text-white-900 text-[5vh]">Sara's Testimonial</p>
        <p className="text-white-900 text-[4vh]">Informative articles helped me make better health choices</p>
      </div>
      <hr className="border-zinc-500"  />
    </div>
  );
};

export default Testimonials;
