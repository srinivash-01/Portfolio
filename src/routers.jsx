import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import SideNavBar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
function Rout() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100%" }}>
        <SideNavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default Rout;
