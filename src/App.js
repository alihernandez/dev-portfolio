import React, {Component} from 'react';
import Header from './components/Header';
import About from './components/About/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import Contact from './components/ContactForm';
import Footer from './components/Footer';
import resumeData from './components/ResumeData/resumeData';
import ContactMe from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;