import React from "react";
import axios from "axios";
import Article from "./Article.component";
export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      articleList: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/feed/get").then((res) => {
      this.setState({
        articleList: res.data,
      });
    });
  }
  articleList() {
    const artlist = this.state.articleList.map((curArt) => {
      return (
        <div>
          <br />
          <Article info={curArt} key={curArt._id} />
          <br />
        </div>
      );
    });
    artlist.reverse();
    return artlist;
  }

  render() {
    return (
      <div className="feedContainer">
        <div>{this.articleList()}</div>
      </div>
    );
  }
}
