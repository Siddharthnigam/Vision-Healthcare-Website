import React from 'react';
import use from '../Images/use.mp4';

function Services4() {
  return (
    <div className='w-full '><br /><br />
      <center>
        <h1 className='text-[9vh] underline underline-offset-4 text-zinc-950 font-bold'>How To Use Our Services</h1>
      </center>
      <br /><br />
      <div className='w-full h-auto flex m-0 justify-evenly'>
        <div className='w-[55%] h-[70vh] grid items-center justify-evenly bg-[#004D43]'>
          <center>
            <video 
              className='w-[90%] h-[100%]' 
              src={use} 
              autoPlay 
              loop 
              muted
              controls
            ></video>
          </center>
        </div>

        <div className='w-[40%] flex justify-center '>
          <ol className='list-decimal ml-5 text-3xl/normal font-bold pl-7  text-zinc-950'> <h1 className=' mb-4 font-bold text-6xl text-zinc-950'>Steps:</h1>
            <li>Open the Vision Healthcare website.</li>
            <li>Navigate to the Services section.</li>
            <li>Watch the video tutorial for a quick overview.</li>
            <li>Choose the desired service from the available options.</li>
            <li>Use the services as you prefer</li>
            <li>And don't forget to send your valuable feedback.</li>
          </ol>
        </div>
      </div><br />
    </div>
  );
}

export default Services4;
