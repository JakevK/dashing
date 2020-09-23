import React, { useState, useEffect } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions'
import '../styles/home.css';

export default function Home() {
    useEffect(() => {
        let nav = document.getElementsByTagName('nav')[0];
        const previousStyles = getComputedStyle(nav);
        nav.style.height = '100vh';
        nav.style.paddingTop = '520px';
        nav.style.boxShadow = 'none';
        nav.firstChild.style.display = 'none';
        let ul = nav.children[1];
        const previousUl = getComputedStyle(ul);
        ul.style.width = '100%';
        ul.style.display = 'flex';
        ul.style.justifyContent = 'center';

        const descriptions = {
            "theory": "learn about how morse code works and how to use it",
            "history": "learn about the development and use of morse code over time",
            "practice": "have some fun and improve your skills"
        }
        for (let child of ul.children) {
            let p = document.createElement("p");
            let desc = child.firstChild;
            let key = desc.innerHTML;
            let description = descriptions[key];
            let text= document.createTextNode(description);
            p.appendChild(text);
            child.firstChild.appendChild(p);
            child.style.margin = '25px 50px';
        }


        return () => {
            nav.style = previousStyles;
            nav.firstChild.style.display = 'block';
            ul.style = previousUl; 
            for (let child of ul.children) {
                child.firstChild.removeChild(child.firstChild.children[0]);
                child.style.margin = "25px 0 0 0";
            }
        }
    }, []);

    return (
        <div>
            <div className="container top-container">
                <h1 className="main-title">dashing</h1>
                <h2 className="sub-title">dial in your morse code skills</h2>
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