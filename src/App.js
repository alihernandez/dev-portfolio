import React, {Component, useState, useEffect} from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/ContactForm';
import Footer from './components/Footer/Footer';
import resumeData from './components/ResumeData/resumeData';
import ContactMe from './components/ContactForm/Contact';
// import Particles from './components/Particles/particles'
import Particles from 'react-particles-js';
import '../src/App.css';
// import logo from './images/ghoul.png';
import logo from './images/ghoul.png';

import Wrapper from './components/Wrapper/particles';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Wrapper />
         <Header resumeData={resumeData} />
		    <About resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
		    <Resume resumeData={resumeData} />
		    <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
		  <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;