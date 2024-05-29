import React, { useState, useEffect } from "react";

import "../styles/componentStyles/Title.css";

function NameTitle() {
  const [titleText, setTitleText] = useState("");
  const [subTitleText, setSubTitleText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    // types out the main title
    typeOutText("Full-Stack Software Engineer", setTitleText, () => {
      // sets the state once main title is fully typed
      setTypingCompleted(true);
    });
  }, []);

  useEffect(() => {
    if (typingCompleted) {
      // waits for a delay before typing out the subtitle
      setTimeout(() => {
        typeOutText("::Junior Status::", setSubTitleText);
      }, 500);
    }
  }, [typingCompleted]);

  // function to type out text dynamically
  function typeOutText(text, setText, onComplete) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setText((prevText) => prevText + text[i]);
        if (i === text.length - 1 && onComplete) {
          onComplete(); // calls the onComplete callback when typing is complete
        }
      }, i * 75); // Adjust the typing speed as needed
    }
  }

  return (
    <div>
      <h2 className="name" id="firstName">
        Tisha <span id="lastName">Anderson</span>{" "}
      </h2>
      <h3 className="title" id="title">
        <span className="dev">
          {titleText}
          <span className="blinking-underscore">&#95;</span>
        </span>
        <br />
        <span className="jr-status">
          {subTitleText}
          {typingCompleted && (
            <span className="blinking-underscore">&#95;</span>
          )}
        </span>
      </h3>
    </div>
  );
}

export default NameTitle;
