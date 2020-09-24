import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import left_arrow from '../images/left_arrow.svg';

import '../../styles/practice.css';

import randomWord from './resources/randomWord.jsx';
import dictionary from './resources/dictionary.json';

let morse = {};
const possibleChars = [];
for (let value of dictionary) {
    morse[value["char"]] = value["morse"];
    possibleChars.push(value["char"]);
}
const translate = english => english.split('').map(x => morse[x]).join(' ');



export default function MorseToEnglish() {
    let [word, setWord] = useState(randomWord());
    let [position, setPosition] = useState(0);
    let [input, setInput] = useState("");
    let [correct, setCorrect] = useState(null);
    let [answerShown, setAnswerShown] = useState(false);

    const showAnswer = () => {
        setAnswerShown(true);
    }

    const handleInput = event => {
        if (correct !== null) return;
        if (!possibleChars.includes(event.key)) return;

        setInput(event.key);
        const isCorrect = event.key === word[position];
        setCorrect(isCorrect);

        setTimeout(() => {
            setCorrect(null);
            setInput("");
            if (isCorrect) {
                setAnswerShown(false);
                if (position === word.length - 1) {
                    setPosition(0);
                    setWord(randomWord());
                }
                else {
                    setPosition(position + 1);
                }
            }
        }, 100);

    }

    return (
        <div className="container practice-main">
            <Link to="/practice" className="back-link">
                <img src={left_arrow} className="left-arrow" alt="<-" />
                change practice mode
            </Link>

            <div className="practice-container">
                <div className="highlight" style={{
                    width: `${28.8 * (translate(word[position]).length)}px`
                }}></div>
                <div className="question" style={{
                    transform: `translateX(calc(50vw - (28.8px * ${translate(word.slice(0, position)).length + (position > 0 ? 1 : 0)}) - ((28.8px * ${translate(word[position]).length}) / 2)))`
                }}>
                    {translate(word)}
                </div>
                <input type="text" className={correct === null ? "" : (correct ? "green-input" : "red-input")} onKeyDown={handleInput} value={input} />
                <p>enter the english translation for the current morse code character</p>
                <div className="answer" style={{ display: (answerShown ? "block" : "none") }}>answer: {word[position]}</div>
                <div className="reveal-btn" style={{ display: (answerShown ? "none" : "block") }} onClick={showAnswer}>show answer</div>
            </div>
        </div>
    );
}