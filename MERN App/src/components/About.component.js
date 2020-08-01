import React from "react";
import "./css/main.css";
export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="mission">Our Mission:</div>
        <br />
        <div>
          Today, there are <span className="emphasis">Hundreds</span> of issues
          constantly vying for our attention.
        </div>
        <div>
          The world is hurting and problems like{" "}
          <span className="emphasis">Poverty, Violence, Racism</span> are ever
          present in our societies.
        </div>
        <div>
          Dedicated to finding a way for people to do their part in helping
          <span className="emphasis"> Solve</span> some of these issues,
        </div>
        <div>
          we created a platform where it is easy for anyone to find their place
          in their community.
        </div>
        <br />
      </div>
    );
  }
}
