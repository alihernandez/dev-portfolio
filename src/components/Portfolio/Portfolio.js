import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from "../../images/ghoul.png"
import "../../App.css";

class Portfolio extends Component {
  render() {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"></img>,
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"/>,
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"/>,
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"/>,
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"/>,
      <img src={pic1} alt="" onDragStart={handleDragStart} className="sliderimg"/>,
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
      <div style={{alignContent: "center"}}>
        <AliceCarousel autoPlay autoPlayInterval="3000" mouseTracking items={items} />
        </div>
    );
  }
}

export default Portfolio;
