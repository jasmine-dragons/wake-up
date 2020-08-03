import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/main.css";
import axios from "axios";
import Article from "./Article.component";
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      action: false,
      searchRes: [],
      actionList: [],
      nonActionList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.actionChange = this.actionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    axios.get("http://localhost:5000/feed/get").then((res) => {
      this.setState({
        searchRes: res,
      });
    });
    this.state.searchRes.map((res) => {
      res.action
        ? this.setState({
            actionList: res,
          })
        : this.setState({
            nonActionList: res,
          });
      return 0;
    });
  }
  actionDisplay() {
    const actlist = this.state.actionList.map((cur) => {
      if (this.state.search === cur.title) {
        return (
          <div>
            <br />
            <Article info={cur} key={cur._id} />
            <br />
          </div>
        );
      } else return 0;
    });
    actlist.reverse();
    return actlist;
  }
  nonActionDisplay() {
    const nonactlist = this.state.nonActionList.map((cur) => {
      if (this.state.search === cur.title) {
        return (
          <div>
            <br />
            <Article info={cur} key={cur._id} />
            <br />
          </div>
        );
      } else return 0;
    });
    nonactlist.reverse();
    return nonactlist;
  }
  render() {
    return (
      <div>
        {" "}
        <Form onSubmit={this.onSubmit}>
          <Form.Group
            controlId="searchBar"
            style={{ width: 400 }}
            className="mx-auto"
          >
            <Form.Control
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder=" Learn a Little More"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={this.actionChange}
              label="Find Places to Take Action"
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ width: 300 }}>
            Search!
          </Button>
        </Form>
        <div>
          {this.state.action ? this.actionDisplay() : this.nonActionDisplay()}
        </div>
      </div>
    );
  }
}
