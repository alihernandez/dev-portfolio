import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        
        return(   

          <div id="footer">
          
          <div className="footer-content">
                <p>ali.hernandez9two@gmail.com</p>
                <ul>
                  <li><a href="https://docs.google.com/document/d/1HfO7EoBMV-xKG8VwBZy7KIfKpd2i5ta-Kq9GEGOsHKE/edit?usp=sharing">Resume</a></li>
                  <li><a href="https://github.com/alihernandez">github</a></li>
                  <li><a href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">LinkdIn</a></li>
                </ul>
                <p>© 2020 Ali Hernandez</p>
                </div>

          
        </div>
          
        );
    }
}
