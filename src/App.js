import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
// import Portfolio from './components/Portfolio/Portfolio';
import NavBar from "./components/NavBar/NavBar";
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/ContactForm';
import Footer from './components/Footer/Footer';
import resumeData from './components/ResumeData/resumeData';
import ContactMe from './components/ContactForm/Contact';
import '../src/App.css';
// import logo from './images/ghoul.png';


import parts from './components/Wrapper/parts';


class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
         
=======
        <Router>
         <NavBar />
>>>>>>> 0cb8a33641161a82d60f051e4d022542f85e30ce
         <Header resumeData={resumeData} />
		    <About resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
		    <Resume resumeData={resumeData} />
         {/* <Wrapper /> */}
		    {/* <Portfolio resumeData={resumeData} /> */}
        {/* <Testimonials resumeData={resumeData} />*/}
		  <Footer resumeData={resumeData} /> 
      </Router>
      </div>
    );
  }
}
export default App;