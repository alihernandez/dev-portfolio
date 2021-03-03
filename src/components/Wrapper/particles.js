import React, { Component } from "react";
import Particles from "react-particles-js";
import "../../App.css";
import logo from "../../images/ghoul.png";

class Wrapper extends Component {
  render() {
    return (
      
        <Particles
          params={{
            particles: {
              number: {
				value: 200,
				density: {
					enable: true,
					value_area: 1000,
				}
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
      
    );
  }
}
export default Wrapper;
