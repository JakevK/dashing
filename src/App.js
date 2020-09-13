import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import * as Pages from './pages/index';
import './styles/nav.css';


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">MorseCode</Link>
                        </li>
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                        <li>
                            <Link to="/theory">Theory</Link>
                        </li>
                        <li>
                            <Link to="/practice">Practice</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/practice" component={Pages.Practice}/>
                    <Route path="/theory" component={Pages.Theory}/>
                    <Route path="/history" component={Pages.History}/>
                    <Route path="/" component={Pages.Home}/>
                </Switch>
            </div>
        </Router>
    );
}





