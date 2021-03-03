import React, { Component } from "react";
// import { Route, Redirect } from "react-router";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from "../../images/ghoul.png";
import pic2 from "../../images/atom.png";
import pic3 from "../../images/processor.png";
import "../../App.css";
import { Container } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
      <Container>
        <img
          src={pic1}
          alt=""
          onDragStart={handleDragStart}
          className="sliderimg"
        ></img>
        <h3>Study Buddy</h3>
        <p></p>
        <br />
        <button>
          <a href="https://github.com/alihernandez/studyv2">GitHub</a>
        </button>
        <button>
          <a href=" https://reactstudybuddy.herokuapp.com">Deployed App</a>
        </button>
      </Container>,

      <Container>
        <img
          src={pic2}
          alt=""
          onDragStart={handleDragStart}
          className="sliderimg"
        ></img>
        <h3>Employee Directory</h3>
        <p></p>
        <br />
        <button>
          <a href="https://github.com/alihernandez/studyv2">GitHub</a>
        </button>
        <button>
          <a href="">Deployed App</a>
        </button>
      </Container>,

      <Container>
        <img
          src={pic3}
          alt=""
          onDragStart={handleDragStart}
          className="sliderimg"
        ></img>
        <h3>Note Taker</h3>
        <p></p>
        <br />
        <button>
          <a href="https://github.com/alihernandez/studyv2">GitHub</a>
        </button>
        <button>
          <a href="https://tomanotas.herokuapp.com/">Deployed App</a>
        </button>
      </Container>,

      <Container>
        <img
          src={pic1}
          alt=""
          onDragStart={handleDragStart}
          className="sliderimg"
        ></img>
        <h3>Weather Dashboard</h3>
        <p></p>
        <br />
        <button>
          <a href="https://github.com/alihernandez/studyv2">GitHub</a>
        </button>
        <button>
          <a href="">Deployed App</a>
        </button>
      </Container>,

      <Container>
        <img
          src={pic1}
          alt=""
          onDragStart={handleDragStart}
          className="sliderimg"
        ></img>
        <h3>Budget Manager</h3>
        <p></p>
        <br />
        <button>
          <a href="https://github.com/alihernandez/studyv2">GitHub</a>
        </button>
        <button>
          <a href="https://fathomless-headland-18861.herokuapp.com/">Deployed App</a>
        </button>
      </Container>,
    ];

    // if (this.props.data) {
    //   var projects = this.props.resueData.portfolio.map(function (projects) {
    //     var projectImage = "images/portfolio/" + projects.image;
    //     return (
    //       <div key={projects.title} className="columns portfolio-item">
    //         <div className="item-wrap">
    //           <a href={projects.url} title={projects.title}>
    //             <img alt={projects.title} src={projectImage} />
    //             <div className="overlay">
    //               <div className="portfolio-item-meta">
    //                 <h5>{projects.title}</h5>
    //                 <p>{projects.category}</p>
    //               </div>
    //             </div>
    //             <div className="link-icon">
    //               <i className="fa fa-link"></i>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //     );
    //   });
    // }

    return (
      <div style={{ alignContent: "center" }}>
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          mouseTracking
          items={items}
          animationType="fadeout"
        />
      </div>
    );
  }
}

export default Portfolio;
