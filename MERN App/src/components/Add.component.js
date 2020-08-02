import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import "./css/main.css";
export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      theme: "",
      location: "",
      link: "",
      action: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.actionChange = this.actionChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  actionChange() {
    this.setState({
      action: !this.state.action,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const newArt = {
      title: this.state.title,
      theme: this.state.theme,
      location: this.state.location,
      link: this.state.link,
      action: this.state.action,
    };

    Axios.post("http://localhost:5000/feed/", newArt).then((res) =>
      console.log(res.data)
    );

    this.setState({
      title: "",
      location: "",
      theme: "",
      link: "",
      action: false,
    });
  }
  render() {
    return (
      <Form style={{ height: 347 }} onSubmit={this.onSubmit}>
        <Form.Label
          className="SignLogFormTitle"
          style={{ height: 60, fontSize: 30 }}
        >
          Add an Article for Others to View!
        </Form.Label>

        <br />
        <Form.Group
          controlId="formTitle"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            type="tile"
            name="title"
            placeholder=" What's The Title?"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formTheme"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            type="theme"
            name="theme"
            placeholder=" Which Theme?"
            value={this.state.theme}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formLocation"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            type="location"
            name="location"
            placeholder=" Where'd It Take Place?"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formLocation"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            type="link"
            name="link"
            placeholder=" Link"
            value={this.state.link}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Is this an Action?"
            onChange={this.actionChange}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Make the world a better place.
        </Form.Text>
        <br />
        <Button variant="primary" type="submit" style={{ width: 300 }}>
          Share Your Knowledge!
        </Button>
      </Form>
    );
  }
}
