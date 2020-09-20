import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    const handleInput = event => {
        if (correct !== null) return;
        if (!possibleChars.includes(event.key)) return;

        setInput(event.key);
        const isCorrect = event.key === word[position];

        setTimeout(() => {
            setCorrect(null);
            setInput("");
            if (isCorrect) {
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
        <div className="container">
            <Link to="/practice" className="back-link">
                change practice mode
            </Link>

            <div className="practice-container">
                <div className="question-string">
                    <div className="sides-left">
                        {translate(word.slice(0, position))}
                    </div>
                    <div className="highlighted morse">
                        {translate(word[position])}
                    </div>
                    <div className="sides-right">
                        {translate(word.slice(position + 1, word.length + 1))}
                    </div>
                </div>
                <input type="text" onKeyDown={handleInput} value={input} />
                <p>enter the english translation for the current morse code character</p>
            </div>
        </div>
    );
}