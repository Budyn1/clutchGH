import React from 'react';
import { Form, Button } from "react-bootstrap"


const ContactForm = ({}) => {
  return (
    <div style={{minHeight:"80vh"}}>
      <div className="container">
          <Form className="w-50">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
        <Form.Text className="text-muted">
          We'll never share your personal data with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <textarea style={{resize:"none"}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="sign me up for biuletin" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </div>
    </div>
  );
}

export default ContactForm;
