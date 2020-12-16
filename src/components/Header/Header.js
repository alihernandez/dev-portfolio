import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        const headerStyle = {
            backgroundColor: "#B0B8B4FF",
            listStyle: "none"
        }
        return (
            <React.Fragment>
                <header id="home" style={headerStyle}>
                    <nav id="nav-wrap">
                        
                        <ul id="nav" className="nav" style={headerStyle}>
                            <li className="current"><a className="smoothscroll" href="#home"></a></li>
                            <li> <a className="smoothscroll" href="#about">About</a></li>
                            <li> <a className="smoothscroll" href="#resume">Resume</a></li>
                            <li> <a className="smoothscroll" href="#portfolio">Projects</a></li>
                            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                        <h1 className="responsive-headline">I am {resumeData.name}</h1>
                        <h3 style={{color: '#282c34', fontFamily:'sans-serif'}}>I am a {resumeData.role}.{resumeData.roleDescription}</h3>
                        <hr/>
                        <ul className="social">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                    return(
                                        <li style= {headerStyle} key={item.name}>
                                            <a href={item.url} target=""><i className={item.className}>{item.name}</i></a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}