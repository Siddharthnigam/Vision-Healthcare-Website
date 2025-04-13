import React from 'react';
import './style.css'; 
import image from '../Images/l.png'
import s7 from '../Images/s7.jpg'
import s1 from '../Images/s1.jpg'
import s2 from '../Images/s2.jpg'
import s3 from '../Images/s3.jpg'
import s4 from '../Images/s4.jpg'
import s5 from '../Images/s5.jpg'
import s6 from '../Images/s6.jpg'
import s8 from '../Images/s1.jpg'
import s9 from '../Images/s9.jpg'
import s10 from '../Images/v.png'


const Banner = () => {
  return (
    <div className="banner mt-10">
      <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ transform: 'rotateY(0deg) translateZ(550px)' }}>
          <img src={s7} alt="Image 1" />
        </div>
        <div className="item" style={{ transform: 'rotateY(36deg) translateZ(550px)' }}>
          <img src={s1} />
        </div>
        <div className="item" style={{ transform: 'rotateY(72deg) translateZ(550px)' }}>
          <img src={s2} alt="Image 3" />
        </div>
        <div className="item" style={{ transform: 'rotateY(108deg) translateZ(550px)' }}>
          <img src={s3} alt="Image 4" />
        </div>
        <div className="item" style={{ transform: 'rotateY(144deg) translateZ(550px)' }}>
          <img src={s4} alt="Image 5" />
        </div>
        <div className="item" style={{ transform: 'rotateY(180deg) translateZ(550px)' }}>
          <img src={s5} alt="Image 6" />
        </div>
        <div className="item" style={{ transform: 'rotateY(216deg) translateZ(550px)' }}>
          <img src={s6} alt="Image 7" />
        </div>
        <div className="item" style={{ transform: 'rotateY(252deg) translateZ(550px)' }}>
          <img src={s10}alt="Image 8" />
        </div>
        <div className="item" style={{ transform: 'rotateY(288deg) translateZ(550px)' }}>
          <img src={s8} alt="Image 9" />
        </div>
        <div className="item" style={{ transform: 'rotateY(324deg) translateZ(550px)' }}>
          <img src={s9} alt="Image 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="Vision">Vision</h1>
        <div className="author">
          <h2>Vision</h2>
          <p><b>Health-Care</b></p>
          <p>Join Our Health-care Community for Better Life.</p>
        </div>
        <div className="model" style={{ backgroundImage: `url(${image})`, width:"90%" }}></div>
        </div>
    </div>
  );
};

export default Banner;
