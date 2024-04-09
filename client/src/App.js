//import './App.css';
// import { Route, Routes } from "react-router-dom";
import {Signup, Login} from "./Pages";
// import Leaderboard from "./Pages/Leaderboard.js";
import 'bootstrap/dist/css/bootstrap.min.css'
 import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home";
import Leaderboard from "./Pages/Leaderboard";
import Result from "./Pages/Result";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Login" element={<Login />}/>
       <Route path="/signup" element={<Signup />}/>
       <Route path="/Leaderboard" element={<Leaderboard />}/>
       <Route path="/Result" element={<Result />}/>
    </Routes>
  );
}

export default App;
