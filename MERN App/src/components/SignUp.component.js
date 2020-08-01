import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/main.css";
export default class SignUp extends Component {
  render() {
    return (
      <Form style={{ height: 347 }}>
        <Form.Label
          className="SignLogFormTitle"
          style={{ height: 60, fontSize: 30 }}
        >
          Sign Up and Get Informed!
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
          controlId="formBasicUsername"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control type="username" placeholder=" Username" />
        </Form.Group>
        <Form.Group
          controlId="formBasicPassword"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control type="password" placeholder=" Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <Button variant="primary" type="submit" style={{ width: 300 }}>
          Sign Up!
        </Button>
      </Form>
    );
  }
}
