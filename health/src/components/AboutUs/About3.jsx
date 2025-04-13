import React from 'react';
import 'tailwindcss/tailwind.css';

const Offerings = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.07"  className="mt-2 bg-[#c0b5a7] text-zinc-900 p-8"  style={{
    
      backgroundImage: `
        repeating-linear-gradient(to right, transparent 0 100px, #25283b22 100px 101px),
        repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px)
      `,
      minHeight: '100vh'
    }}>
      <h1 className="text-4xl font-bold mb-4">Our Offerings</h1>
  
      <p className="text-lg mb-8">
        At Vision Health-Care, we are dedicated to providing a range of resources to help you on your health journey. From informative articles to a BMI calculator, our goal is to support you in making informed decisions about your health and well-being.
      </p>
      <hr className="border-white-900 mb-2" />
      <div className='w-[100%] flex justify-end'>
      <div className="mb-8 w-[60%]">
        <h2 className="text-2xl font-bold mb-1">Remedies Videos</h2>
        <h3 className="text-xl font-semibold mb-1">Visual Resources</h3>
        <p className="text-base mb-2">
          Our remedies videos offer visual guidance on various health topics, providing valuable insights and tips on managing health issues effectively.
        </p>
        </div>
      </div>


      <hr className="border-white-900 mb-2" />
     <div className='w-[100%] flex justify-end'>
      <div className="mb-8 w-[60%]">
        <h2 className="text-2xl font-bold mb-1">Blog Services</h2>
        <h3 className="text-xl font-semibold mb-1">Informative Articles</h3>
        <p className="text-base mb-2">
          Explore our blog services to access a wealth of informative articles covering a wide range of health-related topics, designed to educate and empower you.
        </p>
       </div>
      </div>

      <hr className="border-white-900 mb-2" />
    <div className='w-[100%] flex justify-end'>
      <div className="mb-8 w-[60%]">
        <h2 className="text-2xl font-bold mb-1">AI Assistant</h2>
        <h3 className="text-xl font-semibold mb-1">Personalized Support</h3>
        <p className="text-base mb-2">
          Our AI assistant is here to provide personalized guidance and support, helping you navigate health information and offering tailored recommendations based on your needs.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings