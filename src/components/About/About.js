import React, {Component} from 'react';
import mugShot from '../../images/mugShot.jpg';
import './About.css';

export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;

        

        return(
            

                    <div className="col">

                        <div className="img-container">
                        <img className="profile-pic" src={mugShot} alt="face" />
                        </div>

                        <div className="col aboutme">
                            <h2>About Me</h2>
                            <p>
                                {resumeData.aboutme}
                            </p>
                            <h2>Contact Details</h2>
                            <p>
                                {resumeData.name}
                            </p>
                            <p>
                                {resumeData.address}
                            </p>
                        </div>

                    </div>
                
        );
    }
}