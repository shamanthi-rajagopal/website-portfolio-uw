import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Other from './other';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/other' element={<Other />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;