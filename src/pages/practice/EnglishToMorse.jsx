import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import left_arrow from '../images/left_arrow.svg';

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
    let [answerShown, setAnswerShown] = useState(false);

    const showAnswer = () => {
        setAnswerShown(true);
    }

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
            setAnswerShown(false);
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
        <div className="container practice-main">
            <Link to="/practice" className="back-link">
                <img src={left_arrow} className="left-arrow" alt="<-" />
                change practice mode
            </Link>
            <div className="practice-container">
                <div className="highlight" />
                <div className="question" style={{
                    transform: `translateX(calc(50vw - (28.8px / 2) - (28.8px * ${position})))`
                }}>{word}</div>
                <input type="text" className={!editable ? "green-input" : ""} onKeyDown={handleInput} value={input} />
                <p>enter the morse code translation for the current letter using the "." and "/" keys</p>
                <div className="answer" style={{ display: (answerShown ? "block" : "none") }}>answer: {morse[word[position]]}</div>
                <div className="reveal-btn" style={{ display: (answerShown ? "none" : "block") }} onClick={showAnswer}>show answer</div>
            </div>
        </div>
    );
}