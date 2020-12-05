import React, {Component} from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
// import Contact from './components/ContactForm';
import Footer from '../Footer/Footer';
import resumeData from '../ResumeData/resumeData';
import ContactMe from '../ContactForm/Contact';
// import Particles from './components/Particles/particles'
import Particles from 'react-particles-js';
import '../../App.css';
// import logo from './images/ghoul.png';
import logo from '../../images/ghoul.png';

class Wrapper extends Component {
	render() {
	  return (
		<div className="App">
		   
		  <Header resumeData={resumeData} />
		  <About resumeData={resumeData} />
		  <Resume resumeData={resumeData} />
		  <Portfolio resumeData={resumeData} />
		  <Particles 
				params={{
					  particles: {
						  line_linked: {
							  shadow: {
								  enable: true,
								  color: "#3CA9D1",
								  blur: 5
							  }
						  }
					  }
				  }}
				style={{
				  width: '100%',
				  backgroundImage: {logo} 
				}}
			  ></Particles>
		  <Testimonials resumeData={resumeData} />
		  <ContactMe resumeData={resumeData} />
		  <Footer resumeData={resumeData} />
		  
		</div>
	  );
	}
  }
  export default Wrapper;