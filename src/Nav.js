import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header.js';
import Home from './screen/Home.js';
import Calculator from './screen/Calculator.js';
import Quote from './screen/Quote.js';

const Nav = () => (
        <Router>
          <div>
              <Header/>
        <Switch>
          <Route
          exact path="/" component={Home}
          >
          </Route>
          <Route
          exact path="/Calc" component={Calculator}
          >
          </Route>
          <Route
          exact path="/Quote" component={Quote}
          >
          </Route>
        </Switch>
        </div>
      </Router>
);
export default Nav;