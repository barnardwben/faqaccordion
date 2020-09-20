import React, { useState } from "react";
import "./QandA.css";

const QandA = ({ question, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question-container">
      <header>
        <h2 className="questions">{question}</h2>
        <button onClick={() => setShowInfo(!showInfo)}>
          {!showInfo ? "Check Answer" : "Hide Info"}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default QandA;
