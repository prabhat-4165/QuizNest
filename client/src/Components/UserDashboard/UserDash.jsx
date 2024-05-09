import React, { useContext, useEffect, useState } from "react";
// import "./quizcode.css";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import Login from "../LoginSignup/Login";
import axios from "axios";
import "../../Styles/UserDash.css";

const Quizcode = () => {
  const [quizCode, setquizCode] = useState("");
  const [quizDetail, setquizDetail] = useState([]);
  const navigate = useNavigate();

  const { loginId } = useContext(LoginContext);
  console.log("bla bla", loginId);
  useEffect(() => {
    if (loginId && loginId.quizIds) {
      getHistory();
    }
  }, [loginId]);

  const getHistory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/get-userHistory",
        {
          userId: loginId.userId,
        }
      );
      if (response) {
        setquizDetail(response.data.userHistory);
        console.log(quizDetail);
        // console.log(response.data.userHistory);
      }
    } catch (error) {
      console.log("Some Error Occured during getting quiz history", error);
    }
  };

  const startQuiz = async () => {
    // console.log(loginId);

    // getHistory();
    // console.log(quizCode)

    const response = await axios.post("http://localhost:8000/get-quiz", {
      quizId: quizCode,
    });

    // console.log(response);
    // console.log(loginId);
    if (response.data.status === 422) {
      window.alert("Quiz Not Available");
      return;
    }
    const detail = {
      userId: loginId.userId,
      userName: loginId.userName,
      quiz: response.data.quiz,
    };
    navigate("/instruction", { state: { detail } });
  };

  const viewResult = async (quizId) => {
    // console.log(quizId,loginId.userId);
    const send = {quizId: quizId, userId: loginId.userId};
    console.log(send);
    navigate("/result", {state: {send}})
  }

  return (
    <div style={{background: "linear-gradient(rgba(0,0,50,0.7),rgba(0,0,50,0.7))", color: "#8472c4", minHeight: "89vh"}}>
      {loginId ? (
        <div>
          {/* <Header /> */}
          <div style={{color:"#fff"}} >Welcome {loginId.userName}</div>
          <div className="verification-container">
            <div className="codeheader">
              <div className="codetext" style={{color:"#fff"}}>Verification Code</div>
              <div className="codeunderline"></div>
            </div>
            <div className="codeinput">
              <input
                type="text"
                placeholder="Code"
                onChange={(e) => setquizCode(e.target.value)}
              />
            </div>
            <div className="codesubmit-container">
              <button className="codesubmit" onClick={startQuiz}>
                OK
              </button>
            </div>
          </div>

          <h2 className="quiz-history-heading" style={{color: "#fff"}} >Quiz History</h2>
          <div className="quiz-history-container"  style={{background: "transparent", color:"#fff" }}>

            {/* Quiz history items */}

            {quizDetail.length === 0 ? (
              <div>No User History</div>
            ) : (
              quizDetail.map((det,i)=>(
                <div className="quiz-history-item" key={i} style={{border: "2px solid #8472c4"}} > 
                <div>Quiz Name: {det.quizName}</div>
                <div>Duration: {det.duration} minutes</div>
                <div>Marks: {det.score}</div>
                {det.score !== "Not available" ? (<button onClick={()=>viewResult(det.quizId)}>View</button>): (<button disabled>Not Published</button>)}
                
              </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Quizcode;
