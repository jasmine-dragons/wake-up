import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/main.css";
export default class LogIn extends Component {
  render() {
    return (
      <Form style={{ height: 347 }}>
        <Form.Label
          className="SignLogFormTitle"
          style={{ height: 60, fontSize: 30 }}
        >
          Log In and Stay Informed!
        </Form.Label>

        <br />
        <Form.Group
          controlId="formBasicEmail"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control type="email" placeholder=" Email" />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control type="password" placeholder=" Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Stay Logged In" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: 300 }}>
          Get Informed!
        </Button>
      </Form>
    );
  }
}
