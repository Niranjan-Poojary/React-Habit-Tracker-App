import React from "react";
import Habits from "../actions/habits";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <>
      <div id="app-title">
        <a href="/">
          <span id="firstpart">HABBIT</span> <span id="secondpart">TRACKER</span>
        </a>
      </div>
      <Navbar />
      <Habits />
    </>
  );
};

export default Home;