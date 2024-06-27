import React from "react";
import img from "./assets/temp2.png";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      {/* <img src={img} alt="" /> */}
    </div>
  );
};

export default App;
