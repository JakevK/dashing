import words from "./words.json";

const randomWord = () =>
  words[Math.floor(Math.random() * words.length)].toLowerCase();

export default randomWord;
