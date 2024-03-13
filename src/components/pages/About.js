import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import './about.css';

function About() {
  return (
    <>
      <div className='about1'><br></br><br></br><h1 className='about-title'>About Me!</h1><br></br>
      <div className='about'></div>
      </div>

      <div className='middle'> 
      <h1 className='about-subtitle'>My Tech Journey</h1>
            <p className='about-smalltext'>
            As a computer engineering student at the University of Waterloo, I find myself navigating through the early stages of my academic journey, 
            aiming to carve out my niche within the vast tech industry. In our program, we encounter the concepts of software and hardware, 
            delving into the intricate connection between the both. My skills in software development run deep, which has been encouraged by 
            the guidance of my father since childhood. Through a combination of side projects, coding contests, robotics teams, and hackathons, 
            I've honed my coding skills, finding ease and mastery in preparing programming and algorithms, while also being able to apply my software 
            expertise in real-world situations. However, the hardware world is also appealing. By exploring it through university design teams and 
            coursework, I've found myself drawn to the tangible complexities of circuits and components. While my journey is still unfolding, I've already 
            begun to explore the captivating world of Artificial Intelligence and Machine Learning, and I am fascinated by the prospect of replicating 
            human intelligence to enrich society's future. Beyond AI, my curiosity extends to many other domains – from space technology to robotics and 
            even the intricacies of programmed game design. Each offers its own set of challenges and opportunities, motivating me to unravel their 
            mysteries and contribute to their advancement. As I traverse through my academic and co-op experiences, I aspire to learn insights from 
            diverse technology domains, enriching my understanding and shaping my path as a future engineer. In this pursuit, I wish to gain not only 
            knowledge but the profound experiences that will fuel my growth and drive my contributions to the ever-evolving tech landscape.
               </p>
               <p className='about-smalltext'>(Check out my RESUME or LinkedIn to track my coop journey)</p>
      
      <div className='image-container'>
      <img className= 'about-img-1' src='images/robo.jpg'></img> 
      <img className= 'about-img-2' src='images/waterloo.jpg'></img> 
      <img className= 'about-img-3' src='images/uweng2.jpg'></img> 
      </div>
      <div className='about'></div>

      </div>
      <Footer />
    </>
  );
}

export default About;