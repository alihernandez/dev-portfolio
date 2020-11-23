import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import "./style.css";

function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
    </Form>
  );
}

export default ContactForm;
