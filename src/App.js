import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
        
         <NavBar />
         
         <Header resumeData={resumeData} key="head"/>
         <br />
		    <About resumeData={resumeData} />
        <br />
        <ContactMe resumeData={resumeData} />
        <br />
		   
       
         {/* <Wrapper /> */}
		    {/* <Portfolio resumeData={resumeData} /> */}
        {/* <Testimonials resumeData={resumeData} />*/}
        <Resume resumeData={resumeData} key="unique"/>
		  <Footer resumeData={resumeData} /> 
      
      </Router>
      
      </div>
    );
  }
}
export default App;