import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
// Removed unused import './pages/Home.js'

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <div className='element'></div>
      <div className='white_box'>

      <div className='left'> </div>
      
      <div className='right'> 
      <h1>Hello There, I'm  Shamanthi !</h1> 

      <h5> I'm a Computer Engineering student at the University of Waterloo. </h5>
      <br></br>
      <p>Check out my website/porfolio or I guess my online...presence. </p>
      <br></br>
      <br></br>
      <h2>Email:</h2>
      <a href="https://www.linkedin.com/in/shamanthi-rajagopal" target="_blank"  rel="noopener noreferrer"> s2rajago@uwaterloo.ca </a>
      <br></br><br></br>
      <h2>LinkedIn:</h2>
      <a href="https://www.linkedin.com/in/shamanthi-rajagopal" target="_blank"  rel="noopener noreferrer"> www.linkedin.com/in/shamanthi-rajagopal </a>
      <br></br><br></br>
      <h2>Github:</h2>
      <a href="https://github.com/shamanthi-rajagopal" target="_blank"  rel="noopener noreferrer">www.github.com/shamanthi-rajagopal </a>

      </div>
      </div>
      
      <div className='hero-btns'>
    <Link
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--medium'
      to='/resume'
    >
      RESUME
    </Link>
    <Link to='/projects'
      className='btns1'
      buttonStyle='btn--outline'
      buttonSize='btn--medium'
  
    >
      PROJECTS
    </Link>
  </div>
    </div>
    

    </>
  );
}

export default HeroSection;

/*<h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */