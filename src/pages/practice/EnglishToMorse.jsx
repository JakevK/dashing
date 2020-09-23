import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/practice.css';

import randomWord from './resources/randomWord.jsx';
import dictionary from './resources/dictionary.json';

let morse = {};
for (let value of dictionary) {
    morse[value["char"]] = value["morse"];
}


export default function EnglishToMorse() {
    let [word, setWord] = useState(randomWord());
    let [position, setPosition] = useState(0);
    let [input, setInput] = useState("");
    let [editable, setEditable] = useState(true);

    const handleInput = event => {
        if (!editable) return;

        let newInput =
            event.key === "Backspace"
                ?
                input.slice(0, input.length - 1)
                :
                input + (
                    event.key === "."
                        ?
                        "."
                        :
                        event.key === "/"
                            ?
                            "-"
                            :
                            ""
                );

        setInput(newInput);

        const correctInput = morse[word[position]];
        if (newInput === correctInput) {
            setEditable(false);
            setTimeout(() => {
                if (position === word.length - 1) {
                    setWord(randomWord());
                    setPosition(0);
                }
                else {
                    setPosition(position + 1);
                }
                setInput("");
                setEditable(true);
            }, 100);
        }
    }

    return (
        <div className="container">
            <Link to="/practice" className="back-link">
                change practice mode
            </Link>
            <div className="practice-container">
                <div className="highlight"></div>
                <div className="question" style={{
                    transform: `translateX(calc(50vw - (28.8px / 2) - (28.8px * ${position})))`// - (28.8px * ${position}))`
                }}>{word}</div>
                <input type="text" className={!editable ? "green-input" : ""} onKeyDown={handleInput} value={input} />
                <p>enter the morse code translation for the current letter using the "." and "/" keys</p>
            </div>
        </div>
    );
}