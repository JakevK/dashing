/* App
 * Main app file
 * defines router and navigation bar
 */

/* -- imports -- */
import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import * as Pages from "./pages";
import "./styles/nav.css";
import "./styles/transitions.css";

// exported component
export default function App() {
  // return router
  return (
    <Router>
      <Routes />
    </Router>
  );
}

// define routes for BrowserRouter and navigation bar
function Routes() {
  // get current location using hook
  let location = useLocation();
  // return content to be rendered
  return (
    <div>
      {/* navigation bar - rendered on all pages */}
      <nav transform="translateX(0)">
        <Link to="/">dashing</Link>
        <ul>
          <li>
            <NavLink activeClassName="activeNavLink" to="/history">
              History
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavLink" to="/theory">
              Theory
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavLink" to="/practice">
              Practice
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* routing with transitions react-transition-group */}
      <div className="container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route path="/practice" component={Pages.Practice} />
              <Route path="/theory" component={Pages.Theory} />
              <Route path="/history" component={Pages.History} />
              <Route exact path="/" component={Pages.Home} />
              <Route path="/" component={Pages.Error} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
