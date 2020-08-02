import React, { Component } from "react";
import "react-bootstrap";
export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.info.title,
      location: props.info.location,
      theme: props.info.theme,
      link: props.info.link,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {}

  render() {
    return (
      <div>
        <br />
        <div style={{ fontSize: 30, fontWeight: "bolder" }}>
          {this.state.title}
        </div>

        <div style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
          {this.state.theme}
        </div>
        <div style={{ fontSize: 20 }}>{this.state.location}</div>
        <br />
        <div style={{ fontSize: 20 }} className="linkborder">
          <a href={this.state.link} target="_blank" rel="noopener noreferrer">
            Check this out!
          </a>
        </div>
      </div>
    );
  }
}
