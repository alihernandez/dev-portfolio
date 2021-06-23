import React, {Component} from 'react';
import mugShot from '../../images/mugShot.jpg';
import './About.css';

export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;

        

        return(
            <div id="abtme">

                <div className="col" >
                        <img className="profile-pic" src={mugShot} alt="face" />
                    </div>
                    
                    <div >
                        <h2 >About Me</h2>
                        <p> 
                            {resumeData.aboutme}
                        </p>
                        <div className="row">
                            <div className="col contact-details">
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
        );
    }
}