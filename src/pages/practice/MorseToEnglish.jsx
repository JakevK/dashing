/* MorseToEnglish
 * Practice mode for converting morse code text to english
 */

/* -- inports -- */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import left_arrow from "../images/left_arrow.svg";

import "../../styles/practice.css";

import randomWord from "./resources/randomWord.jsx";
import dictionary from "./resources/dictionary.json";

// create a dictionary from the dictionary.json file and define each
// value as the morse code translation of its key
// also record possible characters for validating input later
let morse = {};
const possibleChars = [];
for (let value of dictionary) {
  morse[value["char"]] = value["morse"];
  possibleChars.push(value["char"]);
}
// function to translate any english text into morse code
const translate = (english) =>
  english
    .split("")
    .map((x) => morse[x])
    .join(" ");

// exported component
export default function MorseToEnglish() {
  // current word to translate
  let [word, setWord] = useState(randomWord());
  // current position of translation in word
  let [position, setPosition] = useState(0);
  // keeps track of current user input
  let [input, setInput] = useState("");
  // true/false for if user input is correct or not, null for not determined
  let [correct, setCorrect] = useState(null);
  // controls whether or not the answer is shown
  let [answerShown, setAnswerShown] = useState(false);

  // set the answer to be shown
  const showAnswer = () => {
    setAnswerShown(true);
  };

  // processes input when the user tries to types something
  const handleInput = (event) => {
    // if correctness has been determined, exit as text should not
    // be inputted until the callback has been triggered
    if (correct !== null) return;
    // don't allow input of invalid characters
    if (!possibleChars.includes(event.key)) return;

    // update state with new input
    setInput(event.key);

    // check inputted value against correct value
    const isCorrect = event.key === word[position];
    // update state with this value
    setCorrect(isCorrect);

    // add small delay so user has time to see what happened
    setTimeout(() => {
      // reset input and allow user to type again
      setCorrect(null);
      setInput("");

      if (isCorrect) {
        // input is correct
        setAnswerShown(false);

        if (position === word.length - 1) {
          // word is complete; get a new one
          setPosition(0);
          setWord(randomWord());
        } else {
          // go to next character
          setPosition(position + 1);
        }
      }
    }, 100);
  };

  // return HTML to be rendered - self explanatory
  return (
    <div className="container practice-main">
      <Link to="/practice" className="back-link">
        <img src={left_arrow} className="left-arrow" alt="<-" />
        Change practice mode
      </Link>

      <div className="practice-container">
        <div
          className="highlight"
          style={{
            width: `${28.8 * translate(word[position]).length}px`,
          }}
        ></div>
        <div
          className="question"
          style={{
            transform: `translateX(calc(50vw - (28.8px * ${
              translate(word.slice(0, position)).length + (position > 0 ? 1 : 0)
            }) - ((28.8px * ${translate(word[position]).length}) / 2)))`,
          }}
        >
          {translate(word)}
        </div>
        <input
          type="text"
          className={
            correct === null ? "" : correct ? "green-input" : "red-input"
          }
          onKeyDown={handleInput}
          value={input}
        />
        <div className="p-container">
          <p>
            Enter the english translation for the current morse code character
            in the box above.
          </p>
        </div>
        <div
          className="answer"
          style={{ display: answerShown ? "block" : "none" }}
        >
          Answer: {word[position]}
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
