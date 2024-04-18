import React,{useState, useEffecct, useEffect} from 'react'
// need for css
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../LandingPage/Header';



 const Result = () => {

  const [quizData,setQuizData] = useState([]);
  const location = useLocation();
  const send = location.state || {};
  const navigate = useNavigate();
  useEffect( ()=> {
    getResult();
    console.log(getResult);
    console.log(send);
  },[])

  const getResult = async()=>{
    try{
      const response = await axios.post("http://localhost:8000/get-result",{
        userId: send.userId,
        quizId: send.quizId,
      });
      if(response){
        console.log(response);
        setQuizData(response.data.quizDetails);
        console.log(quizData);
      }
    }catch (error) {
      console.log("Some Error Occured while getting result", error);
    }
  };
  if(!quizData){
    return (<div>Loading...</div>);
  }


  const getLeaderboard = () => {
    const quiz = {quizId: send.quizId};
    navigate('/leaderboard',{state:{quiz}});
  }



  return (
    <div>
      <Header />
      <div>
        <h1>Quiz Result</h1>
        <div>
          {quizData.map.length !== 0 ? (
            quizData.map((question,index) => (
              <div key={index}>
                {index+1}.{question.question}
                <div>
                  {question.options.map((opt,jk)=>(
                    <div key={jk}>
                      <input type='radio' disabled />{opt}
                    </div>
                  ))}
                </div>
                <div>Correct Answer: {question.correctAnswer}</div>
                <div>Marked Answer: {question.userSelectedOption}</div>
              </div>
            ))
          ):(
            <div>Nothing to show</div>
          )}
        </div>
      </div>
      <button onClick={getLeaderboard}>LeaderBoard</button>
    </div>
  )
}

// done p

export default Result;