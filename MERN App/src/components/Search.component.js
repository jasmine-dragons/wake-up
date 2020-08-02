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

  searchResults() {
    /*
    var searchList = [];
    if (this.state.action) {
      searchList = this.state.searchRes.map((res) => {
        if (res.action) {

          return <Article info={res} key={res._id} />;
        }
      });
    } else {
      searchList = this.state.searchRes.map((res) => {
        if (!res.action) {
          return <Article info={res} key={res._id} />;
        }
      });
    }
    //console.log(this.state.action); */
    //return searchList;
  }
  onSubmit() {
    axios.get("http://localhost:5000/feed/get").then((res) => {
      this.setState({
        searchRes: res,
      });
    });

    console.log(this.state.searchRes);
  }
  render() {
    return (
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
    );
  }
}
