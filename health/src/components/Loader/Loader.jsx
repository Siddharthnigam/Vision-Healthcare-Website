import React, { useEffect, useRef, useState } from 'react';
import './Loader.css'; // Import your loader CSS
import audioFile from '../Images/start.mp3'; // Import your audio file
import logo from '../Images/l.png'

function Loader() {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          playAudio();
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 30); // Adjust the interval time (in milliseconds) as per your loading time

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = true; // Unmute before playing
      audioRef.current.play();
    }
  };

  return (
    <div className="loader w-full h-screen">
      <center>
        <div className="textstructure text-zinc-900 mt-20 px-20">
            <img className='w-72 h-52' src={logo} alt="" />
          <h1 className='text-[17vh] font-extrabold'>Vision Health-Care</h1>
          <h1 className='text-[5vh] font-bold'>This stuff is really heavy</h1>
          {/* <div className="progress text-[5vh] font-bold mt-10">{progress}%</div> */}
        </div><br />
        <div className="spinner"></div>
      </center>
      {/* Audio element */}
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
}

export default Loader;
