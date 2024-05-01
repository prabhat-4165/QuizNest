// this file will contain the quiz questions
import React, { useState, useEffect, useRef, useContext } from "react";

import Header from "../LandingPage/Header";
import { useLocation, useNavigate } from "react-router-dom";
import UserQuizContext from "../../Context/UserQuizContext";
import axios from "axios";
import "../../Styles/QuizTest.css";


const startTime = new Date();
const markedOptions = [];

const QuizTest = () => {
  const location = useLocation();
  const { newDetail } = location.state || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [navBarVisible, setNavBarVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [quizOver, setQuizOver] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
//   const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();
  console.log(newDetail);

  const questions = newDetail.quiz.questions;

  const handlePrevious = () => {
    if (!quizOver) {
      setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setSelectedOption(null);
    }
  };

  const quizContainerRef = useRef(null);

  const handleNavBarToggle = () => {
    console.log("Toggling navigation bar visibility");
    setNavBarVisible(!navBarVisible);
    console.log("navBarVisible:", navBarVisible);
  };

  const handleDocumentClick = (event) => {
    // Close the navigation bar if clicked outside the quiz container
    if (
      quizContainerRef.current &&
      !quizContainerRef.current.contains(event.target)
    ) {
      setNavBarVisible(false);
    }
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (
        quizContainerRef.current &&
        !quizContainerRef.current.contains(event.target)
      ) {
        setNavBarVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
    setSelectedOption(null);
  };

  const handleOptionSelect = (index,option) => {
    console.log(option);
    console.log(newDetail.quiz.questions[index].correctAnswer);
    // const newMarkedOptions = [...markedOptions];
    const newOptions = {question: newDetail.quiz.questions[index]._id, selectedOption: option};
    // console.log(markedOptions)
    markedOptions.push(newOptions);  
    // console.log(markedOptions);  
    setSelectedOption(option);
  };

  const handleUndo = () => {
    setSelectedOption(null);
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);

    setNavBarVisible(false);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handlePopupRestart = () => {
    setPopupVisible(false);
    setQuizOver(false);
    setCurrentQuestionIndex(0);
    setTimer(quizDuration);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Set the duration of the quiz in seconds
  const quizDuration = 10*6*5*12; // 1 hour (adjust as needed)

  useEffect(() => {
    // Initialize the timer when the component mounts
    setTimer(quizDuration);

    // Update the timer every second
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setQuizOver(true);
          setPopupVisible(true); // Show the popup when the quiz is over
          clearInterval(timerInterval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    const quizOverTimeout = setTimeout(() => {
        // setStartTime(new Date());
      setQuizOver(true);
      setPopupVisible(true);
      submit();
    //   navigate('/submitted')
      // Clear the interval when the popup is shown
    }, quizDuration * 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
      clearTimeout(quizOverTimeout);
    };
  }, [quizDuration]);



  const submit = async () => {
    console.log("I want to submit the quiz...",markedOptions);
    const endTime = new Date();
    console.log('startTime',startTime)
    console.log('endTime',endTime)
    const timeTaken = Math.floor((endTime - startTime) / 1000)
    const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000); // Calculate timeTaken in seconds
  const timeTakenInMinutes = Math.floor(timeTakenInSeconds / 60);
    console.log(timeTakenInSeconds,timeTakenInMinutes);
    const response = await axios.post('http://localhost:8000/save-quiz',{
        userId: newDetail.userId,
        quizId: newDetail.quiz._id,
        markedOptions,
        timeTaken: timeTakenInMinutes
    })
    if(response){
        console.log(response);
        markedOptions.length = 0
        window.alert('Quiz Submitted successfully')
    }
    navigate('/submitted')
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="body1">
        <div className="quiz-container" ref={quizContainerRef}>
          <button className="nav-bar-toggle" onClick={handleNavBarToggle}>
            &#x2190; {/* left arrow character */}
          </button>
          <div className={`navigation-bar ${navBarVisible ? "visible" : ""}`}>
            <div className="question-buttons">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionNavigation(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="question-container">
            <h2 style={{color:"#fff"}} >{currentQuestion.questionText}</h2>
          </div>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                <div
                  className="option-circle"
                  onClick={() => handleOptionSelect(currentQuestionIndex,option)}
                  color="#8472c4"
                >
                  {selectedOption === option && (
                    <div className="selected-indicator">&#10003;</div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>
          <div className="button-container">
            <div className="timer">Time Left: {formatTime(timer)}</div>
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              style={{backgroundColor:"#8472c4"}}
            >
              Previous
            </button>
            <button onClick={handleUndo} 
                    style={{backgroundColor:"#8472c4"}}  
                    disabled={selectedOption === null}>
              Undo
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              style={{backgroundColor:"#8472c4"}}
            >
              Next
            </button>
            <button onClick={submit} 
                    style={{backgroundColor:"#8472c4"}}>
             Submit
            </button>
            {/* {popupVisible && (
              <div className="popup">
                <div className="popup-content">
                  <p>Quiz Over!</p>
                  <button onClick={handlePopupRestart}>Go Back</button>
                </div>
                <div
                  className="popup-overlay"
                  onClick={() => navigate("/user")}
                ></div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTest;

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};