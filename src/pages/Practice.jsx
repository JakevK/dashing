import React from "react";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import EnglishToMorse from './practice/EnglishToMorse';
import MorseToEnglish from './practice/MorseToEnglish';
import '../styles/practice.css';

export default function Practice() {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${match.path}/english-morse`}>
                    <EnglishToMorse />
                </Route>
                <Route path={`${match.path}/morse-english`}>
                    <MorseToEnglish />
                </Route>
                <Route path={match.path}>
                    <div className="container practice-menu-container">
                        <h1>select a practice mode</h1>
                        <div>
                            <Link to={`${match.path}/morse-english`}>
                                <h2>Morse to English</h2>
                                <p>improve your comprehension skills by interpreting written morse code messages</p>
                            </Link>
                            <Link to={`${match.path}/english-morse`}>
                                <h2>English to Morse</h2>
                                <p>hone your morse code writing skills with given english words</p>
                            </Link>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}