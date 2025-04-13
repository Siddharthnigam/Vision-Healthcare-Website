import React, { useState } from 'react';
import c1 from '../images/c1.png';

function About2() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can handle the form submission, e.g., send the data to a server
  };

  return (
    <div>
      <div className="flex justify-evenly text-zinc-900 p-5">
        <div className="w-44%"><br />
          <img src={c1} alt="" className="w-90% h-auto rounded-3xl" />
        </div>

        <div className="w-[45%]">
          <center><h1 className="text-[7vh] font-bold text-zinc-900 uppercase   shadow-md">Get in touch with us.</h1></center>
          <center><h2 className="text-[3.5vh] text-zinc-900 font-semibold">Don't hesitate to contact us for more information.</h2></center><br />
          <div className="flex justify-between px-10 10%">
            <p className="text-1.5rem font-normal ">visioncare@gmail.com</p>
            <p className="text-1.5rem font-normal">+91 9098613462</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4"><br />
              <label htmlFor="name" className="font-bold mb-1 text-zinc-900 block">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border text-zinc-900 border-gray-300 rounded bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="font-bold mb-1 text-zinc-900 block">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='E-mail'
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border  text-zinc-900 border-gray-300 rounded bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="font-bold mb-1 text-zinc-900 block">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border  text-zinc-900 border-gray-300 rounded bg-gray-200 resize-vertical h-40"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-full cursor-pointer text-2xl hover:bg-blue-900 hover:text-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About2;
