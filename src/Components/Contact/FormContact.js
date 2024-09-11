import React from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";

const FormContact = () => {
  return (
    <div className="form-contact">
      <Container>
        <div className="title">
          <h5>Contact Us</h5>
          <h1>Feel free to message us</h1>
        </div>
        <Form className="mt-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter Your Email.." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Your Password.." />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Enter Your Name.." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="Your Phone.." />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              className="text-area"
              type="text"
              placeholder="Your Message.."
            />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormContact;
