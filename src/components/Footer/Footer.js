import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        const footerStyle = {
            backgroundColor: "#184A45FF",
            border: "20px ridge rgb(45,41,38)"
        }
        return(
            // <footer>
            //     <div className="row">
            //         <div className="tweleve columns">
            //             <ul className="social-links">
            //                 {
            //                     resumeData.socialLinks && resumeData.socialLinks.map((item) => {
            //                         return(
            //                             <li>
            //                                 <a href={item.url}>
            //                                     <i className={item.className} />
            //                                 </a>
            //                             </li>
            //                         )
            //                     })
            //                 }
            //             </ul>
            //         </div>
            //         <div id="go-top">
            //             <a className="smoothscroll" title="Back to Top"
            //             href="#home"><i className="icon-up-open" /></a>
            //         </div>
            //     </div>
            // </footer>
            <footer className="page-footer" style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col 16">
            <p>ali.hernandez9two@gmail.com</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li><a href="https://drive.google.com/file/d/1dDq3R8_VMOO8uyL19HIRp6-BJCREo4Cw/view?usp=sharing">Resume</a></li>
              <li><a href="https://github.com/alihernandez">github</a></li>
              <li><a href="https://www.linkedin.com/in/ali-hernandez-96b1b71a9/">LinkdIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          © 2020 Ali Hernandez
        </div>
      </div>
    </footer>
        );
    }
}