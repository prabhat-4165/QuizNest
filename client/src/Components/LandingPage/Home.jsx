import React from "react";
// import BannerImage from "./home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div >
        <div >
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div >
          <h1>
          Welcome to Quiz website!🌟 

          </h1>
          <p>
          Immerse yourself in the excitement of our quiz platform. Unravel mysteries, unlock knowledge, and experience the joy of learning in a whole new way!🏆

          </p>
          <button className="d-flex mx-auto btn btn-primary" onClick={()=>{navigate('/register')}}>
           Get Started !{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
// done p

export default Home;