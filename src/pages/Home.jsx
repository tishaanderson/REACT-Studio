import React, { useState, useEffect } from "react";
import '../styles/pageStyles/Home.css';

function Home() {
  return (
    <div className="about-me">
      <p className="about-me-p">
        Hi, I'm Tisha Anderson, a junior software developer driven by the belief
        that technology can empower communities. 
      </p>
      <p className="about-me-p">
        Coming from a small town, I aim to simplify technology for everyday
        people and support small businesses.
      </p>
      <p className="about-me-p">
        As the first woman in my family to graduate from college, I'm inspired
        to create generational wealth.
      </p>
      <p className="about-me-p">
        Eager to learn and grow, I approach challenges with an open mind and
        commitment to excellence. My goal is to make a meaningful impact beyond
        the tech world, fostering trust and economic growth in local
        communities. 
      </p>
      <p className="about-me-p">
        Join me as we explore how technology can bring us together and create a more supportive global community. 😊 
      </p>
    </div>
  );
}

export default Home;
