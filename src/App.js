import React, { Component } from "react";

import Movies from "./components/movies";
import Series from "./components/series";
import Home from "./components/home";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const Mlist = styled.ul`
  background-color:rgba(26,36,46);
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 3rem;
  color: white;
`


class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div>
          <nav>
            <Mlist>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </Mlist>
          </nav>

          <Switch>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
