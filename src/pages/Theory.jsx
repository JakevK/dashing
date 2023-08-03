/* Theory
 * Brief summary of how morse code works
 */

/* -- imports -- */
import React from "react";
import "../styles/static.css";
import alphabet from "./images/alphabet.png";

// exported component
export default function Theory() {
  // return static HTML content
  return (
    <div className="container static">
      <h1>Theory</h1>
      <p>
        In international morse code, the most popular form and the one we will
        be learning, characters are made up of sequences of dots and dashes,
        also referred to as dits and dahs. The length of a dash is three times
        that of a dot, with each having one dot worth of space between them.
        Between characters, a pause lasting the length of three dots is used,
        and a pause measuring seven dots long should divide each word.
      </p>
      <p>
        The representations of letters in morse code were constructed with
        character frequency in mind. For maximum efficiency, the letters that
        are used most commonly in English, such as "E" and "T" have the shortest
        morse code representations. The morse code translations for each letter
        in the English alphabet are shown below:
      </p>
      <img src={alphabet} alt="morse code alphabet" />
      <div className="caption">
        The morse code alphabet (
        <a href="https://internationaljournalofresearch.com/2020/07/15/history-of-morse-code-2/">
          source
        </a>
        )
      </div>
      <p>
        You may recognise some of these letters already, in particular the
        representations for "S" and "O", due to their use in the well known
        univeral signal of distress, "SOS". This combination of letters was
        chosen specifically for this purpose because of the simplicity and
        symmetry in their encodings. Three dots, followed by three dashes,
        followed by three dots, an iconic sequence that almost anyone can recall
        and understand, regardless of possible language barriers.
      </p>
    </div>
  );
}
