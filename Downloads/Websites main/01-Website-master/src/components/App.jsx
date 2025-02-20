// src/App.js
import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Contact from './Contacts.jsx';
import Skills from './Skills.jsx';
import WorkExperience from './WorkExperience.jsx';
import Footer from './Footer.jsx';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
