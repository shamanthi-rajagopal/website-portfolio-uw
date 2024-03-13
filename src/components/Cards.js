import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects!</h1>
      <br></br>
      <p> Welcome to my Projects Section, feel free to look around.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tucantravel.png'
              text=' TuCanTravel is a travel optimization website powered with the CloudFlare AI API to provide 
              all the most important details, news, and trends for travellers. To ensure traveling accidents and threats are reduced,
              the application personalizes the content for each user and travel destination. Main Skills: JavaScript, HTML/CSS, React.js, CloudFlare AI, and BootStrap. 
              I created this project along side my teammates at ElleHacks 2024.
              Check out the links below for more info.
              '
              label='TuCanTravel'
              href= 'https://devpost.com/software/tucantravel'
              href1= 'https://github.com/liaorosemary/TuCanTravel'
              button ='DevPost'
              button1='GitHub'
            />
            <CardItem
              src='images/myfocuslibrary.png'
              text='My Focus Library is a website that simulates a virtual library experience. 
              Libraries have provided educational support to various people, especially students. 
              As a university student myself, I wanted to give others a virtual library if, 
              in any case, the actual library was not accessible to anyone. Main Skills: HTML/CSS, JavaScript, GitHub, and Git Pages.
              Many study features were implimented to aid students during their study session.
              Check out the links below for more info.
              '

              label='My Focus Library'
              href= 'https://shamanthi-rajagopal.github.io/MyFocusLibrary.github.io/'
              href1= 'https://github.com/liaorosemary/TuCanTravel'
              button ='Web Link'
              button1='GitHub'
            />

            <CardItem
              src='images/seniorminder.jpg'
              text=' SeniorMinder is a microcontroller powered medicine alarm clock device to help the elderly take their medication on time.
              The product was targeted at seniors with memory health issues like Alzheimers/dementia, with additional features to accommodate
              visually imparied and hard of hearing users. Main Skills: STM32 Microcontroller, C/C++, Arduino, electrical components, and schematics.
              Check out the links below for more info.
              '
              label='SeniorMinder'
              href= 'https://drive.google.com/file/d/1Pf9fEsvhXH0x4DrDYoLy8TE1J7STuqTo/view?usp=sharing'
              href1= 'https://github.com/shamanthi-rajagopal/ECE_198_Microcontroller-Project'
              button ='Demo'
              button1='GitHub'
            />
          </ul>
          <br></br><br></br> 
          <ul className='cards__items'>
            <CardItem
              src='images/humorhaven.png'
              text='HumorHaven is a simple jokes & puns website allowing users to access a database filled with humour to enhance their personality and charm. 
              The website has features for selecting jokes with specific keywords or allowing users to add their own jokes. Main Skills: PHP, HTML, MySQL, Apache, and Encryption.
              The main purpose of the website was to improve my skills with web development and database connections.
              Check out the links below for more info.'
              label='HumorHaven'
              href= 'https://www.youtube.com/watch?v=bEdtgVBG8zU'
              href1= 'https://github.com/shamanthi-rajagopal/HumorHaven'
              button ='Demo'
              button1='GitHub'
            />
            <CardItem
                src='images/colourai.png'
                text=" ColourAI is a simple web application that I created to train a neural network to 
                identify when black or white text is better on a randomized colour. The learning model is trained with the it's own tested 
                data after I provided it with the correct answers. The purpose of the project was for me to get a better understandin of 
                AI and machine learning technologies and techniques. Main Skills: JavaScript, Brain.js, HTML/CSS, GitHub, and Git Pages.
                Check out the links below for more info."
                label='ColourAI'
                href= 'https://shamanthi-rajagopal.github.io/ColourAI/'
                href1= 'https://github.com/shamanthi-rajagopal/ColourAI'
                button ='Web link'
                button1='GitHub'
            />
            <CardItem
               src='images/geesespotter.jpg'
               text='GeeseSpotter is a C++ console-based game that replicates MindSweepers with a Waterloo twist. 
               The main programming concepts involved are: Functions, Bitwise Operations, Arrays, and Dynamic Memory Allocation.
               It involves developing a text-based, single-player game, which is played on a 2D board. 
               The goal is to find the fields with geese without revealing them. Contact me if you want the finished demo.
               Check out the links below for more info.'
               label='GeeseSpotter'
               href= 'https://drive.google.com/file/d/1ZNa1lu5cox61KNyAdE8FkkI9JPc11UOn/view?usp=sharing'
               href1= 'https://github.com/shamanthi-rajagopal/Geesespotter--C-plusplus-Game'
               button ='Demo'
               button1='GitHub'
            />       
          </ul>
          <br></br>
          <p> More projects coming soon...</p>    
        </div>
      </div>
    </div>
  );
}

export default Cards;