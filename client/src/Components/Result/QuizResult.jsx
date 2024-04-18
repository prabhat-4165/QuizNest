import React, { useState, useEffect } from "react";
// need for Css file
import Header from "../LandingPage/Header";

const QuizResult = () => {
  const [quizData, setQuizData] = useState(null);
  useEffect(() => {
    // apicall
    fetch("api-endpoint")
      .then((Response) => Response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  if (!quizData) {
    return <din>Loading...</din>;
  }

  const { questions, userAnswers } = quizData;
  
  // function for calculate score for each user
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer,index) => {
      if(userAnswer === questions[index].correctAnswer){
        // score += questions[index].marks;
        score += 1;
      }
    });
    return score;
  }

  return (
    <>
      <div>
        <Header />
        <div className="Result-container">
          <h1>Quiz App</h1>
          {questions.map((q,index) => {
              <div key={index} className="question-container">
                <p>{q.question}</p>
                <div className="answer-options">
                  <p>Marked Answer:{userAnswers[index]}</p>
                  <p>Correct Answer:{q.correctAnswer}</p>
                </div>
              </div>
          })};
          <div className="result-container">
            <h2>Quiz Result</h2>
            <p>Your Score:{calculateScore()} out of {questions.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};
// done p

export default QuizResult;
