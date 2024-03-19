import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <small class='website-rights'> </small>
          </div>
        </div>
      </div>
      <section class='social-media'>
        
 

        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
         
          

          <div class='social-icons'>
          <Link
            className='social-icon-link envelope'
            to='mailto:s2rajago@uwaterloo.ca' // Replace 'your-email@example.com' with your email address
            target='_blank' // Open in a new tab/window if necessary
            aria-label='Envelope'
>
            <i className='fas fa-envelope' />
          </Link>
            
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/in/shamanthi-rajagopal"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>

            <a
              class='social-icon-link github'
              href="https://github.com/shamanthi-rajagopal"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>

            <a
            className='social-icon-link file'
            href='/resume' // Replace '/path/to/your/resume.pdf' with the actual path to your resume file
            rel='noopener noreferrer'
            aria-label='Resume'
            >
            <i className='far fa-file' />
            </a>

            <a
            className='social-icon-link youtube'
            href='/other' // Replace '/path/to/your/resume.pdf' with the actual path to your resume file
            rel='noopener noreferrer'
            aria-label='youtube'
            >
            <i className='fab fa-youtube' />
            </a>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
/* <small class='website-rights'>Shamanthi Rajagopal © 2024</small> */