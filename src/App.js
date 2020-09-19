import React, { useState } from "react";
import "./App.css";
import QandA from "./QandA";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <div className="accordion-container">
        <h2 className="header-text">Questions And Answers About React</h2>
        <section>
          {questions.map((question) => {
            return <QandA key={question.id} {...question}></QandA>;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
