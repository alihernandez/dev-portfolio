import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import NavBar from "../components/NavBar";

function Contact() {
  return (
    <Router>
      <NavBar />
      <ContactForm />
      <p>FUCK</p>
    </Router>
  );
}

export default Contact;
