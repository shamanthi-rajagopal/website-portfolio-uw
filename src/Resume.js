import React from 'react';
import './App.css';
import Footer from './Footer.js';
import './resume.css'

function Resume() {
  return (
    <>
    
    <div className='resume'>
    
    <div className='resume'>
        {/* White box 1 */}
        <div className="resume-box">
        <h1 className='resume-title'>Resume</h1>
        <br></br>
        <h1 className='resume-text'>(Coming Soon)</h1>

        </div>
        
        {/* White box 2 */}
        <div className="resume-box">
          <h1 className='resume-title'>Skills</h1>
          <p></p>
        </div>
        
        <div className="grey-container">
        
        <div className="grey-box">
          <h1 className='box'>Software:</h1>
          <p className='tiny'>
          <span className="bold-text">Languages:</span> C/C++, Python, Java, JavaScript, HTML/CSS, PHP, SQL.
          <br />
          <span className="bold-text">Frameworks:</span> React.js, Brain.js, Flask, jQuery, BootStrap.
          <br />
          <span className="bold-text">Other:</span> Node.js, Cloudflare AI, OpenAI, Apache, Encryption.
        </p>
        </div>
        
        <div className="grey-box">
          <h1 className='box'>Hardware:</h1>
          <p className='tinyH'>Robotics & AI, PCB Design, Schematics, Soldering, 3D Printing, Embedded Microcontrollers (Arduino/STM32/Raspberry Pi).</p>
          <p className='tiny'></p>  
        </div>
        
        </div>
        
        <div className="grey-container1">
        <div className="grey-box">
        <h1 className='box'>Tools:</h1>
          <p className='tiny'><span className="bold-text">Software:</span> GitHub, MySQL, VSCode, Eclipse, IonCoder, Android Studio.</p>
          <p className='tiny'><span className="bold-text">Hardware:</span> Altium, AutoCAD, Blender.</p>  
          <p className='tiny'><span className="bold-text">Other:</span> Figma, Adobe, MS Office.</p>  

        </div>
        
        <div className="grey-box">
        <h1 className='box'>Other:</h1>
          <p className='tiny'><span className="bold-text">Interpersonal:</span> Problem-solving, Teamwork, Leadership, Optimistic.</p>
          <p className='tiny'><span className="bold-text">Languages:</span> English, French (Proficient), Tamil (Proficient), ASL (Novice).</p>  
          <p className='tiny'><span className="bold-text">Certifications:</span> Introduction to AI, Core French Program, CPR & First Aid.</p>  

        </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Resume;