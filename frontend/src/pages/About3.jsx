import React from 'react';
import '../styles/About3.css';

const About3 = () => {
  return (
    <div className='about3' id='about3'>
      <div className='image-container'>
        <div className="image-wrapper">
          <img src='assets/abt3img1.png' alt='about3img1' />
          <span className="hover-text">AFFORDABLE</span>
        </div>
        <div className="image-wrapper">
          <img src='assets/abt3img2.png' alt='about3img2' />
          <span className="hover-text">SERENE</span>
        </div>
        <div className="image-wrapper">
          <img src='assets/abt3img3.png' alt='about3img3' />
          <span className="hover-text">COMFORTABLE</span>
        </div>
        <div className="image-wrapper">
          <img src='assets/abt3img4.png' alt='about3img4' />
          <span className="hover-text">GREEN</span>
        </div>
      </div>
    </div>
  );
};

export default About3;
