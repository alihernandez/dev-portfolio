import React, {Component} from 'react';
import mugShot from '../../images/mugShot.jpg';

export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;

        const aboutStyle = {
            backgroundColor: "#B0B8B4FF"
        }

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={mugShot} alt="face" />
                    </div>
                    <div className="nine columns main-col" >
                        <h2 >About Me</h2>
                        <p style={aboutStyle}> 
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
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}