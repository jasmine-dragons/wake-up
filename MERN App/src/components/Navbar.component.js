import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <div>
          <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">WAKE UP!</Navbar.Brand>
            <Nav className="container-fluid">
              <Nav.Link href="/PostArticle">Post an Article!</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/LogIn">
                    Log In
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">
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
