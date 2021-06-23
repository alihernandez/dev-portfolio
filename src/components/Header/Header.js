import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        
        return (
            <React.Fragment >
                <header id="home">
                    
                        <div className="banner-text">
                        <h1 className="responsive-headline">I am {resumeData.name}</h1>
                        <h3 style={{color: '#282c34', fontFamily:'sans-serif'}}>I am a {resumeData.role}.{resumeData.roleDescription}</h3>
                        <hr/>
                        <ul className="row">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                    return(
                                        <div className="col">
                                        <li className="col-6" key={item.name}>
                                            <a href={item.url} target=""><i className={item.className}>{item.name}</i></a>
                                        </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                        </div>
                    
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}