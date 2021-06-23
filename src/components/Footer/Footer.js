import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        const footerStyle = {
            backgroundColor: "#184A45FF",
            border: "10px ridge rgb(45,41,38)",
        }
        return(   

          <footer className="page-footer" style={footerStyle}>
          <div className="container">
            <div className="row">
              <div className="col 16" >
                <p>ali.hernandez9two@gmail.com</p>
                <ul>
                  <li><a href="https://docs.google.com/document/d/1HfO7EoBMV-xKG8VwBZy7KIfKpd2i5ta-Kq9GEGOsHKE/edit?usp=sharing">Resume</a></li>
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
