import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./logo52x50.png";
export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <div>
          <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Nav className="container-fluid">
              <Nav.Link href="/PostArticle">Post!</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/LogIn">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign Up!
                  </a>
                </li>
              </ul>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}
