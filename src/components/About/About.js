import React, {Component} from 'react';
import mugShot from '../../images/mugShot.jpg';

export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={mugShot} alt="face" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutme}
                        </p>
                        <div className="row">
                            <div className="Columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                        {resumeData.address}
                                    </span>
                                    <br></br>
                                    <li> <a className="smoothscroll" href="{resumeData.url}">{resumeData.url}</a></li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}