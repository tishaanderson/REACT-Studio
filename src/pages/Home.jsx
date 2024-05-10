import React, { useState, useEffect } from "react";

function Home() {
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
      <h2 className='name' id='firstName'>Tisha <span id='lastName'>Anderson</span> </h2>   
      <h3 className='title' id="title">
        <span className="dev">{titleText}</span>
        {/* <span className="underscore">_</span> */}
        <br />
        <span className="jr-status">{subTitleText}</span>
        {/* <span className="underscore">_</span>  */}
      </h3>

      <p>
        Hi, I'm Tisha Anderson, a junior software developer driven by the belief that technology can empower communities. Coming from a small town, I aim to simplify technology for everyday people and support small businesses. As the first woman in my family to graduate from college, I'm inspired to create generational wealth. Eager to learn and grow, I approach challenges with an open mind and commitment to excellence. My goal is to make a meaningful impact beyond the tech world, fostering trust and economic growth in local communities. Join me as we explore the intersection of technology and community, united in creating a more supportive global community.
      </p>
    </div>
  );
}

export default Home;