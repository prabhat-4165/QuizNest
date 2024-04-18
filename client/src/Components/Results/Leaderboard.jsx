import React ,{useState,useEffect}from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import Header from '../LandingPage/Header';
// import BannerBackground from "../R"
// need for CSS file
import axios from 'axios';



 const Leaderboard = () => {

  const location = useLocation();
  const {quiz} = location.state || {};
  const [LeaderboardData,setLeaderboardData] = useState([]);

  console.log(quiz);

  useEffect(()=>{
      getLeaderBoard();
  },[]);

  const getLeaderBoard = async()=>{
    try{
      const response = await axios.post("http://localhost:8000/get-leaderboard",{
          quizId: quiz.quizId,
      });
      if(response){
        setLeaderboardData(response.data.Leaderboard);
        console.log(response);
      }
    } catch(err){
      console.log("some error occure during getting leaderboard",err);
    }

  }

  return (
    <>
      <Header/>
      <h2 className='leader-h2'>Leaderboard of Quiz</h2>
      { quiz ? (
          <div>
            <div className='home-bannerImage-container'>
                {/* <img src={BannerBackground} alt="" /> */}
            </div>
            <table className='leader-table'>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>User Name</th>
                  <th>Score</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              <tbody>
                {LeaderboardData.map( (entry,index) => {
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{entry.userId.name}</td>
                    <td>{entry.score}</td>
                    <td>{entry.timeTaken}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
      ):(
        <div> No Data Available</div>
      )}
    </>
  )
}
//  done p

export default Leaderboard;