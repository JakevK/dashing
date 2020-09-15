import React, { useEffect, useState } from 'react';
import dictionary from './resources/dictionary.json';
import '../../styles/practice.css';
import {useParams, Redirect, useRouteMatch} from 'react-router-dom';


export default function Classic() {
    let [ settings, setSettings ] = useState({});
    let { mode } = useParams();
    let match = useRouteMatch();

    useEffect(() => {
        switch (mode) {
            case "morse-english":
                setSettings({
                    gameMode: "1"
                });
                break;
            case "english-morse":
                setSettings({
                    gameMode: "2"
                })
                break
            default:
                setSettings(null);
    }
    }, []);
    
    if (settings == null) {
        return <Redirect to={match.path.split(':')[0]} />
    }
    return (
        <div>
            <h1>classic</h1>
            <p>mode: {mode}</p>
        </div>
    )
}