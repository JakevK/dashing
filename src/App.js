import React from "react";

import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useLocation
} from "react-router-dom";

import * as Pages from './pages/index';
import './styles/nav.css';
import './styles/transitions.css';

export default function App() {
    return (
        <Router>
            <Routes/>
        </Router>
    )
}

function Routes() {
    let location = useLocation();
    return (
            <div>
                <nav>
                    <Link to="/">dashing</Link>
                    <ul>
                        <li>
                            <NavLink activeClassName="activeNavLink" to="/history">history</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeNavLink" to="/theory">theory</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeNavLink" to="/practice">practice</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={500}
                        >
                            <Switch location={location}>
                                <Route path="/practice" component={Pages.Practice} />
                                <Route path="/theory" component={Pages.Theory} />
                                <Route path="/history" component={Pages.History} />
                                <Route exact path="/" component={Pages.Home} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
    );
}





