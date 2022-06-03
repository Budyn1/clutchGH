import React from 'react';
import { Form, Button } from "react-bootstrap"


const ContactForm = ({}) => {
  return (
    <div className="contactForm">
      <div className="container d-md-flex">
        <div className="contactDet p-5">
          <h1>Contact Details</h1>
          <h5 className="m-4">ADRESS: Some randomw street you can choose</h5>
          <h5 className="m-4">NUMBER: 213 731 551</h5>
          <h5 className="m-4">EMAIL: business_email@mail.com</h5>
          <h5 className="m-4 text-center">we are working 24/7</h5>
        </div>
        <div className="w-100 mb-5 mt-3">
            <Form className="w-100">
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
    </div>
  );
}

export default ContactForm;
