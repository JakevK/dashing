/* EnglishToMorse
 * Practice mode for converting english text to morse code
 */

/* -- imports -- */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import left_arrow from "../images/left_arrow.svg";

import "../../styles/practice.css";

import randomWord from "./resources/randomWord.jsx";
import dictionary from "./resources/dictionary.json";

// create a dictionary from the dictionary.json file and define each
// value as the morse code translation of its key
let morse = {};
for (let value of dictionary) {
  morse[value["char"]] = value["morse"];
}

// Exported component
export default function EnglishToMorse() {
  // current word to translate
  let [word, setWord] = useState(randomWord());
  // current position of translation in word
  let [position, setPosition] = useState(0);
  // keeps track of current user input
  let [input, setInput] = useState("");
  // controls the editability of the text input
  let [editable, setEditable] = useState(true);
  // controls whether or not the answer is shown
  let [answerShown, setAnswerShown] = useState(false);

  // set the answer to be shown
  const showAnswer = () => {
    setAnswerShown(true);
  };

  // processes input when the user tries to type something
  const handleInput = (event) => {
    // shouldn't do anything, because not editable
    if (!editable) return;

    // work out whether to add a dot or a dash, remove a char (backspace),
    // or to not add anything (invalid input)
    let newInput =
      event.key === "Backspace"
        ? input.slice(0, input.length - 1)
        : input + (event.key === "." ? "." : event.key === "/" ? "-" : "");

    // update state with the new value
    setInput(newInput);

    // check inputted value against correct translation
    const correctInput = morse[word[position]];
    if (newInput === correctInput) {
      //input is correct
      setAnswerShown(false);
      setEditable(false);
      // add a small delay so that the user has time to see what happened
      setTimeout(() => {
        if (position === word.length - 1) {
          // word is complete; get a new one
          setWord(randomWord());
          setPosition(0);
        } else {
          // go to next character
          setPosition(position + 1);
        }
        // reset input and allow for further input
        setInput("");
        setEditable(true);
      }, 100);
    }
  };

  // return HTML to be rendered - self explanatory
  return (
    <div className="container practice-main">
      <Link to="/practice" className="back-link">
        <img src={left_arrow} className="left-arrow" alt="<-" />
        Change practice mode
      </Link>
      <div className="practice-container">
        <div className="highlight" />
        <div
          className="question"
          style={{
            transform: `translateX(calc(50vw - (28.8px / 2) - (28.8px * ${position})))`,
          }}
        >
          {word}
        </div>
        <input
          type="text"
          className={!editable ? "green-input" : ""}
          onKeyDown={handleInput}
          value={input}
        />
        <div className="p-container">
          <p>
            Enter the morse code translation for the current letter in the box
            above using the "." and "/" keys.
          </p>
        </div>
        <div
          className="answer"
          style={{ display: answerShown ? "block" : "none" }}
        >
          Answer: {morse[word[position]]}
        </div>
        <div
          className="reveal-btn"
          style={{ display: answerShown ? "none" : "block" }}
          onClick={showAnswer}
        >
          Show answer
        </div>
      </div>
    </div>
  );
}
