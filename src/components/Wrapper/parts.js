import React, { Component } from "react";
import Particles from "react-particles-js";

import logo from "../../images/ghoul.png";

class parts extends Component {
  render() {
    return (
<<<<<<< HEAD:src/components/Wrapper/parts.js
      <div className="Particles" style={{ backgroundColor: "#184A45FF", border: "20px ridge rgb(45,41,38)", height: "25px"}}>
=======
      <div>
>>>>>>> 0cb8a33641161a82d60f051e4d022542f85e30ce:src/components/Wrapper/particles.js
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
            height: "5%",
            backgroundImage: { logo },
          }}
        >
          
        </Particles>
      </div>
    );
  }
}
export default parts;
