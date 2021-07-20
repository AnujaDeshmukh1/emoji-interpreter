import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smilling",
  "😂": "Tears of Joy",
  "😍": "Heart Shaped Eyes",
  "😋": "Savouring",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "🤣": "Rolling on the floor Laughing",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😗": "Kissing Face",
  "🥲": "Smilling Face with Tear",
  "😛": "Face with Toungue",
  "😕": "Confused Face",
  "😕": "Worried Face",
  "😭": "Loudly Crying Face",
  "💕": "Love"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3>Emojis We Know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
