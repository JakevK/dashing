import React, { useState, useEffect } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions'
import '../styles/home.css';

export default function Home() {
    return (
        <div>
            <div className="container">
                <h1>Home</h1>
            </div>
        </div>
    )
}

/*
const Background = () => {
    const { height, width } = useWindowDimensions();
    let [positions, setPositions] = useState({
        "#FF0000": [0, 0],
        "#0000FF": [0, 0],
        "#FFFF00": [0, 0]
    });

    useEffect(() => {
        const interval = setInterval(() => {
            let newPositions = positions;
            for (let dot in newPositions) {
                newPositions[dot] = [
                    Math.floor(Math.random() * width),
                    Math.floor(Math.random() * height)
                ]
            }
            setPositions(newPositions);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const dots = Object.entries(positions).map(position => 
        <div key={position} style={{
            display: "block",
            width: "100px",
            height: "100px",
            backgroundColor: position[0],
            position: "absolute",
            borderRadius: "50%",
            top: position[1][1] + "px",
            left: position[1][0] + "px"
        }}></div>
    );
    console.log(positions);


    return (
        <div>
            {dots}
        </div>
    );
}

*/