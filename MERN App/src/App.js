import React from "react";
import NavBar from "./components/Navbar.component";
import Header from "./components/Header.component";
import Feed from "./components/Feed.component";
import About from "./components/About.component";
import Search from "./components/Search.component";
import Footer from "./components/Footer.component";
import "./components/css/App.css";
import "./components/css/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <NavBar />
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Search} />
          <br />
          <Route path="/articles" component={Feed} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
