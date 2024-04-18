// this file is for starting quiz after reading instruction
import React, { useContext, useState } from "react";
// CSS
import { useLocation, useNavigate } from "react-router-dom";




const Instruction = () => {
  const navigate = useNavigate();
  const [proceedClicked, setProceedClicked] = useState(false);

  const location = useLocation();
  const { detail } = location.state || {};

  const handleProceedClick = () => {
    const newDetail = detail;
    navigate("/quiz", { state: { newDetail } });
  };

  return (
    <div className="instructcontainer">
      <h1>Quiz Instructions</h1>
      <p>
        Welcome to the Quiz App! Please read the following instructions
        carefully before starting the quiz.
      </p>

      <ul>
        <li>There will be a series of questions.</li>
        <li>Choose the correct answer for each question.</li>
        <li>There is a timer for this quiz.</li>
        <li>
          Click the "Proceed" button when you are ready to start the quiz.
        </li>
      </ul>
      <div className="quiz-detail-user">
        <div>{}</div>
      </div>
      {proceedClicked ? (
        <p>Proceed button clicked! Add your custom content or logic here.</p>
      ) : (
        <button onClick={handleProceedClick}>Proceed to Quiz</button>
      )}
    </div>
  );
};
// done p

export default Instruction;
