import React, { Component } from "react";
import mugShot from "../../images/mugShot.jpg";
import Wrapper from "../Wrapper/particles";
import Particles from "react-particles-js";
import logo from "../../images/atom.png";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          
            <div
              className="three columns"
              style={{ backgroundColor: "#B0B8B4FF" }}
            >
              <img className="profile-pic" src={mugShot} alt="face" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <div className="row">
                <div className="Columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br></br>
                    <span>{resumeData.address}</span>
                    <Particles
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: false,
                    value_area: 1000,
                  },
                  //   line_linked: {
                  // 	  shadow: {
                  // 		  enable: true,
                  // 		  color: "#a9a9a9",
                  // 		  blur: 5
                  // 	  }
                },
              },
            }}
            style={{
              width: "100%",
              height: "25%",
              backgroundImage: { logo },
            }}
          >
              </Particles>
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
