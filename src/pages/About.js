import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

function About() {
  return (
    <Router>
      <NavBar />
      <div>
      <p>
          Alí Hernandez is a student at the University of Denver, currently
          enrolled in the fullstack web development bootcamp.
          <br />
          Originally from Guadalajara, Jalisco Mexico, he currently resides in
          the Rocky Mountains in Colorado. Enjoys snowboarding, music, and most
          things tech.
          <br />
          Fluent in both Spanish and English. Attentive to detail and great work
          ethic.
        </p>
      </div>
    </Router>
  );
}

export default About;
