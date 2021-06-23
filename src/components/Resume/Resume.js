import React, {Component} from 'react';
import ProgressBar from "../ProgressBar/progress";
import './Resume.css';

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section className="col">
                
                    <div className="col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div>
                        {
                            resumeData.education && resumeData.education.map((item) =>{
                                return(
                                    <div className="col">
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <br></br>
                                                <span>&bull;</span><em className="date">{item.MonthOfPassing}
                                                {item.YearOfPassing}</em>
                                            </p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                            </div>
                                            </div>
                                )
                            })
                        }
                    </div>
                
                <div className="row" id="bars">
                    <div className="col">
                        <p>
                            {resumeData.skillsDescription}
                        </p>
                        
                            <ul>
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return(
                                            <li key={item.id}>
                                                <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
                                                <em>{item.skillname}</em>
                                                <ProgressBar value={item.value} max={item.max} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                </div>
            </section>
        );
    }
}