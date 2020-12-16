import React, { Component } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
// import Contact from './components/ContactForm';
import Footer from "../Footer/Footer";
import resumeData from "../ResumeData/resumeData";
import ContactMe from "../ContactForm/Contact";
// import Particles from './components/Particles/particles'
import Particles from "react-particles-js";
import "../../App.css";
// import logo from './images/ghoul.png';
import logo from "../../images/ghoul.png";

class Wrapper extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#184A45FF", border: "20px ridge rgb(45,41,38)", height: "25px"}}>
        <Particles
          params={{
            particles: {
              number: {
				value: 200,
				density: {
					enable: true,
					value_area: 1000,
				}
                //   line_linked: {
                // 	  shadow: {
                // 		  enable: true,
                // 		  color: "#a9a9a9",
                // 		  blur: 5
                // 	  }
              },
            },
          }}
          style={{
            width: "100%",
            height: "25%",
            backgroundImage: { logo },
          }}
        ></Particles>
      </div>
    );
  }
}
export default Wrapper;
