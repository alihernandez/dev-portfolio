import React, {Component} from 'react';
import Particles from "react-particles-js";

export default class Footer extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        const footerStyle = {
            backgroundColor: "#184A45FF",
            border: "20px ridge rgb(45,41,38)",
            height: "150px"
        }
        return(   

          <footer className="page-footer" >
          <div className="container">
            <div className="row">
              <div className="col 16" >
                <p>ali.hernandez9two@gmail.com</p>
                <ul>
                  <li><a href="https://drive.google.com/file/d/1dDq3R8_VMOO8uyL19HIRp6-BJCREo4Cw/view?usp=sharing">Resume</a></li>
                  <li><a href="https://github.com/alihernandez">github</a></li>
                  <li><a href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">LinkdIn</a></li>
                </ul>
                © 2020 Ali Hernandez
              </div>
            </div>
          </div>
    
          
        </footer>
          
        );
    }
}
